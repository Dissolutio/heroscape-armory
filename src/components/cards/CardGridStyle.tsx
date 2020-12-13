import styled from 'styled-components'

export const CardGridStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 4fr;
  grid-template-rows: 1fr 3fr;
  gap: 1rem;
  grid-template-areas:
    'g1 g3 g4'
    'g2 g3 g4';
  height: 300px;
  max-width: 600px;
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
    overflow: auto;
  }
`
