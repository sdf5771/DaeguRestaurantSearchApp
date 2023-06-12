import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { TdailyStore } from '../../types/dailyStore';
import { NoImage } from '../../assets/images';
import { WithLocalSvg } from 'react-native-svg';

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
            <View style={{marginVertical: 10, backgroundColor: '#eaeaea', borderRadius: 10}}>
                {thumbnailImg ? 
                <ImageBackground 
                    resizeMode='cover'
                    style={{
                        position: 'relative',
                        width: width - 40, 
                        height: 200, 
                        justifyContent: 'flex-end', 
                        borderRadius: 10}} 
                    source={{uri: `${thumbnailImg}`}}>
                    <View style={styles.contentBox}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#ffffff'}}>{storeName}</Text>
                        <Text style={{fontSize: 15, fontWeight: '500', color: '#ffffff'}}>${address}</Text>
                    </View>
                </ImageBackground>
                : <WithLocalSvg 
                    width={width - 40}
                    height={200}
                    asset={NoImage} />}
                
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    dailyStoreElementBox: {
        flexDirection: 'column',
        paddingHorizontal: 10,
        justifyContent: 'center',
        width: width,
        padding: 10,
        alignItems: 'center',
        height: 300,
    },
    contentBox: {
        position: 'absolute',
        bottom: 3,
        width: width - 60,
        height: 50,
        backgroundColor: '#000000c0',
        borderRadius: 8,
        marginBottom: 10,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default DailyStoreElement;