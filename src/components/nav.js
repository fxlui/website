import React from "react"

import IconButton from './icon-button.js'

import {
  IoPerson,
  IoPersonOutline,
  IoSchool,
  IoSchoolOutline,
  IoBriefcase,
  IoBriefcaseOutline,
  IoFolderOpen,
  IoFolderOpenOutline,
  IoChatboxEllipses,
  IoChatboxOutline,
} from "react-icons/io5";


export default function Nav({ status, darkmode }) {

  return (
    <nav style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <IconButton dark={darkmode} title="About Me" enabled={status === 'about'} reg={<IoPersonOutline />} hov={<IoPerson />} link="#about" />
      <IconButton dark={darkmode} title="Studies" enabled={status === 'studies'} reg={<IoSchoolOutline />} hov={<IoSchool />} link="#studies" highlight="#ffbc42" />
      <IconButton dark={darkmode} title="Contact Me" enabled={status === 'contact'} reg={<IoChatboxOutline />} hov={<IoChatboxEllipses />} link="#contact" highlight="#136f63" />
    </nav>
  )
}
/*
  To be completed:
  <IconButton dark={darkmode} title="Work" enabled={status === 'work'} reg={<IoBriefcaseOutline />} hov={<IoBriefcase />} />
  <IconButton dark={darkmode} title="Projects" enabled={status === 'projects'} reg={<IoFolderOpenOutline />} hov={<IoFolderOpen />} />
*/