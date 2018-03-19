import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Matv4SharedModule } from '../../shared';
import {
    TransferclassificationStockAndSalesUtilityService,
    TransferclassificationStockAndSalesUtilityPopupService,
    TransferclassificationStockAndSalesUtilityComponent,
    TransferclassificationStockAndSalesUtilityDetailComponent,
    TransferclassificationStockAndSalesUtilityDialogComponent,
    TransferclassificationStockAndSalesUtilityPopupComponent,
    TransferclassificationStockAndSalesUtilityDeletePopupComponent,
    TransferclassificationStockAndSalesUtilityDeleteDialogComponent,
    transferclassificationRoute,
    transferclassificationPopupRoute,
} from './';

const ENTITY_STATES = [
    ...transferclassificationRoute,
    ...transferclassificationPopupRoute,
];

@NgModule({
    imports: [
        Matv4SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        TransferclassificationStockAndSalesUtilityComponent,
        TransferclassificationStockAndSalesUtilityDetailComponent,
        TransferclassificationStockAndSalesUtilityDialogComponent,
        TransferclassificationStockAndSalesUtilityDeleteDialogComponent,
        TransferclassificationStockAndSalesUtilityPopupComponent,
        TransferclassificationStockAndSalesUtilityDeletePopupComponent,
    ],
    entryComponents: [
        TransferclassificationStockAndSalesUtilityComponent,
        TransferclassificationStockAndSalesUtilityDialogComponent,
        TransferclassificationStockAndSalesUtilityPopupComponent,
        TransferclassificationStockAndSalesUtilityDeleteDialogComponent,
        TransferclassificationStockAndSalesUtilityDeletePopupComponent,
    ],
    providers: [
        TransferclassificationStockAndSalesUtilityService,
        TransferclassificationStockAndSalesUtilityPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Matv4TransferclassificationStockAndSalesUtilityModule {}
