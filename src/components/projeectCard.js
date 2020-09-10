import React from "react"
import { Link } from "gatsby"
import CardStyles from "../styles/components/projectCard.module.css"

export default function ProjectCard({title, slug}) {
  return (
    <div className={ CardStyles.cardContainer }>
        <div className={ CardStyles.card}>
            <Link to={`/projects/${slug}`}>
                <div className={ CardStyles.cardDisplay }>
                    <h2>{ title }</h2>
                </div>
                <div className={ CardStyles.cardHover }>
                    <h2>{ title }</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at est orci. Nam molestie pellentesque mi nec lacinia. Cras volutpat arcu sit amet elit sodales, nec volutpat velit bibendum.</p>
                    <p className={ CardStyles.link }>Click to see project</p>
                </div>
            </Link>
            <div className={ CardStyles.cardBorder }></div>
        </div>
    </div>
  )
}
