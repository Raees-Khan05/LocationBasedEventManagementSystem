'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, MapPin, Users } from 'lucide-react'

export default function UpcomingEvents({ categories = [], events = [] }) {
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

        <section className="py-12 px-6 container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
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
            {filteredEvents.map(event => (
              <Card key={event._id} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                  <CardTitle className="text-xl text-primary">{event.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {event.startDate}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground mb-2">{event.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" /> {event.address}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <Users className="w-4 h-4" /> {event.attendees} attendees
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between bg-muted/50">
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                    {event.category.title}
                  </Badge>
                  <Button variant="ghost" className="text-primary group-hover:text-primary/80 transition-colors">Learn More</Button>
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

