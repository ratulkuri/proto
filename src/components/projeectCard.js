import React from "react"
import { Link } from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


import CardStyles from "../styles/components/projectCard.module.css"

const richTextOptions = {
    renderText: text => text.substring(0,250),
};

export default function ProjectCard({title, slug, description}) {
  return (
    <div className={ CardStyles.cardContainer }>
        <div className={ CardStyles.card}>
            <Link to={`/projects/${slug}`}>
                <div className={ CardStyles.cardDisplay }>
                    <h2>{ title }</h2>
                </div>
                <div className={ CardStyles.cardHover }>
                    <h2>{ title }</h2>
                    {documentToReactComponents(description, richTextOptions)}
                    <p className={ CardStyles.link }>Click to see project</p>
                </div>
            </Link>
            <div className={ CardStyles.cardBorder }></div>
        </div>
    </div>
  )
}
