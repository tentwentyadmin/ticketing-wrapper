interface IProductHierarchy {
    Products: IProduct[];
    ID: string;
    Name: string;
}

interface IProduct {
    ProductType: number,
    ProductStructure: number,
    ActivityType: number,
    ActivityCategoryID: string,
    AnonymousMode: boolean,
}