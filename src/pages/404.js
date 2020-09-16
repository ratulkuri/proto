import React from "react"
import Container from "../components/container"
import Seo from "../components/seo"
import NotFoundSvg from '../assets/images/svg/error404.inline.svg'
import Custom404Styles from "../styles/pages/Custom404.module.css"
import { Link } from "gatsby"

export default function Custom404() {
  return (
    <Container>
        <Seo title={'Page Not Found'} />
        <div className="row">
          <div className="col">
            <div className={ Custom404Styles.ErWrap }>
              <NotFoundSvg />
              <p className={ Custom404Styles.errorText }>O-o-oh! Something broke.</p>
              <Link to="/" className={ Custom404Styles.errorLink } >Go Home</Link>
            </div>
          </div>
        </div>
    </Container>
  )
}