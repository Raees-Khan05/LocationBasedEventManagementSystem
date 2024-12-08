'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, CalendarIcon, MapPin, MapPinIcon, Users } from 'lucide-react'
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import AddEventForm from '../AddEventSheet/AddEventSheet'
import Link from 'next/link'
import { SearchDropdown } from '../SearchDropdown/SearchDropdown'

export default function UpcomingEvents({ categories = [], events = [] , session , chosenCategory }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSelectCategory = (id) => {
    const params = new URLSearchParams(searchParams);
    if (id) {
      params.set("category", id);
    } else {
      params.delete("category");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredEvents = events.filter(event => 
    (selectedCategory === 'All' || event.category.title === selectedCategory) &&
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <main>
        <section className="py-24 px-6 text-center bg-gradient-to-r from-primary/80 via-primary to-primary/80">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary-foreground mb-6 drop-shadow-md">
            Find Your Friend
          </h1>
          <p className="max-w-[600px] text-lg text-primary-foreground/90 md:text-xl mx-auto mb-8">
            Discover exciting events, make new connections, and find your next adventure!
          </p>
          <div className="max-w-md mx-auto flex gap-2 mb-8">
            <Input 
              type="search" 
              placeholder="Search events..." 
              className="bg-background/50 border-primary-foreground/20"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="secondary">Search</Button>
          </div>
          <Button size="lg" variant="secondary" className="font-semibold">
            Explore Events
          </Button>
        </section>

        <section className="py-12  container mx-auto">
          <div className='flex items-end justify-end '> 
          <h2 className="text-3xl font-bold text-center mb-8 pr-20 align-middle">Upcoming Events</h2>
          
         

          <div className="flex gap-4 pb-8 pl-20">
            <SearchDropdown
              categories={categories}
              onSelectCategory={handleSelectCategory}
            />

            {session ? (
              <AddEventForm session={session} categories={categories} />
            ) : (
              <Link href={"/signin"}>
                <Button>Login to Add Event</Button>
              </Link>
            )}
         

          </div>

          </div>



          <div className="flex justify-center flex-wrap gap-2 mb-8">
            <Button
              key="all"
              variant={selectedCategory === 'All' ? "default" : "outline"}
              onClick={() => setSelectedCategory('All')}
              className="rounded-full"
            >
              All
            </Button>




           


            {categories.map(category => (
              <Button
                key={category._id}
                variant={selectedCategory === category.title ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.title)}
               
                className="rounded-full"
              >
                {category.title}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {events.map((event) => (
    <Card key={event._id} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
        <CardTitle className="text-xl text-primary">{event.title}</CardTitle>
        <CardDescription>{event.category.title}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="aspect-video w-full mb-4">
          <img
            src={event.thumbnail}
            alt={event.title}
            className="object-cover w-full h-full rounded-md"
          />
        </div>
        <p className="text-muted-foreground mb-2 flex items-center">
          <CalendarIcon className="mr-2 h-4 w-4" />
          {new Date(event.startDate).toLocaleDateString()} {event.startTime} - {event.endTime}
        </p>
        <p className="text-muted-foreground flex items-center">
          <MapPinIcon className="mr-2 h-4 w-4" />
          {event.address}
        </p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
          <Users className="w-4 h-4" /> {event.attendees || 0} attendees
        </div>
      </CardContent>
      <CardFooter className="flex justify-between bg-muted/50">
        <div className="flex items-center">
          <img
            src={event.createdBy.profileImg}
            alt={event.createdBy.fullname}
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="text-sm">{event.createdBy.fullname}</span>
        </div>
        <Link href={`/event/${event._id}`}>
          <Button variant="ghost" className="text-primary group-hover:text-primary/80 transition-colors">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  ))}
</div>


        </section>
      </main>

      <footer className="bg-background text-center p-6 mt-12">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Find Your Friend. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

