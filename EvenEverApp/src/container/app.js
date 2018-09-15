import {
    createStackNavigator,
    createBottomTabNavigator,
    SwitchNavigator,
} from 'react-navigation';

import { Splash } from '../pages/Splash'

import { Login } from '../pages/Login';
import { SignUp } from '../pages/SignUp';

import { MemoPage } from '../pages/MemoPage';
import { UserPage } from '../pages/UserPage';
import { NewsPage } from '../pages/NewsPage';

const SplashPage = createStackNavigator(
    {
        Splash: Splash,
    },
    {
        headerMode: 'none',
    }
)

const SignIn = createStackNavigator(
    {
        Login: Login,
        SignUp: SignUp,
    },
    {
        initialRouteName: 'Splash',
    }
)

const Main = createBottomTabNavigator(
    {
        Memo: MemoPage,
        News: NewsPage,
        User: UserPage,
    }
);

const App = SwitchNavigator(
    {
        Splash: SplashPage,
        SignIn: SignIn,
        Main: Main,
    },
    {
        initialRouteName: 'Splash',
    }
);

export default App;
