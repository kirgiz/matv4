import { BaseEntity } from './../../shared';

export class MaterialStockAndSalesUtility implements BaseEntity {
    constructor(
        public id?: number,
        public code?: string,
        public description?: string,
        public creationDate?: any,
        public comments?: string,
        public materialTypeDefName?: string,
        public materialTypeDefId?: number,
        public buycurrencyISOCode?: string,
        public buycurrencyId?: number,
        public sellcurrencyISOCode?: string,
        public sellcurrencyId?: number,
        public lotIdentifierCode?: string,
        public lotIdentifierId?: number,
        public materialClassifCode?: string,
        public materialClassifId?: number,
        public materialTypeCatName?: string,
        public materialTypeCatId?: number,
    ) {
    }
}
