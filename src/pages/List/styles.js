import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
`;

export const FormContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;

export const Input = styled.TextInput`
  background-color: ${colors.white};
  flex: 1;
  height: 30px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  margin-right: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 0;
  padding-bottom: 0;
`;

export const Button = styled.TouchableOpacity`
  height: 30px;
`;

export const Separator = styled.View`
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 15px;
  background-color: ${colors.white};
  border-bottom-width: 1px;
  border-color: ${colors.blackTransparent}
`;


export const IconStyled = styled(Icon)`
  color: ${colors.secondary};
  line-height: 30px;
`;
