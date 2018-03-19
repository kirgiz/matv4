import { BaseEntity } from './../../shared';

export class ForexratesStockAndSalesUtility implements BaseEntity {
    constructor(
        public id?: number,
        public rateDate?: any,
        public straighRate?: number,
        public rateForCurrencyName?: string,
        public rateForCurrencyId?: number,
    ) {
    }
}
