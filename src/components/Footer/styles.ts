import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  min-width: 400px;

  padding: 32px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  color: #000;

  a {
    color: #000;
    font-size: 18px;
    text-decoration: none;

    @media (max-width: 480px) {
      font-size: 16px;
    }

    @media (max-width: 395px) {
      display: none;
    }
  }

  @media (max-width: 900px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    padding: 32px 0;
  }
`;

export const MadeWith = styled.span``;

export const Heart = styled.span`
  margin: 0 6px;
`;

export const By = styled.span`
  margin-right: 6px;

  @media (max-width: 395px) {
    display: none;
  }
`;

export const Period = styled.span``;
