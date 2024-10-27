import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from 'next/image'

const events = [
  {
    title : 'Birthday Event',
    description : 'Birthday of a little Babby',
    location : "Karachi",
    thubmnail : 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJpcmh0ZGF5JTIwZXZlbnR8ZW58MHx8MHx8fDA%3D' ,
    date : new Date().toLocaleDateString()
  },
  {
    title : 'Cycling Event',
    description : 'cycling of a little boy champ',
    location : "lahore",
    thubmnail : 'https://images.unsplash.com/photo-1655977952876-e8af6d4f0877?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    date : new Date().toLocaleDateString()
  },
  {
    title : 'football Event',
    description : 'football event of liyari team',
    location : "Sarghoda",
    thubmnail : 'https://images.unsplash.com/photo-1504016798967-59a258e9386d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vdGJhbGwlMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D' ,
    date : new Date().toLocaleDateString()
  },
  {
    title : 'Birthday Event',
    description : 'Birthday of a little Babby',
    location : "Karachi",
    thubmnail : 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    date : new Date().toLocaleDateString()
  },
 
]

const Events = () => {
  return (
    <div className='min-h-screen'>
<Table>
      <TableCaption>A list of your recent Events.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead >Thubmnail</TableHead>
          <TableHead className="w-[100px]">Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Location</TableHead>
          <TableHead className="text-right">Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {events.map((event) => (
          <TableRow key={event.title}>
            <TableCell className="text-right">
              <Image alt={'user'} src={event.thubmnail} height={40} width={40} className='rounded-md'/>
            </TableCell>
            <TableCell className="font-medium">{event.title}</TableCell>
            <TableCell >{event.description}</TableCell>
            <TableCell>{event.location}</TableCell>
            <TableCell>{event.date}</TableCell>
          </TableRow>
        ))}
      </TableBody> 
    </Table>   
     </div>
  )
}

export default Events
