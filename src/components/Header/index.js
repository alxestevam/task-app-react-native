import React from 'react';
import PropTypes from 'prop-types';
import { Container, Text } from './styles';

const Header = ({ title }) => (
  <Container>
    <Text>{ title }</Text>
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
