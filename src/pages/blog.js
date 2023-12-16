import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export default function blog({ data }) {

    console.log(data);

    return (
        <Layout pageHeading="blog" pageTitle="blog">
           <ul>
            {data.allFile.nodes.map(node => {
                return <li key={node.name}>{node.name}</li>
            })}
           </ul>
        </Layout>
       
    )
}

export const query = graphql`
        query MyQuery {
            allFile(filter: { sourceInstanceName : {eq:"blog"}}) {
            nodes {
                name
            }
          }
        }
`;


