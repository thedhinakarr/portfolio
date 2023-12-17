import React from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'

export default function blog({ data }) {

  console.log(data);

  return (
    <Layout pageHeading="blog" pageTitle="blog">
      <ul>
        {data.allMdx.nodes.map(node => {
          console.log(node);
          return (
            <article key={node.id}>
              <Link to={node.id}>
                <h2 className='text-xl text-white'>{node.frontmatter.title} </h2>
              </Link>
              <p2>{node.frontmatter.date}</p2>
            </article>

          )

        })}
      </ul>
    </Layout>

  )
}

export const query = graphql`
query MyQuery {
    allMdx {
      nodes {
        id
        frontmatter {
          date(formatString: "dddd,MMMM Do YYYY")
          title
          slug
        }
      }
    }
  }
`;


