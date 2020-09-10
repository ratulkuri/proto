import React from "react"
import Container from "../components/container"
import Custom404Styles from "../styles/pages/Custom404.module.css"

export default function Custom404() {
  return (
    <Container>
        <div className="row">
            <div className="col">
                <h2 className={Custom404Styles.h2}>404! Page Not Found!</h2>
            </div>
        </div>
    </Container>
  )
}