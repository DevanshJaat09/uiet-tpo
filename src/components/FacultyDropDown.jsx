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


const FacultyDropDown = () => {
  return (
    <DropdownMenu>
      <span className='bg-[#2D336B] px-3 py-2 rounded'>
  <DropdownMenuTrigger> <div className='flex items-center justify-center gap-2'> Know More <FaLongArrowAltDown />  </div> </DropdownMenuTrigger>
  </span>
  <DropdownMenuContent className="bg-[#2D336B] text-white outline-none">
    <DropdownMenuLabel> <a href="https://www.uietkuk.ac.in/computer-science-engg" target='_blank'>
    Computer Science & Engg.  </a> </DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuLabel> <a href="https://www.uietkuk.ac.in/electronics-and-communication-engg" target='_blank'> Electronics & Communication Engg.  </a> </DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuLabel> <a href="https://www.uietkuk.ac.in/mechanical-engg" target='_blank'> Mechanical Engg.  </a> </DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuLabel> <a href="https://www.uietkuk.ac.in/biotechnology" target='_blank'> Biotechnology Engg.  </a> </DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuLabel> <a href="https://www.uietkuk.ac.in/electrical-engg" target='_blank'> Electrical Engg.  </a> </DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuLabel> <a href="https://www.uietkuk.ac.in/applied-sciences" target='_blank'>Applied Sciences </a> </DropdownMenuLabel>
   
  </DropdownMenuContent>
</DropdownMenu>
  )
}

export default FacultyDropDown