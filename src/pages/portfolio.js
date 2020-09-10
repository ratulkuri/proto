import React from "react"
import Container from "../components/container"
import { useStaticQuery, graphql } from "gatsby"
import ProjeectCard from "../components/projeectCard"
import PortfolioStyles from "../styles/pages/portfolio.module.css"

export default function Portfolio() {

  const {allContentfulProject:{ nodes:projects }}  = useStaticQuery(graphql`
    {
      allContentfulProject(sort: {order: ASC, fields: createdAt}) {
        nodes {
          id
          slug
          title
          thumbnail {
            fluid {
              src
              srcSet
              srcWebp
              sizes
            }
          }
        }
      }
    }
  `)


  return (
    <Container>
        <div className="row">
            <div className="col">
                <div className={ PortfolioStyles.portfolioWrap + " d-flex"}>
                  {
                    projects.map((product)=>{
                      return <ProjeectCard key={product.id} title={product.title} slug={product.slug} />
                    })
                  }
                </div>
            </div>
        </div>
    </Container>
  )
}