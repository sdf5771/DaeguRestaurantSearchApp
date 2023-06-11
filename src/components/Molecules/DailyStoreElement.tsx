import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { TdailyStore } from '../../types/dailyStore';

const { width, height } = Dimensions.get('window');

type TDailyStoreElementProps = TdailyStore & {
    onPressEventHandler?: () => void
}

function DailyStoreElement({storeId,
     storeName, storeLikeCount, storeReviewCount,
      reviewAvg, thumbnailImg, categoryId, address,
       regionCode, userId, openTime, storeCreated,
        storeUpdated, introduction, onPressEventHandler}: TDailyStoreElementProps){
    
    return(
        <TouchableOpacity style={styles.dailyStoreElementBox} onPress={onPressEventHandler}>
            <View>
                {thumbnailImg ? <Image source={{uri: `${thumbnailImg}`}} /> : null}
            </View>
            <View>
                <Text>{storeName}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    dailyStoreElementBox: {
        paddingHorizontal: 10,
        justifyContent: 'center',
        width: width,
        padding: 10,
        alignItems: 'center',
        height: 150
    },
})

export default DailyStoreElement;