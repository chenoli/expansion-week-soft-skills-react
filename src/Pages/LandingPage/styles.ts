import styled from 'styled-components';

interface IHighlightProps {
  width: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 64px 32px 0 32px;

  overflow-y: scroll;
  overflow-x: hidden;
`;

export const SoftSkill = styled.div`
  display: flex;
  align-items: center;

  height: 100vh;

  margin-top: 64px;
`;

export const DrawerButton = styled.div`
  width: 100%;

  z-index: 3;

  @media (min-width: 1201px) {
    display: none;
  }
`;

export const Left = styled.div`
  width: 50%;

  h1 {
    font-size: 38px;

    @media (max-width: 1400px) {
      font-size: 30px;
    }

    margin-top: 64px;
    margin-bottom: 64px;
  }

  p {
    font-size: 17px;
    overflow: visible;

    @media (max-width: 1400px) {
      font-size: 16px;
    }

    @media (max-width: 1200px) {
      width: 68vw;
    }

    a {
      color: #000;
      font-weight: 500;
      text-decoration: none;
    }
  }

  p + p {
    margin-top: 24px;
  }

  margin-bottom: 64px;

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 1200px) {
    overflow: visible;
  }
`;

export const Right = styled.div`
  width: 50%;

  margin-left: 128px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const AboutMe = styled.div`
  margin-top: 228px;

  display: flex;

  margin-bottom: 64px;

  @media (max-width: 1200px) {
    margin-top: 328px;
    width: 80vw;

    p {
      width: 69vw;
    }
  }

  @media (max-width: 1075px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 900px) {
    margin-top: 228px;
  }

  @media (max-width: 445px) {
    margin-bottom: 128px;
  }
`;

export const Image = styled.div`
  img {
    width: 100%;
    height: 100%;

    @media (max-width: 1075px) {
      width: 90%;
      height: 90%;

      margin-top: 64px;
    }

    @media (max-width: 700px) {
      display: none;
    }
  }

  @media (max-width: 1075px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Hello = styled.div`
  margin-top: 24px;

  span {
    font-size: 18px;
  }
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 36px;
  font-weight: 500px;

  margin-left: 12px;

  div {
    height: 24px;
    margin-top: -30px;
    background: #ffcde560;
    z-index: -1;

    @media (max-width: 570px) {
      width: 300px;
      margin-bottom: 16px;
    }

    @media (max-width: 430px) {
      width: 235px;
    }
  }

  @media (max-width: 570px) {
    margin-left: 0;
  }

  @media (max-width: 430px) {
    font-size: 28px;
  }
`;

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 128px;

  max-width: 600px;

  @media (max-width: 1075px) {
    margin-left: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;

  @media (max-width: 570px) {
    flex-direction: column;
  }
`;

export const FollowMe = styled.div`
  margin-top: 64px;
`;

export const Social = styled.div`
  display: flex;

  img {
    height: 60px;
    cursor: pointer;
  }

  a {
    margin-top: 32px;
  }

  a + a {
    margin-left: 32px;
  }
`;

export const Highlight = styled.strong<IHighlightProps>`
  display: inline-block;
  flex-direction: column;
  font-size: 20px !important;

  div {
    height: 10px;
    width: ${({ width }) => width};
    margin-top: -12px;
    background: #ffcde560;
    z-index: -1;
  }
`;
