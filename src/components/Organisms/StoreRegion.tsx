import React from 'react';
import { useQuery } from '@tanstack/react-query';
import {getRegion} from '../../queries';
import { regionType } from '../../types';
import { StyleSheet, Text, View } from 'react-native';
import Atoms from '../Atoms';
import { useNavigation } from '@react-navigation/native';

function StoreRegion(){
    const navigation = useNavigation();
    const {isLoading, isError, data, error} = useQuery(['region'], getRegion);
    console.log('data ', data);
    return (
        <View style={styles.regionRoot}>
            <Text style={styles.regionHeaderText}> # 지역별로 찾아볼까요? </Text>
            <View style={styles.regionElementContainer}>
                {isLoading ? 
                    <Text>로딩중이에요.</Text> 
                    : data.map((regionData: regionType) => {
                        return <Atoms.StoreRegionElement 
                                    key={regionData.code} 
                                    code={regionData.code} 
                                    regionName={regionData.regionName} 
                                    subRegionName={regionData.subRegionName}
                                    onPressEventHandler={() => {
                                        navigation.navigate("StoreRegionScreen", {regionCode: regionData.code});
                                    }} />
                    })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    regionRoot: {
        padding: 20,
    },
    regionHeaderText: {
        marginLeft: 5,
        fontSize: 20,
        fontWeight: 'bold',
    },
    regionElementContainer: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})

export default StoreRegion;