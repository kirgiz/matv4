import { BaseEntity } from './../../shared';

export class CurrencyStockAndSalesUtility implements BaseEntity {
    constructor(
        public id?: number,
        public iSOCode?: string,
        public name?: string,
        public companyBaseCurrencies?: BaseEntity[],
        public currencyRates?: BaseEntity[],
        public materialBuyCurrencies?: BaseEntity[],
        public materialSellCurrencies?: BaseEntity[],
        public lotBuyCurrencies?: BaseEntity[],
        public lotSellCurrencies?: BaseEntity[],
    ) {
    }
}
