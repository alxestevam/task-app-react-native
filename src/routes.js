import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import List from './pages/List';
import Issues from './pages/Issues';

const Routes = createAppContainer(createSwitchNavigator({
  List,
  Issues,
}));

export default Routes;
