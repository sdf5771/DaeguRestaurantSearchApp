import React from 'react';
import {SafeAreaView, Text, View, ScrollView} from 'react-native';
import Organisms from '../Organisms';

function HomeScreen({navigation}) {
	return (
		<SafeAreaView style={{flex: 1}}>
			<ScrollView style={{flex: 1}}>
				<View style={{flex: 2}}>
					<Text>HomeScreen</Text>
				</View>
				<Organisms.StoreRegion />
			</ScrollView>
		</SafeAreaView>
	);
}

export default HomeScreen;
