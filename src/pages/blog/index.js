import React from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'

export default function blog({ data }) {

  console.log(data);

  return (
    <Layout pageHeading="blog" pageTitle="blog">
      {/* <ul>
        {data.allMdx.nodes.map(node => {
          console.log(node);
          return (
            <article key={node.id}>
              <Link to={`/blog/${node.id}`}>
                <h2 className='text-xl text-white'>{node.frontmatter.title} </h2>
              </Link>
              <p2>{node.frontmatter.date}</p2>
            </article>

          )

        })}
      </ul> */}

      <div>

        <div className="flex justify-center  px-4 font-mono">

          <div className="flex w-full max-w-screen-lg">

            <div className="flex flex-col flex-grow border-l border-r border-white">

              <ul>

                {/* <li className="flex justify-between flex-shrink-0 px-8 py-4 border-b border-white">
                  <h1 className=" text-white text-6xl font-semibold">BLOG</h1>
                </li> */}

                {/* <li className="text-white flex-grow ">
                  <div className="flex w-full p-8 border-b border-gray-300">

                    <div className="flex flex-col flex-grow ml-4">

                      <div className="grid ">
                        <ul className="list-style-none">
                          <li className="font-semibold">TITLE: </li>
                          <li className="font-semibold">DATE: </li>
                        </ul>
                      </div>

                    </div>

                  </div>

                </li> */}


                <li>
                  {data.allMdx.nodes.map(node => {
                    console.log(node);
                    return (
                      <div className="flex w-full p-8 border-b border-gray-300">
                        <div className="flex flex-col flex-grow ml-4">
                          <div className="grid ">
                            <article key={node.id}>
                              <Link to={`/blog/${node.id}`}>
                                <h2 className='text-4xl font-extrabold text-white p-1 hover:text-blue-500 hover:underline '>{node.frontmatter.title} </h2>
                              </Link>
                              <p className='text-[#FADEBD]'>{node.frontmatter.date}</p>
                            </article>
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


