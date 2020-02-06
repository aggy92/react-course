import styled from 'styled-components';
import {CardWrapper} from "../Card/styles";

 const typeColor = {
  Grass: '#98FB98',
  Fighting: '#D2B48C',
  Fairy: '#FFC0CB',
  Metal: '#d5d5d7',
  Psychic: '#E6E6FA',
  Lightning: '#FFFACD',
  Water: '#b8ccd1',
  Darkness: '#696969',
  Fire: '#cf6035',
  Colorless: '#d3d3d3',
};

export const DetailsWrapper = styled(CardWrapper)`
    background-color: ${props => props.type ? typeColor[props.type] : '#FFFFFF'};
    `;

export const DetailsCardWrapper = styled.div`
        display: flex;
        justify-content: center;
    `;