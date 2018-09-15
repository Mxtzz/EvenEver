import { createBottomTabNavigator } from 'react-navigation';
import { MemoPage } from './MemoPage';
import { UserPage } from './UserPage';
import { NewsPage } from './NewsPage';

const Main = createBottomTabNavigator({
    Memo : MemoPage,
    News : NewsPage,
    User : UserPage,
})

export default { Main };
