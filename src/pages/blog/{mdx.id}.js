import * as React from "react";
import Layout from "../../components/layout";
import { graphql, Link } from "gatsby";
import ReactMarkdown from 'react-markdown';
import { GatsbyImage, getImage } from "gatsby-plugin-image";



//Need to figure out an alternative for mdx rendering.

const BlogPostPage = (props) => {
  //console.log(props.data);

  const image = getImage(props.data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle="BLOGS">
      <h1 className="pl-2 text-4xl border-white border-b items-center">{props.data.mdx.frontmatter.title}</h1>
      <h1 className="pl-2 text-[#FADEBD] pb-6">{props.data.mdx.frontmatter.date}</h1>

      <div className="flex justify-center items-center">
        <GatsbyImage
          className="object-center border mb-10 border-blue-500"
          image={image}
          alt={props.data.mdx.frontmatter.hero_alt}
        />
      </div>

      <p className="m-3 p-2 ">
        <ReactMarkdown children={props.data.mdx.body} />

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
      date
      title
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