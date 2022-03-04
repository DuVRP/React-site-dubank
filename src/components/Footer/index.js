import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Sobre Nós</FooterLinkTitle>
              <FooterLink to='/sign-up'>Como funciona</FooterLink>
              <FooterLink to='/'>Depoimentos</FooterLink>
              <FooterLink to='/'>Carreiras</FooterLink>
              <FooterLink to='/'>Investidores</FooterLink>
              <FooterLink to='/'>Termos De Serviço</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contate-nos</FooterLinkTitle>
              <FooterLink to='/'>Contatos</FooterLink>
              <FooterLink to='/'>Suporte</FooterLink>
              <FooterLink to='/'>Endereços</FooterLink>
              <FooterLink to='/'>Patrocínios</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to='/'>Enviar Seu Video</FooterLink>
              <FooterLink to='/'>Embaixadores</FooterLink>
              <FooterLink to='/'>Agência</FooterLink>
              <FooterLink to='/'>Influenciadores</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Redes Sociais</FooterLinkTitle>
              <FooterLink to='/'>Instagram</FooterLink>
              <FooterLink to='/'>Facebook</FooterLink>
              <FooterLink to='/'>Linkedin</FooterLink>
              <FooterLink to='/'>Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              <img src={require('../../images/logo.png')}
                alt='logo' />
            </SocialLogo>
            <WebsiteRights>DuBank © 2022 All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href='https://www.linkedin.com/in/eduardoviniciusrp/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.instagram.com/duvrp/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.linkedin.com/in/eduardoviniciusrp/'
                target='_blank'
                aria-label='Youtube'
                rel='noopener noreferrer'
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.linkedin.com/in/eduardoviniciusrp/'
                target='_blank'
                aria-label='Twitter'
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.linkedin.com/in/eduardoviniciusrp/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
