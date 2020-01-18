import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { colors } from '~/styles';

export const Container = styled.View`
  background-color: ${colors.white};
  height: ${getStatusBarHeight() + 30}px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.dark}
`;
