

import UpcomingEvents from '@/components/UpcomingEvents/UpcomingEvents'
import { auth } from '../../auth'
import { getEvents } from '@/actions/events';
import { getCategories } from '@/actions/categories';



export default async function HomePage({ searchParams }) {
  console.log("searchParams==>" , searchParams);
  const { category } = searchParams;
  const session = await auth();
  const { events } = await getEvents();
  const { categories } = await getCategories();


  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <header className="p-4 bg-background/80 backdrop-blur-sm border-b sticky top-0 z-10">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Find Your Friend</h1>
          <p className="text-xl mb-8">
            Discover events and make new connections
          </p>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Events</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>


      <UpcomingEvents session={session} events={events} categories={categories}/>
    </div>
  )
}

