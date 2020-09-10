import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import HeaderStyles from "../styles/components/header.module.css"
import Img from "gatsby-image"

const ListLink = props => (
    <li className={props.className}>
      <Link to={props.to}>{props.children}</Link>
    </li>
)


export default function Header() {

  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "images/logo.png" }) {
        childImageSharp {
          fixed(width: 90, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header>
        <div className="row">
            <div className="col">
                <nav className={HeaderStyles.nav}>
                    <ListLink to="/" className={HeaderStyles.menu+' '+HeaderStyles.logosm}>
                        <Img fixed={data.logo.childImageSharp.fixed} alt="Logo"/>
                    </ListLink>
                    <ListLink to="/about/" className={HeaderStyles.menu}>About</ListLink>
                    <ListLink to="/academic/" className={HeaderStyles.menu}>Academic</ListLink>
                    <ListLink to="/" className={HeaderStyles.menu+' '+HeaderStyles.logolg}>
                        <Img fixed={data.logo.childImageSharp.fixed} alt="Logo"/>
                    </ListLink>
                    <ListLink to="/portfolio/" className={HeaderStyles.menu}>Portfolio</ListLink>
                    <ListLink to="/contact/" className={HeaderStyles.menu}>Contact</ListLink>
                </nav>
            </div>
        </div>
    </header>
  )
}
