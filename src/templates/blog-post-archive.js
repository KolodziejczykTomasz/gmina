import React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BreakeSection from "../components/breakeSection"

import styled from "styled-components"
import "../style.css"

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
const Section = styled.div`
  width: 100%;
  min-height: 300px;
  height: auto;
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

const SectionSideRightHeader = styled.div`
  padding: 45px 0 36px 0;
  font-size: 45px;
  line-height: 60px;
`
const SectionSideRightContent = styled.div``

const CardWrapper = styled.div`
  height: 100%;
  margin-bottom: 50px;
`

const CardHeader = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.7fr;
  color: rgb(236, 0, 0);
  font-weight: 600;
`
const CardHeaderTitle = styled.div`
  font-size: 22px;
  line-height: 30px;
`

const CardMain = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.7fr;
  font-size: 15px;
`
const CardMainPhoto = styled.div``

const CardMainContent = styled.div`
  padding-right: 50px;
  text-align: justify;
  hyphens: auto;
  word-wrap: break-word;
`

const CardFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`

const MenuListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  list-style: none;
  color: inherit;
`

const MenuListItem = styled.div`
  padding: 10px 15px;
  color: #fff;
  &:hover {
    color: inherit;
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
          <Section>
            <SectionWrapper>
              <SectionSideLeft>Aside Photo</SectionSideLeft>
              <SectionSideRight>
                <SectionSideRightHeader>Aktualności</SectionSideRightHeader>
                <SectionSideRightContent>
                  <ol style={{ listStyle: `none`, marginLeft: "-35px" }}>
                    {posts.map(post => {
                      const title = post.title
                      const excerpt = post.excerpt
                      return (
                        <li key={post.uri}>
                          <CardWrapper>
                            <CardHeader>
                              <div className="CardHeaderDate">{post.date}</div>
                              <CardHeaderTitle>{parse(title)}</CardHeaderTitle>
                            </CardHeader>
                            <CardMain>
                              <CardMainPhoto>PHOTO</CardMainPhoto>
                              <CardMainContent>
                                {parse(excerpt)}
                              </CardMainContent>
                            </CardMain>
                            <CardFooter></CardFooter>
                          </CardWrapper>
                        </li>
                      )
                    })}
                  </ol>
                </SectionSideRightContent>
              </SectionSideRight>
            </SectionWrapper>
          </Section>
          <BreakeSection>
            <MenuListWrapper>
              <MenuListItem>Ogłoszenia</MenuListItem>
              <MenuListItem>Urząd Gminy</MenuListItem>
              <MenuListItem>Sprzedaż nieruchomości</MenuListItem>
              <MenuListItem>Dotacje</MenuListItem>
              <MenuListItem>RODO</MenuListItem>
            </MenuListWrapper>
          </BreakeSection>
          <Section>
            <SectionWrapper>
              <SectionSideLeft>Aside Photo</SectionSideLeft>
              <SectionSideRight>
                <SectionSideRightHeader>Gmina</SectionSideRightHeader>
                <SectionSideRightContent>Gmina</SectionSideRightContent>
              </SectionSideRight>
            </SectionWrapper>
          </Section>
          <BreakeSection>
            <MenuListWrapper>
              <MenuListItem>Historia Gminy</MenuListItem>
              <MenuListItem>Zabytki</MenuListItem>
            </MenuListWrapper>
          </BreakeSection>
          <Section>
            <SectionWrapper>
              <SectionSideLeft>Aside Photo</SectionSideLeft>
              <SectionSideRight>
                <SectionSideRightHeader>Historia</SectionSideRightHeader>
                <SectionSideRightContent>Gmina</SectionSideRightContent>
              </SectionSideRight>
            </SectionWrapper>
          </Section>
          <BreakeSection>
            <MenuListWrapper>
              <MenuListItem>Gospodarka odpadami</MenuListItem>
              <MenuListItem>Zwierzęta bezdomne</MenuListItem>
              <MenuListItem>Ochrona środowiska</MenuListItem>
            </MenuListWrapper>
          </BreakeSection>
          <Section>
            <SectionWrapper>
              <SectionSideLeft>Aside Photo</SectionSideLeft>
              <SectionSideRight>
                <SectionSideRightHeader>Środowisko</SectionSideRightHeader>
                <SectionSideRightContent>Gmina</SectionSideRightContent>
              </SectionSideRight>
            </SectionWrapper>
          </Section>
          <BreakeSection>
            <MenuListWrapper>
              <MenuListItem>Atrakcje turystyczne</MenuListItem>
              <MenuListItem>Noclegi</MenuListItem>
              <MenuListItem>Sport</MenuListItem>
            </MenuListWrapper>
          </BreakeSection>
          <Section>
            <SectionWrapper>
              <SectionSideLeft>Aside Photo</SectionSideLeft>
              <SectionSideRight>
                <SectionSideRightHeader>Turystyka</SectionSideRightHeader>
                <SectionSideRightContent>Gmina</SectionSideRightContent>
              </SectionSideRight>
            </SectionWrapper>
          </Section>
          <BreakeSection>
            <MenuListWrapper>
              <MenuListItem>Atrakcje kulturalne</MenuListItem>
            </MenuListWrapper>
          </BreakeSection>
          <Section>
            <SectionWrapper>
              <SectionSideLeft>Aside Photo</SectionSideLeft>
              <SectionSideRight>
                <SectionSideRightHeader>Kultura</SectionSideRightHeader>
                <SectionSideRightContent>Gmina</SectionSideRightContent>
              </SectionSideRight>
            </SectionWrapper>
          </Section>
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
        date(formatString: "MM.DD.YYYY")
        title
        excerpt
      }
    }
  }
`
