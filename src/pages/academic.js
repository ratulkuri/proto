import React from "react"
import Container from "../components/container"
import Seo from "../components/seo"
import AcademicStyles from "../styles/pages/academic.module.css"
import { FaBuilding } from "react-icons/fa";


export default function Academic() {
  return (
    <Container>
      <Seo title={'Academic'} />
      <div className="row">
            <div className="col">
              <div className="d-flex j-c-center a-items-center" style={{ minHeight: "calc(100vh - 106px)"}}>
                <ul className={ AcademicStyles.resume }>
                  <li>
                    <FaBuilding className={AcademicStyles.icon} />
                    <h6>Lakshmipur Adarsha Samad Government High School</h6>
                    <p><strong>Secondary School Certificate</strong></p>
                    <p><small>2005–2006 | Science</small></p>
                  </li>
                  <li>
                    <FaBuilding className={AcademicStyles.icon} />
                    <h6>Lakshmipur Government College</h6>
                    <p><strong>Higher Secondary Certificate</strong></p>
                    <p><small>2007–2008 | Science</small></p>
                    <p><small /></p>
                  </li>
                  <li>
                    <FaBuilding className={AcademicStyles.icon} />
                    <h6>Creative IT Institute</h6>
                    <p><strong>Shortcourse</strong></p>
                    <p><small>2018 | Web Developement</small></p>
                  </li>
                </ul>
              </div>
            </div>
        </div>
    </Container>
  )
}