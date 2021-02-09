import React from "react"

import styles from './section.module.css'
import VisibilitySensor from "react-visibility-sensor";

export default function Section({ id, children, setter }) {
  
  return (
    <VisibilitySensor intervalDelay={500} onChange={(isVisible) => {
      if (isVisible) setter(id)
    }}>
      <section id={id} className={styles.section} >
        {children}
      </section>
    </VisibilitySensor>
  )
}