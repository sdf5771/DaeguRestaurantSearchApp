import { API_SERVER } from '@env';

type TgetDailyStore = {
    countNum: number;
}

export async function getDailyStore({countNum} : TgetDailyStore){
    const response = await fetch(`${API_SERVER}/dailyStore?count=${countNum}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    return response.json();
};