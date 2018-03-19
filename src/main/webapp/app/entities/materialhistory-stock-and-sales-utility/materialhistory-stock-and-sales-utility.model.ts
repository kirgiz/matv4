import { BaseEntity } from './../../shared';

export class MaterialhistoryStockAndSalesUtility implements BaseEntity {
    constructor(
        public id?: number,
        public code?: string,
        public creationDate?: any,
        public price?: number,
        public comments?: string,
        public itemTransfereds?: BaseEntity[],
        public transferClassifName?: string,
        public transferClassifId?: number,
        public warehousefromName?: string,
        public warehousefromId?: number,
        public warehousetoName?: string,
        public warehousetoId?: number,
    ) {
    }
}
