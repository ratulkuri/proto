import React from "react"
import Container from "../components/container"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import indexStyles from "../styles/pages/index.module.css"

export default function Home() {

  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "images/bg.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)


  return (
    <Container>
      <BackgroundImage fluid={data.background.childImageSharp.fluid}>
        <div className="row">
          <div className="col text-center">
            <div className="home-bg d-flex flex-column j-c-center a-items-center"
              style={{ minHeight: 'calc(100vh - 106px)'}}>
              <h1 className={indexStyles.title}>Hi! I am Kowshik</h1>
              <h2>This website was built to practice <span style={{ color: "purple" }}>Gatsbyjs.</span> </h2>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </Container>
  )
}
