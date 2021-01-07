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


export default function Nav({ status }) {
  
  return (
    <nav
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <IconButton enabled={status === 'about'} reg={<IoPersonOutline />} hov={<IoPerson />} link="about" />
      <IconButton enabled={status === 'studies'} reg={<IoSchoolOutline />} hov={<IoSchool />} highlight="#ffbc42" />
      <IconButton enabled={status === 'work'} reg={<IoBriefcaseOutline />} hov={<IoBriefcase />} />
      <IconButton enabled={status === 'projects'} reg={<IoFolderOpenOutline />} hov={<IoFolderOpen />} />
      <IconButton enabled={status === 'contact'} reg={<IoChatboxOutline />} hov={<IoChatboxEllipses />} />
    </nav>
  )
}