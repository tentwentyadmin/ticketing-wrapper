import { Rest } from './got';
import { Product } from './class/Product';

interface WrapperConstructor {
    apiUrl: string;
    channelID: string;
    token: string;
    userName: string;
    password: string;
    apiKey: string;
}

class TicketingWrapper {
    private rest: Rest;
    product: Product;

    constructor(params: WrapperConstructor) {
        const { apiUrl, channelID, token, userName, password, apiKey } = params
        this.rest = new Rest(apiUrl,channelID, token, userName, password, apiKey);
        this.product = new Product(this.rest);
    }
}

export default TicketingWrapper;