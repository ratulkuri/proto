import React from "react"
import Container from "../components/container"
import { graphql } from "gatsby"
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import ProjectStyles from "../styles/pages/project.module.css"

const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: text => <strong>{text}</strong>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>
  }
};

const Project = ({ data }) =>
    <Container>
        {console.log(data.product)}
        <div className="row">
            <div className="col">
                <div className={ProjectStyles.thumb}>
                    <img
                        src={data.product.thumbnail.fluid.src}
                        alt="A corgi smiling happily"
                    />
                </div>
                <div className={ProjectStyles.title}>
                    <h2>{data.product.title}</h2>
                </div>
                <div className={ProjectStyles.description}>
                    {documentToReactComponents(data.product.description.json, richTextOptions)}
                </div>
            </div>
        </div>
    </Container>

export const query = graphql`
    query getProject($slug:String) {
        product: contentfulProject(slug: {eq: $slug}) {
            id
            slug
            title
            thumbnail {
                fluid(quality: 100, maxWidth: 1920) {
                    src
                }
            }
            description {
                json
            }
        }
    }
`

export default Project
