import React from 'react';
import styled, {css} from 'styled-components/native';
import { GestureResponderEvent, Text } from 'react-native';
import { regionType } from '../../types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

const RegionElementBtn = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    width: 120px;
    height: 40px;
    border-radius: 4px;
    border: 1px solid #1E1E1E;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin: 4px;
`;

type TStoreRegionElement = {
    onPressEventHandler?: () => void
}

function StoreRegionElement({code, regionName, subRegionName, onPressEventHandler}:regionType & TStoreRegionElement){
    return (
        <RegionElementBtn onPress={onPressEventHandler}>
            <Text>{subRegionName}</Text>
            <FontAwesomeIcon icon={faChevronRight} size={10} color="#1E1E1E" />
        </RegionElementBtn>
    )
}

export default StoreRegionElement;