import React from 'react'
import { FaLongArrowAltDown } from "react-icons/fa";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const DepartmentDropDown = () => {
  return (
    <DropdownMenu>
      <span className='bg-[#2D336B] px-3 py-2 rounded'>
  <DropdownMenuTrigger> <div className='flex items-center justify-center gap-2'> Know More <FaLongArrowAltDown />  </div> </DropdownMenuTrigger>
  </span>
  <DropdownMenuContent className="bg-[#2D336B] text-white outline-none">
    <DropdownMenuLabel> <a href="https://www.uietkuk.ac.in/computer-science-engg-department" target='_blank'>
    Computer Science & Engg. Department </a> </DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuLabel> <a href="https://www.uietkuk.ac.in/electronics-communication-engg-department-2" target='_blank'> Electronics & Communication Engg. Department </a> </DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuLabel> <a href="https://www.uietkuk.ac.in/mechanical-engg-department" target='_blank'> Mechanical Engg. Department </a> </DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuLabel> <a href="https://www.uietkuk.ac.in/biotechnology-engg-department" target='_blank'> Biotechnology Engg. Department </a> </DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuLabel> <a href="https://www.uietkuk.ac.in/electrical-engg-department" target='_blank'> Electrical Engg. Department </a> </DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuLabel> <a href="https://www.uietkuk.ac.in/AppliedScienceDeptt" target='_blank'>Applied Sciences Department</a> </DropdownMenuLabel>
   
  </DropdownMenuContent>
</DropdownMenu>
  )
}

export default DepartmentDropDown