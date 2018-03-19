import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Matv4SharedModule } from '../../shared';
import {
    CurrencyStockAndSalesUtilityService,
    CurrencyStockAndSalesUtilityPopupService,
    CurrencyStockAndSalesUtilityComponent,
    CurrencyStockAndSalesUtilityDetailComponent,
    CurrencyStockAndSalesUtilityDialogComponent,
    CurrencyStockAndSalesUtilityPopupComponent,
    CurrencyStockAndSalesUtilityDeletePopupComponent,
    CurrencyStockAndSalesUtilityDeleteDialogComponent,
    currencyRoute,
    currencyPopupRoute,
} from './';

const ENTITY_STATES = [
    ...currencyRoute,
    ...currencyPopupRoute,
];

@NgModule({
    imports: [
        Matv4SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        CurrencyStockAndSalesUtilityComponent,
        CurrencyStockAndSalesUtilityDetailComponent,
        CurrencyStockAndSalesUtilityDialogComponent,
        CurrencyStockAndSalesUtilityDeleteDialogComponent,
        CurrencyStockAndSalesUtilityPopupComponent,
        CurrencyStockAndSalesUtilityDeletePopupComponent,
    ],
    entryComponents: [
        CurrencyStockAndSalesUtilityComponent,
        CurrencyStockAndSalesUtilityDialogComponent,
        CurrencyStockAndSalesUtilityPopupComponent,
        CurrencyStockAndSalesUtilityDeleteDialogComponent,
        CurrencyStockAndSalesUtilityDeletePopupComponent,
    ],
    providers: [
        CurrencyStockAndSalesUtilityService,
        CurrencyStockAndSalesUtilityPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Matv4CurrencyStockAndSalesUtilityModule {}
