import React, { useCallback, useState, useEffect } from 'react';

import { FiArrowLeft } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import {
  Name,
  Page,
  Pages,
  Header,
  Content,
  Container,
  Separator,
  BackButton,
} from './styles';

interface ISidebarProps {
  visible: boolean;
  selectedPage: 'SOFT_SKILL' | 'ABOUT_ME';
  onClose: () => void;
}

const Sidebar: React.FC<ISidebarProps> = ({
  visible,
  children,
  selectedPage,
  onClose,
}) => {
  const [sideText, setSideText] = useState('SOFT SKILL');

  const handleScroll = useCallback(() => {
    const element = document.getElementById('scrollable');

    if (element && element.scrollTop > 600) {
      setSideText('SOBRE MIM');
    } else {
      setSideText('SOFT SKILL');
    }
  }, []);

  useEffect(() => {
    const element = document.getElementById('scrollable');
    element?.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleNavigateTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <Container>
      <Content visible={visible}>
        <Header>
          <BackButton onClick={onClose}>
            <FiArrowLeft size={22} />
          </BackButton>
          <Name>
            <img src={logo} alt="" />
            <strong>Carlos Henrique</strong>
          </Name>
        </Header>
        <Pages>
          <Page onClick={() => handleNavigateTo('soft-skill')}>
            <span>Soft Skill</span>
            {selectedPage === 'SOFT_SKILL' ? (
              <div className="soft-skill" />
            ) : (
              <div className="placeholder" />
            )}
          </Page>
          <Page onClick={() => handleNavigateTo('about-me')}>
            <span>Sobre mim</span>
            {selectedPage === 'ABOUT_ME' ? (
              <div className="about-me" />
            ) : (
              <div className="placeholder" />
            )}
          </Page>
        </Pages>
      </Content>
      <Separator>
        <div />
        <span>{sideText}</span>
        <div />
      </Separator>
      {children}
    </Container>
  );
};

export default Sidebar;
