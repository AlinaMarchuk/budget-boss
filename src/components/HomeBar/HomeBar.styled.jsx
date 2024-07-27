import styled from '@emotion/styled';

export const WrapperStyled = styled.section`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
    width: 704px;
    padding: 40px 0 60px 0;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 1280px) {
    width: 1094px;
    padding-bottom: 10px;
  }
`;
