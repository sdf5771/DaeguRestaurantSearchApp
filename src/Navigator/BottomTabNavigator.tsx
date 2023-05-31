import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Screen from '../components/Screen'

const Tab = createBottomTabNavigator();

function BottomTabNavigator(){
    return(
        <Tab.Navigator
            initialRouteName='홈'
            screenOptions={{headerShown: false}}
            >
            <Tab.Screen name="홈" component={Screen.HomeScreen} />
            <Tab.Screen name="검색" component={Screen.SearchScreen} />
            <Tab.Screen name="소식" component={Screen.NewsScreen} />
            <Tab.Screen name="내 정보" component={Screen.UserInfoScreen} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;