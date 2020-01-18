import React from 'react';

import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '~/components/Header';
import Item from './Item';

import {
  Container, FormContainer, Input, Button, Separator, IconStyled,
} from './styles';

const renderListItem = () => <Item />;

const List = () => (
  <Container>
    <Header title="Go Issues" />
    <FormContainer>
      <Input placeholder="Insert here..." />
      <Button><IconStyled name="plus" size={20} /></Button>
    </FormContainer>
    <Separator />
    <Item />
  </Container>
);

export default List;
