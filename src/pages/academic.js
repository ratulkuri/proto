import React from "react"
import Container from "../components/container"
import AcademicStyles from "../styles/pages/academic.module.css"

export default function Academic() {
  return (
    <Container>
        <div className="row">
            <div className="col">
                <h2 className={AcademicStyles.h2}>Academic</h2>
            </div>
        </div>
    </Container>
  )
}