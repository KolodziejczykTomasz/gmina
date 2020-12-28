import React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BreakeSection from "../components/breakeSection"

import styled from "styled-components"

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1910px;
`
const MainWrapperSection = styled.div`
  display: block;
  width: 100%;
  max-width: 1910px;
  margin: 0 auto;
`

const SectionNews = styled.div`
  width: 100%;
  min-height: 300px;
  height: auto;
`
const SectionAbout = styled.div`
  width: 100%;
  min-height: 300px;
  height: auto;
`
const SectionHistory = styled.div`
  width: 100%;
  min-height: 300px;
  height: auto;
`
const SectionNatura = styled.div`
  width: 100%;
  min-height: 300px;
  height: auto;
`
const SectionTourism = styled.div`
  width: 100%;
  min-height: 300px;
  height: auto;
`
const SectionCulture = styled.div`
  width: 100%;
  min-height: 300px;
  height: auto;
`

const BlogIndex = ({ data }) => {
  const posts = data.allWpPost.nodes
  return (
    <Layout>
      <MainWrapper>
        <SEO title="All posts" />
        <MainWrapperSection>
          <BreakeSection>Aktualności</BreakeSection>
          <SectionNews>
            <div>SectionNewsPhoto</div>
            <div>
              <div>SectionNewsHeader</div>
              <div>
                <div>SectionNewsPhoto</div>
                <div style={{ width: "70%" }}>
                  <ol style={{ listStyle: `none` }}>
                    {posts.map(post => {
                      const title = post.title

                      return (
                        <li key={post.uri}>
                          <article
                            itemScope
                            itemType="http://schema.org/Article"
                          >
                            <header>
                              <h2>
                                <Link to={post.uri} itemProp="url">
                                  <span itemProp="headline">
                                    {parse(title)}
                                  </span>
                                </Link>
                              </h2>
                              <small>{post.date}</small>
                            </header>
                            <section itemProp="description">
                              {parse(post.excerpt)}
                            </section>
                          </article>
                        </li>
                      )
                    })}
                  </ol>
                </div>
              </div>
              <div>SectionNewsFooter</div>
            </div>
          </SectionNews>
          <BreakeSection>Gmina</BreakeSection>
          <SectionAbout>Gmina</SectionAbout>
          <BreakeSection>History</BreakeSection>
          <SectionHistory>History</SectionHistory>
          <BreakeSection>Natura</BreakeSection>
          <SectionNatura>Natura</SectionNatura>
          <BreakeSection>Tourism</BreakeSection>
          <SectionTourism>Tourism</SectionTourism>
          <BreakeSection>Culture</BreakeSection>
          <SectionCulture>Culture</SectionCulture>
        </MainWrapperSection>
      </MainWrapper>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query WordPressPostArchive($offset: Int!, $postsPerPage: Int!) {
    allWpPost(
      sort: { fields: [date], order: DESC }
      limit: $postsPerPage
      skip: $offset
    ) {
      nodes {
        excerpt
        uri
        date(formatString: "MMMM DD, YYYY")
        title
        excerpt
      }
    }
  }
`
