import React from 'react'
import * as S from './AboutMe.styles';
import logoGithub from "../../svg/github.svg";
import logoLinkedin from "../../svg/linkedin.svg";
import logoUdemy from "../../svg/udemy.svg";

const AboutMe = () => {

    const socialNetworks = [
        {
          name: "Github",
          link: "https://github.com",
          logo: logoGithub,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com",
          logo: logoLinkedin,
        },
        {
          name: "Udemy",
          link: "https://udemy.com",
          logo: logoUdemy,
        },
       
      ];
      

  return (
    <S.ContainerAboutMe id="about-me">
      <S.ContainerFlex>
        <S.ContainerText>

            <S.Title>
                <p> 👋🏼 Hello, I'm</p>
                <p>Camilo Giraldo</p>
                <p>Frontend Developer</p>
            </S.Title>
            <S.DescriptionText>
                lorem ipsum dolor sit amet consectetur adipiscing elit. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi.
            </S.DescriptionText>
            <S.ContainerIcons>
            {socialNetworks.map((network, index) => (
              <a
                key={index}
                href={network.link}
                target="__blank"
                rel="noreferrer"
              >
                <img src={network.logo} alt={network.name} />
              </a>
            ))}
            </S.ContainerIcons>
        </S.ContainerText>
        <S.ContainerImage>
            <img src="/img/profile.jpg" alt='J Camilo G' />
        </S.ContainerImage>
      </S.ContainerFlex>
    </S.ContainerAboutMe>
  )
}

export default AboutMe
