import { AiFillHome } from "react-icons/ai"
import { AiOutlineUser } from "react-icons/ai"
import { AiOutlineBook } from "react-icons/ai"
import { BsServer } from "react-icons/bs"
import { IoCarSportSharp } from "react-icons/io5"
import { BiCommentDetail } from "react-icons/bi"
import { AiOutlineContacts } from "react-icons/ai"
export const linksIcons = [
    {
      id:1,
      iconComponent: <AiFillHome />,
      link: '#',
      text:'Home'
    },
    {
      id:2,
      iconComponent: <AiOutlineUser />,
      link: '#about',
      text:'About'
    },
    {
      id:3,
      iconComponent: <AiOutlineBook />,
      link: '#experiance',
      text:'Experiance'
    },
    {
      id:4,
      iconComponent: <BsServer />,
      link: '#services',
      text:'Services'
    },
    {
      id:5,
      iconComponent: <IoCarSportSharp />,
      link: '#portfolio',
      text:'Portfolio'
    },
    {
      id:6,
      iconComponent: <BiCommentDetail />,
      link: '#testmonials',
      text:'Testmonials'
    },
    {
      id:7,
      iconComponent: <AiOutlineContacts />,
      link: '#contact',
      text:'Contact'
    }
  ]