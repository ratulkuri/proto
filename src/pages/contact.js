import React from "react"
import Container from "../components/container"
import ContactStyles from "../styles/pages/contact.module.css"

export default function Contact() {
  return (
    <Container>
        <div className="row">
            <div className="col">
                <h2 className={ContactStyles.h2}>Contact</h2>
            </div>
        </div>
    </Container>
  )
}