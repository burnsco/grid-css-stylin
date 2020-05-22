import styled from 'styled-components'

export const Header = styled.header`
  height: 60px;
  border: 3px solid red;
`

export const AppGrid = styled.main`
  padding-top: 5em;
  width: 90%;
  margin: 2em auto;
  display: grid;
  gap: 10em;
`

export const AboutMeContainer = styled.div`
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
`

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
`

export const AboutMe = styled.div`
  border: 3px solid blue;
`

export const MyPic = styled.div`
  border: 3px solid purple;
`

export const ProjectCard = styled.div`
  border: 3px solid purple;
`

export const ProjectInfo = styled.div`
  border: 3px solid blue;
`

export const MiniApps = styled.div`
  border: 2px solid green;
  display: grid;
  grid-gap: 0.5em;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`

export const SmallApp = styled.div`
  color: red;
  border: 3px solid red;
`

export const Contact = styled.div`
  border: 3px solid brown;
  height: 500px;
`

export const Footer = styled.footer`
  border: 3px solid orange;
  height: 300px;
`
