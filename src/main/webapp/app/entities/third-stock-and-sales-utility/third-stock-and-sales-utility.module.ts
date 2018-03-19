import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Matv4SharedModule } from '../../shared';
import {
    ThirdStockAndSalesUtilityService,
    ThirdStockAndSalesUtilityPopupService,
    ThirdStockAndSalesUtilityComponent,
    ThirdStockAndSalesUtilityDetailComponent,
    ThirdStockAndSalesUtilityDialogComponent,
    ThirdStockAndSalesUtilityPopupComponent,
    ThirdStockAndSalesUtilityDeletePopupComponent,
    ThirdStockAndSalesUtilityDeleteDialogComponent,
    thirdRoute,
    thirdPopupRoute,
} from './';

const ENTITY_STATES = [
    ...thirdRoute,
    ...thirdPopupRoute,
];

@NgModule({
    imports: [
        Matv4SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        ThirdStockAndSalesUtilityComponent,
        ThirdStockAndSalesUtilityDetailComponent,
        ThirdStockAndSalesUtilityDialogComponent,
        ThirdStockAndSalesUtilityDeleteDialogComponent,
        ThirdStockAndSalesUtilityPopupComponent,
        ThirdStockAndSalesUtilityDeletePopupComponent,
    ],
    entryComponents: [
        ThirdStockAndSalesUtilityComponent,
        ThirdStockAndSalesUtilityDialogComponent,
        ThirdStockAndSalesUtilityPopupComponent,
        ThirdStockAndSalesUtilityDeleteDialogComponent,
        ThirdStockAndSalesUtilityDeletePopupComponent,
    ],
    providers: [
        ThirdStockAndSalesUtilityService,
        ThirdStockAndSalesUtilityPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Matv4ThirdStockAndSalesUtilityModule {}
