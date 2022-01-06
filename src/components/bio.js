/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            github
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social
  const github = social?.github

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        src="../images/paynym.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      <div className="author">
        <div className="author-name">
          {author?.name && github && (
            <strong>
              <a href={`https://github.com/${github}`}>{ author.name }</a>
            </strong>
          )}
        </div>
        <div className="author-summary">
          {author?.summary && (
            <p>
              {author?.summary}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Bio
