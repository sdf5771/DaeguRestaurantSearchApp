import React from 'react';
import {SafeAreaView, Text, View, ScrollView} from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { getGourmetByRegion } from '../../queries';

function StoreRegionScreen({route, navigation}) {
	const {regionCode} = route.params;
	const {isLoading, isError, data, error} = useQuery([`${regionCode}-list`], () => getGourmetByRegion({regionCode: regionCode}));
	console.log('data + ', data)
	return (
		<SafeAreaView style={{flex: 1}}>
			<ScrollView style={{flex: 1}}>
				<View style={{flex: 2}}>
					<Text>StoreRegionScreen</Text>
				</View>
				<View>

				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

export default StoreRegionScreen;
