import styled from 'styled-components';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const Wrapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `linear-gradient(to right,
      rgba(19, 38, 47, 0.925) 0%,
      rgba(9, 28, 37, 0.925) 100%), url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : '#000'};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieInfo 1s;

  @keyframes {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
