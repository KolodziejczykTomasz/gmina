import React from "react"
import { graphql } from "gatsby"
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
  height: auto;
`
const SectionSideLeft = styled.div`
  width: 100%;
  height: 100%;
`
const SectionSideRight = styled.div`
  width: 100%;
  height: auto;
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

const CardWrapper = styled.div`
  height: 100%;
`

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
`
const CardHeaderTitle = styled.div`
  background-color: red;
`
const CardHeaderDate = styled.div`
  background-color: green;
`

const CardMain = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.7fr;
`
const CardMainPhoto = styled.div`
  background-color: blue;
`
const CardMainContent = styled.div`
  background-color: burlywood;
`

const CardFooter = styled.div`
  background-color: grey;
`
const ButtonMore = styled.button``

const MenuListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  list-style: none;
  color: #fff;
`

const MenuListItem = styled.div`
  padding: 10px 15px;
  width: auto;
  &:hover {
    color: initial;
    cursor: pointer;
    background-color: #fff;
  }
`

const BlogIndex = ({ data }) => {
  const posts = data.allWpPost.nodes
  return (
    <Layout>
      <MainWrapper>
        <SEO title="UG Gmina" />
        <MainWrapperSection>
          <BreakeSection>
            <MenuListWrapper>
              <MenuListItem>Wszystkie aktualności</MenuListItem>
            </MenuListWrapper>
          </BreakeSection>
          <SectionNews>
            <SectionWrapper>
              <SectionSideLeft>Aside Photo</SectionSideLeft>
              <SectionSideRight>
                <ol style={{ listStyle: `none`, marginLeft: "-35px" }}>
                  {posts.map(post => {
                    const title = post.title
                    return (
                      <li key={post.uri}>
                        <CardWrapper>
                          <CardHeader>
                            <CardHeaderTitle>{parse(title)}</CardHeaderTitle>
                            <CardHeaderDate>{post.date}</CardHeaderDate>
                          </CardHeader>
                          <CardMain>
                            <CardMainPhoto>PHOTO</CardMainPhoto>
                            <CardMainContent>
                              {parse(post.excerpt)}
                            </CardMainContent>
                          </CardMain>
                          <CardFooter>
                            <ButtonMore>Zobacz więcej</ButtonMore>
                          </CardFooter>
                        </CardWrapper>
                      </li>
                    )
                  })}
                </ol>
              </SectionSideRight>
            </SectionWrapper>
          </SectionNews>
          <BreakeSection>
            <MenuListWrapper>
              <MenuListItem>Ogłoszenia</MenuListItem>
              <MenuListItem>Urząd Gminy</MenuListItem>
              <MenuListItem>Sprzedaż nieruchomości</MenuListItem>
              <MenuListItem>Dotacje</MenuListItem>
              <MenuListItem>RODO</MenuListItem>
            </MenuListWrapper>
          </BreakeSection>
          <SectionAbout>
            <SectionWrapper>
              <SectionSideLeft>Aside Photo</SectionSideLeft>
              <SectionSideRight></SectionSideRight>
            </SectionWrapper>
          </SectionAbout>
          <BreakeSection>
            <MenuListWrapper>
              <MenuListItem>Historia Gminy</MenuListItem>
              <MenuListItem>Zabytki</MenuListItem>
            </MenuListWrapper>
          </BreakeSection>
          <SectionHistory>
            <SectionWrapper>
              <SectionSideLeft>Aside Photo</SectionSideLeft>
              <SectionSideRight>Gmina</SectionSideRight>
            </SectionWrapper>
          </SectionHistory>
          <BreakeSection>
            <MenuListWrapper>
              <MenuListItem>Gospodarka odpadami</MenuListItem>
              <MenuListItem>Zwierzęta bezdomne</MenuListItem>
              <MenuListItem>Ochrona środowiska</MenuListItem>
            </MenuListWrapper>
          </BreakeSection>
          <SectionNatura>
            <SectionWrapper>
              <SectionSideLeft>Aside Photo</SectionSideLeft>
              <SectionSideRight>Gmina</SectionSideRight>
            </SectionWrapper>
          </SectionNatura>
          <BreakeSection>
            <MenuListWrapper>
              <MenuListItem>Atrakcje turystyczne</MenuListItem>
              <MenuListItem>Noclegi</MenuListItem>
              <MenuListItem>Sport</MenuListItem>
            </MenuListWrapper>
          </BreakeSection>
          <SectionTourism>
            <SectionWrapper>
              <SectionSideLeft>Aside Photo</SectionSideLeft>
              <SectionSideRight>Gmina</SectionSideRight>
            </SectionWrapper>
          </SectionTourism>
          <BreakeSection>
            <MenuListWrapper>
              <MenuListItem>Atrakcje kulturalne</MenuListItem>
            </MenuListWrapper>
          </BreakeSection>
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
