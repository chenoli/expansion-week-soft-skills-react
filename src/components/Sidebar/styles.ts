import styled, { css } from 'styled-components';

interface IContentProps {
  visible: boolean;
}

export const Container = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;

  overflow: hidden;
`;

export const Content = styled.div<IContentProps>`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  justify-content: space-between;

  position: relative;
  transition: all 0.3s;

  @media (max-width: 1200px) {
    width: 0;

    ${({ visible }) =>
      visible
        ? css`
            opacity: 1;
            width: 40% !important;
          `
        : css`
            opacity: 0;
            width: 0;
          `}
  }
`;

export const Header = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding: 32px;
  justify-content: space-between;
`;

export const BackButton = styled.button`
  display: flex;

  border: 0;
  background: none;

  margin-bottom: 32px;

  @media (min-width: 1201px) {
    display: none;
  }
`;

export const Name = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  img {
    width: 25px;
    height: 25px;
    transition: transform 0.4s ease-out;
  }

  strong {
    font-size: 18px;
    margin-left: 16px;
  }

  &:hover {
    img {
      transform: rotateX(180deg) rotateY(180deg);
    }
  }
`;

export const Pages = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: 32px;

  text-align: right;

  span + span {
    margin-top: 16px;
  }
`;

export const Page = styled.span`
  width: 100%;

  display: flex;
  flex-direction: column;

  font-weight: 500;

  cursor: pointer;

  div.soft-skill {
    height: 3px;
    width: 70px;
    background: #000;
    align-self: flex-end;

    transition: all 0.4s;
  }

  div.about-me {
    height: 3px;
    width: 90px;
    background: #000;
    align-self: flex-end;

    transition: all 0.4s;
  }

  div.placeholder {
    height: 3px;
    width: 200px;
    background: transparent;
    align-self: flex-end;
  }
`;

export const Separator = styled.div`
  width: 60px;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  span {
    width: 200px;
    display: block;

    margin: 64px 0;

    font-size: 22px;
    font-weight: 500;

    text-align: center;
    transform: rotateZ(-90deg);
  }

  div {
    width: 8px;
    height: 100%;

    background: #000;
  }
`;
