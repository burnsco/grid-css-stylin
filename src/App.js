import React from 'react'
import {
  Header,
  AppGrid,
  AboutMe,
  MyPic,
  ProjectCard,
  ProjectInfo,
  MiniApps,
  SmallApp,
  Contact,
  Footer,
  AboutMeContainer,
  ProjectsContainer,
} from './styles'

function App() {
  return (
    <>
      <Header>
        <h3>Links</h3>
      </Header>

      <AppGrid>
        <AboutMeContainer>
          <AboutMe>
            <h1>About Me</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              suscipit commodi maiores libero iure eaque, exercitationem aliquid
              deleniti corporis cumque beatae sunt itaque blanditiis amet quod
              nisi accusamus eos magnam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              architecto maxime voluptatum suscipit impedit neque ad corrupti
              rerum a delectus nemo, expedita odit non inventore, voluptate
              eveniet magni exercitationem! Aliquam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              architecto maxime voluptatum suscipit impedit neque ad corrupti
              rerum a delectus nemo, expedita odit non inventore, voluptate
              eveniet magni exercitationem! Aliquam?
            </p>
          </AboutMe>
          <MyPic>
            <h3>My Pic</h3>
            <a href="https://placeholder.com">
              <img src="https://via.placeholder.com/250" alt="ha"></img>
            </a>
          </MyPic>
        </AboutMeContainer>

        <ProjectsContainer>
          <ProjectCard>
            <h1>reddit clone</h1>{' '}
            <a href="https://placeholder.com">
              <img src="https://via.placeholder.com/220" alt="ha"></img>
            </a>
          </ProjectCard>
          <ProjectInfo>
            {' '}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              architecto maxime voluptatum suscipit impedit neque ad corrupti
              rerum a delectus nemo, expedita odit non inventore, voluptate
              eveniet magni exercitationem! Aliquam?
            </p>
          </ProjectInfo>
        </ProjectsContainer>
        <ProjectsContainer>
          <ProjectCard>
            <h1>ubereats clone</h1>{' '}
            <a href="https://placeholder.com">
              <img src="https://via.placeholder.com/220" alt="ha"></img>
            </a>
          </ProjectCard>
          <ProjectInfo>
            {' '}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              architecto maxime voluptatum suscipit impedit neque ad corrupti
              rerum a delectus nemo, expedita odit non inventore, voluptate
              eveniet magni exercitationem! Aliquam?
            </p>
          </ProjectInfo>
        </ProjectsContainer>

        <MiniApps>
          <SmallApp>
            <a href="https://placeholder.com">
              <img src="https://via.placeholder.com/230" alt="ha"></img>
            </a>
          </SmallApp>
          <SmallApp>
            {' '}
            <a href="https://placeholder.com">
              <img src="https://via.placeholder.com/230" alt="ha"></img>
            </a>
          </SmallApp>
          <SmallApp>
            {' '}
            <a href="https://placeholder.com">
              <img src="https://via.placeholder.com/230" alt="ha"></img>
            </a>
            mini app
          </SmallApp>
          <SmallApp>
            {' '}
            <a href="https://placeholder.com">
              <img src="https://via.placeholder.com/230" alt="ha"></img>
            </a>
          </SmallApp>
          <SmallApp>
            {' '}
            <a href="https://placeholder.com">
              <img src="https://via.placeholder.com/230" alt="ha"></img>
            </a>
          </SmallApp>
          <SmallApp>
            {' '}
            <a href="https://placeholder.com">
              <img src="https://via.placeholder.com/230" alt="ha"></img>
            </a>
          </SmallApp>
        </MiniApps>
      </AppGrid>

      <Contact>
        <h3>Contact</h3>
        <p>Form here</p>
      </Contact>

      <Footer>Footer</Footer>
    </>
  )
}

export default App
