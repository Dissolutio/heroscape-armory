import React from 'react'
import styled from 'styled-components'

export const CardGridStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 10px 10px;
  grid-template-areas:
    'g1 g1 g3 g3 g4 . . .'
    'g2 g2 g3 g3 g4 . . .';
  /* justify-items: center; */
  height: 300px;
  max-width: 600px;

  .g1 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .g2 {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    /* background: blue; */
    text-align: center;
  }
  .g3 {
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  .g4 {
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 3;
    background: green;
  }
`
