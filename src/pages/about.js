import React from "react"
import Container from "../components/container"
import AboutStyles from "../styles/pages/about.module.css"

export default function About() {
  return (
    <Container>
        <div className="row">
            <div className="col">
                <h2 className={AboutStyles.h2}>About</h2>
            </div>
        </div>
    </Container>
  )
}