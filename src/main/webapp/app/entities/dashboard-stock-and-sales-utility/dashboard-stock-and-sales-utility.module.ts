import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Matv4SharedModule } from '../../shared';
import {
    DashboardStockAndSalesUtilityService,
    DashboardStockAndSalesUtilityPopupService,
    DashboardStockAndSalesUtilityComponent,
    DashboardStockAndSalesUtilityDetailComponent,
    DashboardStockAndSalesUtilityDialogComponent,
    DashboardStockAndSalesUtilityPopupComponent,
    DashboardStockAndSalesUtilityDeletePopupComponent,
    DashboardStockAndSalesUtilityDeleteDialogComponent,
    dashboardRoute,
    dashboardPopupRoute,
} from './';

const ENTITY_STATES = [
    ...dashboardRoute,
    ...dashboardPopupRoute,
];

@NgModule({
    imports: [
        Matv4SharedModule,
        RouterModule.forChild(ENTITY_STATES)
    ],
    declarations: [
        DashboardStockAndSalesUtilityComponent,
        DashboardStockAndSalesUtilityDetailComponent,
        DashboardStockAndSalesUtilityDialogComponent,
        DashboardStockAndSalesUtilityDeleteDialogComponent,
        DashboardStockAndSalesUtilityPopupComponent,
        DashboardStockAndSalesUtilityDeletePopupComponent,
    ],
    entryComponents: [
        DashboardStockAndSalesUtilityComponent,
        DashboardStockAndSalesUtilityDialogComponent,
        DashboardStockAndSalesUtilityPopupComponent,
        DashboardStockAndSalesUtilityDeleteDialogComponent,
        DashboardStockAndSalesUtilityDeletePopupComponent,
    ],
    providers: [
        DashboardStockAndSalesUtilityService,
        DashboardStockAndSalesUtilityPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Matv4DashboardStockAndSalesUtilityModule {}
