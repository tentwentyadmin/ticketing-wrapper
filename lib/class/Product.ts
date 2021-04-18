import { Rest } from '../got';

export class Product {

    constructor(private rest: Rest) {

    }

    async getProductHierarchy() {
        
        const url = '/Product/Hierarchy';

        const room = (await this.rest.get(url));

        return room;
    }
}
