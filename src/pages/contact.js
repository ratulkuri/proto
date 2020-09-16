import React from "react"
import Container from "../components/container"
import Seo from "../components/seo"
import ContactStyles from "../styles/pages/contact.module.css"
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaMapMarker,
  FaGithub,
  FaInstagram
} from "react-icons/fa";

export default function Contact() {
  return (
    <Container>
      <Seo title={'Contact Me'} />
      <div className="row">
          <div className="col">
            <section id={ContactStyles.contact}>
              <div className={ContactStyles.contactWrapper}>
                <div className={ContactStyles.directContactContainer}>
                  <ul className={ContactStyles.contactList}>
                    <li className={ContactStyles.listItem}>
                      <FaMapMarker className="react-icons" />
                      <span className={ContactStyles.contactText +" "+ ContactStyles.place}>Lakshmipur | Bangladesh</span>
                    </li>
                    <li className={ContactStyles.listItem}>
                      <FaPhone className="react-icons" />
                      <span className={ContactStyles.contactText +" "+ ContactStyles.phone}>
                        <a href="tel:+8801231234567" title="Give me a call">(+880) 123-1234567</a>
                      </span>
                    </li>
                    <li className={ContactStyles.listItem}>
                      <FaEnvelope className="react-icons" />
                      <span className={ContactStyles.contactText +" "+ ContactStyles.gmail}>
                        <a href="mailto:#" title="Send me an email">emailme@gmail.com</a>
                      </span>
                    </li>
                  </ul>
                  <hr />
                  <ul className={ContactStyles.socialMediaList}>
                    <li>
                      <a href="https://www.facebook.com/ratul.kuri" target="_blank" rel="noreferrer" className={ContactStyles.contactIcon}>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/ratulkuri" target="_blank" rel="noreferrer" className={ContactStyles.contactIcon}>
                        <FaGithub />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/kowshik.kuri" target="_blank" rel="noreferrer" className={ContactStyles.contactIcon}>
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                  <hr />
                  <div className={ContactStyles.copyright}>© ALL RIGHTS RESERVED</div>
                </div>
              </div>
            </section>
          </div>
        </div>
    </Container>
  )
}