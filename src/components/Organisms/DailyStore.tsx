import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import ViewSlider from 'react-native-view-slider';
import { getDailyStore } from '../../queries';
import { TdailyStore } from '../../types/dailyStore';
import Molecules from '../Molecules';

const { width, height } = Dimensions.get('window');

function DailyStore(){
    const countNum = 6;
    const {isLoading, isError, data, error} = useQuery(['dailyStore'], () => getDailyStore({countNum: countNum}));
    console.log('data ', data);
    return (
        <View style={styles.dailyStoreRoot}>
            <Text style={styles.dailyStoreHeaderText}># 오늘의 추천메뉴</Text>
            <ViewSlider 
                renderSlides = {
                    data ? data.map((dailyStoreData: TdailyStore, index) => {
                        return <Molecules.DailyStoreElement 
                            key={dailyStoreData.storeId}
                            storeId={dailyStoreData.storeId}
                            storeName={dailyStoreData.storeName}
                            storeLikeCount={dailyStoreData.storeLikeCount}
                            storeReviewCount={dailyStoreData.storeReviewCount}
                            reviewAvg={dailyStoreData.reviewAvg}
                            thumbnailImg={dailyStoreData.thumbnailImg}
                            categoryId={dailyStoreData.categoryId}
                            address={dailyStoreData.address}
                            regionCode={dailyStoreData.regionCode}
                            userId={dailyStoreData.userId}
                            openTime={dailyStoreData.openTime}
                            storeCreated={dailyStoreData.storeCreated}
                           storeUpdated={dailyStoreData.storeUpdated}
                           introduction={dailyStoreData.introduction}
                           onPressEventHandler={() => {}}
                           />
                    }) : null
                }
                style={styles.slider}     //Main slider container style
                height = {200}    //Height of your slider
                slideCount = {countNum}    //How many views you are adding to slide
                dots = {true}     // Pagination dots visibility true for visibile 
                dotActiveColor = 'black'     //Pagination dot active color
                dotInactiveColor = 'gray'    // Pagination do inactive color
                dotsContainerStyle={styles.dotContainer}     // Container style of the pagination dots
                autoSlide = {true}    //The views will slide automatically
                slideInterval = {2000}    //In Miliseconds
            />
        </View>
    )
}

const styles = StyleSheet.create({
    dailyStoreRoot: {
        flex: 1,
        padding: 20,
        backgroundColor: '#ffffff',
    },
    dailyStoreHeaderText: {
        marginLeft: 5,
        fontSize: 20,
        fontWeight: 'bold',
    },
    viewBox: {
        paddingHorizontal: 20,
        justifyContent: 'center',
        width: width,
        padding: 10,
        alignItems: 'center',
        height: 150
    },
    slider: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    dotContainer: {
        backgroundColor: 'transparent',
        marginVertical: 0,
    }
})

export default DailyStore;