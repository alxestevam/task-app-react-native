import React from 'react';

import { Text } from 'react-native';
import {
  Container, Info, Organization, Repository, Image,
} from './styles';

const Item = () => (
  <Container>
    <Image source={{ uri: 'https://avatars2.githubusercontent.com/u/29647600?v=4' }} />
    <Info>
      <Organization>react-navigation</Organization>
      <Repository>React Community</Repository>
    </Info>
  </Container>
);

export default Item;
