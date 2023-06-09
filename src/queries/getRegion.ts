import { API_SERVER } from '@env';

export async function getRegion(){
    const response = await fetch(`${API_SERVER}/region`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return response.json();
};