import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/Navigator/RootNavigator';

function Navigator(){
    return(
        <NavigationContainer>
            <RootNavigator />
        </NavigationContainer>
        
    )
}

export default Navigator;