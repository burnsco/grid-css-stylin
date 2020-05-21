import React from 'react'
import styled from 'styled-components'

const AppGrid = styled.main`
  grid-gap: 3em;
  margin: 1em;
  display: grid;
`
const Header = styled.header`
  height: 60px;
  border: 3px solid red;
`
const AboutMe = styled.div`
  height: 400px;
  border: 3px solid blue;
`
const MyPic = styled.div`
  height: 400px;
  border: 3px solid purple;
`
const Contact = styled.div`
  height: 500px;
  border: 3px solid brown;
`
const ProjectCard = styled.div`
  height: 400px;
  border: 3px solid purple;
`
const ProjectInfo = styled.div`
  height: 400px;
  border: 3px solid blue;
`
const MiniApps = styled.div`
  border: 2px solid green;
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`
const Footer = styled.footer`
  height: 400px;
  border: 3px solid orange;
`
const SmallApp = styled.div`
  color: red;
  border: 3px solid red;
`

function App() {
  return (
    <>
      <Header>Header</Header>
      <AppGrid>
        <AboutMe>About Me</AboutMe>
        <MyPic>My Picture</MyPic>
        <ProjectCard>Project Card</ProjectCard>
        <ProjectInfo>Project Info</ProjectInfo>
        <MiniApps>
          <SmallApp>
            <a href="https://placeholder.com">
              <img src="https://via.placeholder.com/250"></img>
            </a>
          </SmallApp>
          <SmallApp>
            {' '}
            <a href="https://placeholder.com">
              <img src="https://via.placeholder.com/250"></img>
            </a>
          </SmallApp>
          <SmallApp>
            {' '}
            <a href="https://placeholder.com">
              <img src="https://via.placeholder.com/250"></img>
            </a>
          </SmallApp>
          <SmallApp>
            {' '}
            <a href="https://placeholder.com">
              <img src="https://via.placeholder.com/250"></img>
            </a>
          </SmallApp>
          <SmallApp>
            {' '}
            <a href="https://placeholder.com">
              <img src="https://via.placeholder.com/250"></img>
            </a>
          </SmallApp>
          <SmallApp>
            {' '}
            <a href="https://placeholder.com">
              <img src="https://via.placeholder.com/250"></img>
            </a>
          </SmallApp>
        </MiniApps>
      </AppGrid>
      <Contact>Contact</Contact>
      <Footer>Footer</Footer>
    </>
  )
}

export default App
