import * as React from "react";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import ReactMarkdown from 'react-markdown';



//Need to figure out an alternative for mdx rendering.

const BlogPostPage = (props) => {
    console.log(props.data);
    return (
        <Layout pageTitle="BLOGS">
            <h1>{props.data.mdx.frontmatter.title}</h1>
            <h1>{props.data.mdx.frontmatter.date}</h1>
            {/* <p><h1>{props.data.mdx.body}</h1></p> */}
            <ReactMarkdown children={props.data.mdx.body}/>
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
        slug
        title
      }
      body
    }
  }

`



export default BlogPostPage;