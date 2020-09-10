import React from "react"
import Container from "../components/container"
import PortfolioStyles from "../styles/pages/portfolio.module.css"

export default function Portfolio() {
  return (
    <Container>
        <div className="row">
            <div className="col">
                <h2 className={PortfolioStyles.h2}>Portfolio</h2>
            </div>
        </div>
    </Container>
  )
}