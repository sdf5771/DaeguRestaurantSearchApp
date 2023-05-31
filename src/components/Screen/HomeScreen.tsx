import React from 'react';
import { SafeAreaView, Text, View }  from 'react-native';

function HomeScreen({navigation}){
    return(
        <SafeAreaView>
            <View>
                <Text>HomeScreen</Text>
            </View>
            <View>
                <Text># 오늘 뭐먹지?</Text>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;