import React from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'

export default function blog({ data }) {

  console.log(data);

  return (
    <Layout pageHeading="blog" pageTitle="blog">
      

      <div>

        <div className="flex justify-center  px-4 font-mono">

          <div className="flex w-full max-w-screen-lg">

            <div className="flex flex-col flex-grow border-l border-r border-white">

              <ul>

                <li>
                  {data.allMdx.nodes.map(node => {
                    console.log(node);
                    return (

                      <div className="flex w-full p-8 border-b border-gray-300">
                        <div className="flex flex-col flex-grow ml-4">
                          <div className="grid ">
                            <div key={node.id}>
                              <Link to={`/blog/${node.id}`}>
                                <h2 className='text-4xl font-extrabold text-white p-1 hover:text-blue-500 hover:underline '>{node.frontmatter.title} </h2>
                              </Link>
                              <p className='text-[#FADEBD]'>{node.frontmatter.date}</p>
                            </div>
                          </div></div></div>
                    )

                  })}
                </li>



              </ul>
            </div>
          </div>
        </div>

      </div>
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


