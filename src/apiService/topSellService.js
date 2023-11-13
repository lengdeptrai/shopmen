import * as request from '~/utils/request';

export const topSellService = async () => {
    try {
        const res = await request.get('products')
        return res;
    } catch (error) {
        console.log(error)
    }
}