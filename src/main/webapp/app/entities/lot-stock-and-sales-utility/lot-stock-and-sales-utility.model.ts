import { BaseEntity } from './../../shared';

export class LotStockAndSalesUtility implements BaseEntity {
    constructor(
        public id?: number,
        public code?: string,
        public description?: string,
        public creationDate?: any,
        public numberOfItems?: number,
        public comments?: string,
        public materialLots?: BaseEntity[],
        public buycurrencylotISOCode?: string,
        public buycurrencylotId?: number,
        public sellcurrencylotISOCode?: string,
        public sellcurrencylotId?: number,
    ) {
    }
}
