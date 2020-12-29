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
const SectionWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.25fr 0.75fr;
`
const SectionSideLeft = styled.div`
  width: 100%;
  height: 100%;
`
const SectionSideRight = styled.div`
  width: 100%;
  height: 100%;
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
        <SEO title="UG Gmina" />
        <MainWrapperSection>
          <BreakeSection>Aktualności</BreakeSection>
          <SectionNews>
            <SectionWrapper>
              <SectionSideLeft>Aside Photo</SectionSideLeft>
              <SectionSideRight>
                <ol style={{ listStyle: `none`, marginLeft: "-35px" }}>
                  {posts.map(post => {
                    const title = post.title

                    return (
                      <li key={post.uri}>
                        <article itemScope itemType="http://schema.org/Article">
                          <header>
                            <h2>
                              <Link to={post.uri} itemProp="url">
                                <span itemProp="headline">{parse(title)}</span>
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
              </SectionSideRight>
            </SectionWrapper>
          </SectionNews>
          <BreakeSection>Gmina</BreakeSection>
          <SectionAbout>
            <SectionWrapper>
              <SectionSideLeft>Aside Photo</SectionSideLeft>
              <SectionSideRight>Gmina</SectionSideRight>
            </SectionWrapper>
          </SectionAbout>
          <BreakeSection>History</BreakeSection>
          <SectionHistory>
            <SectionWrapper>
              <SectionSideLeft>Aside Photo</SectionSideLeft>
              <SectionSideRight>Gmina</SectionSideRight>
            </SectionWrapper>
          </SectionHistory>
          <BreakeSection>Natura</BreakeSection>
          <SectionNatura>
            <SectionWrapper>
              <SectionSideLeft>Aside Photo</SectionSideLeft>
              <SectionSideRight>Gmina</SectionSideRight>
            </SectionWrapper>
          </SectionNatura>
          <BreakeSection>Tourism</BreakeSection>
          <SectionTourism>
            <SectionWrapper>
              <SectionSideLeft>Aside Photo</SectionSideLeft>
              <SectionSideRight>Gmina</SectionSideRight>
            </SectionWrapper>
          </SectionTourism>
          <BreakeSection>Culture</BreakeSection>
          <SectionCulture>
            <SectionWrapper>
              <SectionSideLeft>Aside Photo</SectionSideLeft>
              <SectionSideRight>Gmina</SectionSideRight>
            </SectionWrapper>
          </SectionCulture>
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
