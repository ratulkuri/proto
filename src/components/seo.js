import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

export default function SEO ({ title, description, image, url, keywords }) {
    return (
        <StaticQuery
            query={graphql`
            {
                site {
                    siteMetadata {
                        description
                        image
                        title
                        titleTemplate
                        url
                    }
                }
            }
        `}
        render={
            data => {

                const metaTitle         = title || data.site.siteMetadata.title
                const metaDescription   = description || data.site.siteMetadata.description
                const metaUrl           = url || data.site.siteMetadata.url
                const metaImage         = image || data.site.siteMetadata.image
                const metaKeywords      = keywords || data.site.siteMetadata.keywords

                return (
                    <Helmet
                        title={metaTitle}
                        titleTemplate={data.site.siteMetadata.titleTemplate}
                        meta={
                            [
                                {
                                    name: `description`,
                                    content: metaDescription
                                },
                                {
                                    name: `url`,
                                    content: metaUrl
                                },
                                {
                                    name: `og:title`,
                                    content: metaTitle
                                },
                                {
                                    name: `og:description`,
                                    content: metaDescription
                                },
                                {
                                    name: `og:type`,
                                    content: `website`
                                },
                                {
                                    name: `og:image`,
                                    content: metaImage
                                },
                                {
                                    name: `og:url`,
                                    content: metaUrl
                                },
                            ].concat(
                                metaKeywords && metaKeywords.length > 0 ? {
                                    name: `keywords`,
                                    content: metaKeywords.join(`, `)
                                } : []
                            )
                        }
                    />
                )
            }
        }
        ></StaticQuery>
    )
}

// const metaInfosQuery = graphql`
//     query DefaultSiteMetaQuery {
//         site {
//             siteMetadata {
//               description
//               image
//               title
//               titleTemplate
//               url
//             }
//         }
//     }
// `