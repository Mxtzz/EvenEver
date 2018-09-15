import { createBottomTabNavigator } from 'react-navigation';
import { MemoPage } from './MemoPage';
import { UserPage } from './UserPage';
import { NewsPage } from './NewsPage';

const Main = createBottomTabNavigator(
    {
        Memo: MemoPage,
        News: NewsPage,
        User: UserPage,
    }, {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'Settings') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
)

export default { Main };
