import React, { useState, useCallback, useEffect } from 'react';

import { FiMenu } from 'react-icons/fi';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';

import coding from '../../assets/coding.svg';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import communication from '../../assets/communication.svg';

import {
  Left,
  Name,
  Hello,
  Image,
  Right,
  Social,
  AboutMe,
  Wrapper,
  FollowMe,
  Container,
  Highlight,
  SoftSkill,
  DrawerButton,
  Presentation,
} from './styles';

const LandingPage: React.FC = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [selectedPage, setSelectedPage] = useState<'SOFT_SKILL' | 'ABOUT_ME'>(
    'SOFT_SKILL',
  );

  const handleOnMenuToggle = useCallback(() => {
    setIsSidebarVisible(oldState => !oldState);
  }, []);

  const handleScroll = useCallback(() => {
    const element = document.getElementById('scrollable');

    if (element && element.scrollTop > 600) {
      setSelectedPage('ABOUT_ME');
    } else {
      setSelectedPage('SOFT_SKILL');
    }
  }, []);

  useEffect(() => {
    const element = document.getElementById('scrollable');
    element?.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <Sidebar
      selectedPage={selectedPage}
      visible={isSidebarVisible}
      onClose={handleOnMenuToggle}
    >
      <Container id="scrollable">
        <DrawerButton>
          <FiMenu size={24} onClick={handleOnMenuToggle} />
        </DrawerButton>
        <SoftSkill id="soft-skill">
          <Left>
            <h1>Comunicação</h1>
            <p>
              Na minha opnião, a comunicação é a chave pra toda, e qualquer,
              <span> </span>
              <Highlight width="85px">
                soft skill.
                <div />
              </Highlight>
              <span> </span>
              Um bom nível dessa habilidade deixa mais fácil
              <span> </span>
              <Highlight width="193px">
                o desenvolvimento
                <div />
              </Highlight>
              <span> </span>
              das outras skills.
            </p>
            <p>
              Um ambiente comunicativo acelera o aprendizado, e melhora a
              atmosfera.
              <span> </span>
              <Highlight width="137px">
                Compartilhar
                <div />
              </Highlight>
              <span> </span>
              suas dúvidas e conhecimentos de forma efetiva ajuda, tanto a você,
              quanto seus companheiros.
            </p>
            <p>
              De acordo com um
              <span> </span>
              <Highlight width="70px">
                estudo
                <div />
              </Highlight>
              <span> </span>
              realizado pelo
              <span> </span>
              <a href="https://www.careerbuilder.com/">CarrerBuilder</a>
              <span>, </span>
              cerca de 77% de recrutadores consideram que as soft skills são tão
              <span> </span>
              <Highlight width="125px">
                importantes
                <div />
              </Highlight>
              <span> </span>
              quanto skills técnicas.
            </p>
            <p>
              Ainda na mesma pesquisa, dentre as 10 soft skills que as empresas
              mais buscam nos profissionais, 56% dizem que o candidato deve ser
              um
              <span> </span>
              <Highlight width="220px">
                Comunicador Efetivo.
                <div />
              </Highlight>
            </p>
          </Left>
          <Right>
            <img src={communication} alt="" />
          </Right>
        </SoftSkill>
        <AboutMe id="about-me">
          <Image>
            <img src={coding} alt="" />
          </Image>
          <Presentation>
            <Wrapper>
              <Hello>
                <span>Olá, eu sou o</span>
              </Hello>
              <Name>
                Carlos Henrique.
                <div />
              </Name>
            </Wrapper>
            <p>
              Sou desenvolvedor Fullstack, entusiasta de novas tecnologias.
              Aluno na Rocketseat, sempre em busca de novos desafios!
            </p>
            <FollowMe>
              <h3>Entre em contato:</h3>
              <Social>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/CHenOli"
                >
                  <img src={github} alt="" />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/chenoli/"
                >
                  <img src={linkedin} alt="" />
                </a>
              </Social>
            </FollowMe>
          </Presentation>
        </AboutMe>
        <Footer />
      </Container>
    </Sidebar>
  );
};

export default LandingPage;
