import { NavigationActions,StackActions } from 'react-navigation';

const reset = (navigation, routeName) => {
    const resetAction = NavigationActions.navigate({
        routeName
    });

    navigation.dispatch(resetAction);
};

const routerReset = (navigation, routeName) => {
    const routerResetAtion = StackActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({
                routeName
            })
        ]
    });

    navigation.dispatch(routerResetAtion);
};

export default { reset, routerReset };