import React from 'react';
import {SafeAreaView, Text, View, ScrollView} from 'react-native';

function HomeScreen({navigation}) {
	return (
		<SafeAreaView style={{flex: 1}}>
			<ScrollView style={{flex: 1}}>
				<View style={{flex: 2}}>
					<Text>HomeScreen</Text>
				</View>
				<View style={{flex: 2}}>
					<Text># 오늘 뭐먹지?</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

export default HomeScreen;
