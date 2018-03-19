import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Matv4SharedModule } from '../../shared';
import {
    AddressStockAndSalesUtilityService,
    AddressStockAndSalesUtilityPopupService,
    AddressStockAndSalesUtilityComponent,
    AddressStockAndSalesUtilityDetailComponent,
    AddressStockAndSalesUtilityDialogComponent,
    AddressStockAndSalesUtilityPopupComponent,
    AddressStockAndSalesUtilityDeletePopupComponent,
    AddressStockAndSalesUtilityDeleteDialogComponent,
    addressRoute,
    addressPopupRoute,
} from './';

const ENTITY_STATES = [
    ...addressRoute,
    ...addressPopupRoute,
];

@NgModule({
    imports: [
        Matv4SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        AddressStockAndSalesUtilityComponent,
        AddressStockAndSalesUtilityDetailComponent,
        AddressStockAndSalesUtilityDialogComponent,
        AddressStockAndSalesUtilityDeleteDialogComponent,
        AddressStockAndSalesUtilityPopupComponent,
        AddressStockAndSalesUtilityDeletePopupComponent,
    ],
    entryComponents: [
        AddressStockAndSalesUtilityComponent,
        AddressStockAndSalesUtilityDialogComponent,
        AddressStockAndSalesUtilityPopupComponent,
        AddressStockAndSalesUtilityDeleteDialogComponent,
        AddressStockAndSalesUtilityDeletePopupComponent,
    ],
    providers: [
        AddressStockAndSalesUtilityService,
        AddressStockAndSalesUtilityPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Matv4AddressStockAndSalesUtilityModule {}
