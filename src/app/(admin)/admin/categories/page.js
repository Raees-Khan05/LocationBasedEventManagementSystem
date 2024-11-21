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
import { AddCategory } from '@/components/AddCategory/AddCategory'
import { getCategories } from '@/actions/categories'



const Categories = async () => {

  const categories = await getCategories();

  return (
    <div className='min-h-screen'>

      <div  className='flex justify-between mx-7 my-1 py-3'>
        <h1>Categories</h1>
       <AddCategory />
      </div>

<Table>
      <TableCaption>A list of your Categories.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead >Thubmnail</TableHead>
          <TableHead className="w-[100px]">Title</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories?.categories?.map((category) => (
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

export default Categories 
