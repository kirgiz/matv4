import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Matv4SharedModule } from '../../shared';
import {
    CountryStockAndSalesUtilityService,
    CountryStockAndSalesUtilityPopupService,
    CountryStockAndSalesUtilityComponent,
    CountryStockAndSalesUtilityDetailComponent,
    CountryStockAndSalesUtilityDialogComponent,
    CountryStockAndSalesUtilityPopupComponent,
    CountryStockAndSalesUtilityDeletePopupComponent,
    CountryStockAndSalesUtilityDeleteDialogComponent,
    countryRoute,
    countryPopupRoute,
} from './';

const ENTITY_STATES = [
    ...countryRoute,
    ...countryPopupRoute,
];

@NgModule({
    imports: [
        Matv4SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        CountryStockAndSalesUtilityComponent,
        CountryStockAndSalesUtilityDetailComponent,
        CountryStockAndSalesUtilityDialogComponent,
        CountryStockAndSalesUtilityDeleteDialogComponent,
        CountryStockAndSalesUtilityPopupComponent,
        CountryStockAndSalesUtilityDeletePopupComponent,
    ],
    entryComponents: [
        CountryStockAndSalesUtilityComponent,
        CountryStockAndSalesUtilityDialogComponent,
        CountryStockAndSalesUtilityPopupComponent,
        CountryStockAndSalesUtilityDeleteDialogComponent,
        CountryStockAndSalesUtilityDeletePopupComponent,
    ],
    providers: [
        CountryStockAndSalesUtilityService,
        CountryStockAndSalesUtilityPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Matv4CountryStockAndSalesUtilityModule {}
