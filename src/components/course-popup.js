import React from "react"

import Tilt from 'react-tilt'

import styles from "./course-popup.module.css"

export default function CoursePopup({ code, title, mark }) {
  
  return (
    <Tilt className={styles.coursetilt} options={{ max : 25 }} >
      <div className="Tilt-inner"> 👽 </div>
    </Tilt>
    )
  }