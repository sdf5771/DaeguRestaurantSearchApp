import { API_SERVER } from '@env';

type TgetGourmetByRegion = {
    regionCode: string,
}

export async function getGourmetByRegion({regionCode}: TgetGourmetByRegion){
    const response = await fetch(`${API_SERVER}/store/region?id=${regionCode}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return response.json();
};