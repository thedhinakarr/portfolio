import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { compileMDXWithCustomOptions } from 'gatsby-plugin-mdx';

export default function blog({ data }) {

  console.log(data);

  return (
    <Layout pageHeading="blog" pageTitle="blog">
      <ul>
        {data.allMdx.nodes.map(node => {
          return <article key={node.id}>
            <h2 className='text-xl'>{node.frontmatter.title} </h2>
            <p2>{node.frontmatter.date}</p2>
           
            {node.body}
            
          </article>
        })}
      </ul>
    </Layout>

  )
}

export const query = graphql`
query MyQuery {
    allMdx {
      nodes {
        body
        id
        frontmatter {
          date(formatString: "dddd,MMMM Do YYYY")
          title
        }
      }
    }
  }
`;


