import React from 'react';
import {SafeAreaView, Text, View, ScrollView} from 'react-native';

function StoreRegionScreen({navigation}) {
	console.log('navigation ', navigation)

	return (
		<SafeAreaView style={{flex: 1}}>
			<ScrollView style={{flex: 1}}>
				<View style={{flex: 2}}>
					<Text>StoreRegionScreen</Text>
				</View>
				
			</ScrollView>
		</SafeAreaView>
	);
}

export default StoreRegionScreen;
