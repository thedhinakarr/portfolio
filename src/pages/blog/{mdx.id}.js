import * as React from "react";
import Layout from "../../components/layout";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ShareButton from "../../components/shareButton";
import Markdown from 'react-markdown'

const BlogPostPage = (props) => {

  console.log(props.data.mdx.body);

  const image = getImage(props.data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle="BLOGS">
      <div className="flex items-center justify-between">
        <h1 className="pl-2 text-4xl font-mono border-white border-b items-center">{props.data.mdx.frontmatter.title}</h1>
        <ShareButton url={props.data.mdx.id} />
      </div>

      <h1 className="pl-2 text-[#FADEBD] pb-6">{props.data.mdx.frontmatter.date}</h1>


      <div className="flex p-2 justify-center items-center">
        <GatsbyImage
          className="object-center p-1 border md:m-10 border-blue-500"
          image={image}
          alt={props.data.mdx.frontmatter.hero_alt}
        />
      </div>

      <p className="sm:text-left md:m-20 overflow-x-hidden  whitespace-normal">
        <Markdown>{props.data.mdx.body}</Markdown>
      </p>


    </Layout>
  );
};

//page queries

export const query = graphql`
query MyQuery($id: String) {
  mdx(id: {eq: $id}) {
    id
    frontmatter {
      title
      date
      hero_image_alt
      hero_image_credit_link
      hero_image_credit_text
      hero_image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    gatsbyPath(filePath: "/blog/{mdx.id}")
    body
  }
}

`



export default BlogPostPage;