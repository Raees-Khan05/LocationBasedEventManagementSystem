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

const users = [
  {
    fullName : 'Raees Awan',
    email : 'raees123@gmail.com',
    location : "Karachi",
    profileImage : 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    events : 5
  },
  {
    fullName : 'Asad Awan',
    email : 'asad123@gmail.com',
    location : "Islamabad",
    profileImage : 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    events : 5
  },{
    fullName : 'Nouman Khan',
    email : 'Noumi321@gmail.com',
    location : "lahore",
    profileImage : 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' ,
    events : 5
  },
]

const Users = () => {
  return (
    <div className='min-h-screen'>
<Table>
      <TableCaption>A list of your recent Users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead >Profile Image</TableHead>
          <TableHead className="w-[100px]">fullName</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>location</TableHead>
          <TableHead className="text-right">Events</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.fullName}>
            <TableCell className="text-right">
              <Image alt={'user'} src={user.profileImage} height={40} width={40} className='rounded-md'/>
            </TableCell>
            <TableCell className="font-medium">{user.fullName}</TableCell>
            <TableCell className="font-medium">{user.email}</TableCell>
            <TableCell>{user.location}</TableCell>
            <TableCell>{user.events}</TableCell>
          </TableRow>
        ))}
      </TableBody> 
    </Table>   
     </div>
  )
}

export default Users
