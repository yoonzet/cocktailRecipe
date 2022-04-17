import React from 'react'
import { MdExplore } from "react-icons/md";
import { BsInboxesFill } from "react-icons/bs";
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
    {
        title:'홈',
        path:'/',
        icon:<AiIcons.AiFillHome />,
        cName:'nav-text'
    },
    {
        title:'둘러보기',
        path:'/',
        icon:<MdExplore />,
        cName:'nav-text'
    },
    {
        title:'보관함',
        path:'/',
        icon:<BsInboxesFill />,
        cName:'nav-text'
    },
]