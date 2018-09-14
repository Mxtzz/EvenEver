import { createBottomTabNavigator } from 'react-navigation';
import { MemoPage } from '../pages/MemoPage';
import { UserPage } from '../pages/UserPage';
import { NewsPage } from '../pages/NewsPage';

const App = createBottomTabNavigator({
    Memo : MemoPage,
    News : NewsPage,
    User : UserPage,
})

export default App;
