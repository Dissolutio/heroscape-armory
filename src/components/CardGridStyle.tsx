import styled from 'styled-components'

export const CardGridStyle = styled.div`
  display: grid;
  grid-template-columns: 4rem auto;
  grid-template-rows: 4rem 6rem auto 2rem;
  gap: 10px;
  grid-template-areas:
    'g1 g3'
    'g2 g3'
    'g4 g4'
    'g5 g5';
  height: 100%;
  .nav-link.active {
    background-color: var(--bs-secondary);
  }
  .g1 {
    grid-area: g1;
  }
  .g2 {
    grid-area: g2;
  }
  .g3 {
    grid-area: g3;
  }
  .g4 {
    grid-area: g4;
  }
  .g5 {
    grid-area: g5;
  }
`
