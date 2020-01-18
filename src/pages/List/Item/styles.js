import styled from 'styled-components/native';
import { colors } from '~/styles';

export const Container = styled.View`
  background-color: ${colors.white};
  height: 80px;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 5px;
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
`;

export const Info = styled.View``;

export const Organization = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.dark};
`;

export const Repository = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.grey};
`;
