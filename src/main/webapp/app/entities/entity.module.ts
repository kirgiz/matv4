import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Matv4CompanyStockAndSalesUtilityModule } from './company-stock-and-sales-utility/company-stock-and-sales-utility.module';
import { Matv4CountryStockAndSalesUtilityModule } from './country-stock-and-sales-utility/country-stock-and-sales-utility.module';
import { Matv4CurrencyStockAndSalesUtilityModule } from './currency-stock-and-sales-utility/currency-stock-and-sales-utility.module';
import { Matv4ForexratesStockAndSalesUtilityModule } from './forexrates-stock-and-sales-utility/forexrates-stock-and-sales-utility.module';
import { Matv4ThirdclassificationStockAndSalesUtilityModule } from './thirdclassification-stock-and-sales-utility/thirdclassification-stock-and-sales-utility.module';
import { Matv4ThirdStockAndSalesUtilityModule } from './third-stock-and-sales-utility/third-stock-and-sales-utility.module';
import { Matv4AddressclassificationStockAndSalesUtilityModule } from './addressclassification-stock-and-sales-utility/addressclassification-stock-and-sales-utility.module';
import { Matv4AddressStockAndSalesUtilityModule } from './address-stock-and-sales-utility/address-stock-and-sales-utility.module';
import { Matv4CivilityStockAndSalesUtilityModule } from './civility-stock-and-sales-utility/civility-stock-and-sales-utility.module';
import { Matv4TransferclassificationStockAndSalesUtilityModule } from './transferclassification-stock-and-sales-utility/transferclassification-stock-and-sales-utility.module';
import { Matv4MaterialclassificationStockAndSalesUtilityModule } from './materialclassification-stock-and-sales-utility/materialclassification-stock-and-sales-utility.module';
import { Matv4LotStockAndSalesUtilityModule } from './lot-stock-and-sales-utility/lot-stock-and-sales-utility.module';
import { Matv4MaterialStockAndSalesUtilityModule } from './material-stock-and-sales-utility/material-stock-and-sales-utility.module';
import { Matv4MaterialhistoryStockAndSalesUtilityModule } from './materialhistory-stock-and-sales-utility/materialhistory-stock-and-sales-utility.module';
import { Matv4DashboardStockAndSalesUtilityModule } from './dashboard-stock-and-sales-utility/dashboard-stock-and-sales-utility.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        Matv4CompanyStockAndSalesUtilityModule,
        Matv4CountryStockAndSalesUtilityModule,
        Matv4CurrencyStockAndSalesUtilityModule,
        Matv4ForexratesStockAndSalesUtilityModule,
        Matv4ThirdclassificationStockAndSalesUtilityModule,
        Matv4ThirdStockAndSalesUtilityModule,
        Matv4AddressclassificationStockAndSalesUtilityModule,
        Matv4AddressStockAndSalesUtilityModule,
        Matv4CivilityStockAndSalesUtilityModule,
        Matv4TransferclassificationStockAndSalesUtilityModule,
        Matv4MaterialclassificationStockAndSalesUtilityModule,
        Matv4LotStockAndSalesUtilityModule,
        Matv4MaterialStockAndSalesUtilityModule,
        Matv4MaterialhistoryStockAndSalesUtilityModule,
        Matv4DashboardStockAndSalesUtilityModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Matv4EntityModule {}
