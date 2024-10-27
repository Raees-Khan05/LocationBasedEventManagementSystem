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
import { Button } from '@/components/ui/button'
import { AddSubCategory } from '@/components/AddSubCategory/AddSubCategory'

const subCategories = [
  {
    title : 'Cricket',
    category : 'Sports',
    thubmnail : 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJpcmh0ZGF5JTIwZXZlbnR8ZW58MHx8MHx8fDA%3D' ,
    description : 'ALL birthday events',
  },
  {
    title : 'Football',
    category : 'Sports',

    description : 'Cylicng race of a little Babby',
    thubmnail : 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJpcmh0ZGF5JTIwZXZlbnR8ZW58MHx8MHx8fDA%3D' ,
  },
  {
    title : 'Tennis',
    category : 'Sports',
    description : 'Birthday of a little Babby',
    thubmnail : 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJpcmh0ZGF5JTIwZXZlbnR8ZW58MHx8MHx8fDA%3D' ,
  },

  
 
]

const SubCategories = () => {
  return (
    <div className='min-h-screen'>

      <div  className='flex justify-between items-center mx-7 my-1 py-3'>
        <h1 className='font-bold'>Sub-Categories</h1>
       <AddSubCategory />
      </div>

<Table>
      <TableCaption>A list of your Sub-Categories.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead >Thubmnail</TableHead>
          <TableHead className="w-[100px]">Title</TableHead>
          <TableHead>Category</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {subCategories.map((category) => (
          <TableRow key={category.title}>
            <TableCell className="text-right">
              <Image alt={'user'} src={category.thubmnail} height={40} width={40} className='rounded-md'/>
            </TableCell>
            <TableCell className="font-medium">{category.title}</TableCell>
            <TableCell >{category.description}</TableCell>
          </TableRow>
        ))}
      </TableBody> 
    </Table>   
     </div>
  )
}

export default SubCategories 
