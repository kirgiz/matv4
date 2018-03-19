import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { DashboardStockAndSalesUtility } from './dashboard-stock-and-sales-utility.model';
import { DashboardStockAndSalesUtilityPopupService } from './dashboard-stock-and-sales-utility-popup.service';
import { DashboardStockAndSalesUtilityService } from './dashboard-stock-and-sales-utility.service';

@Component({
    selector: 'jhi-dashboard-stock-and-sales-utility-dialog',
    templateUrl: './dashboard-stock-and-sales-utility-dialog.component.html'
})
export class DashboardStockAndSalesUtilityDialogComponent implements OnInit {

    dashboard: DashboardStockAndSalesUtility;
    isSaving: boolean;
    transferDateDp: any;

    constructor(
        public activeModal: NgbActiveModal,
        private dashboardService: DashboardStockAndSalesUtilityService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.dashboard.id !== undefined) {
            this.subscribeToSaveResponse(
                this.dashboardService.update(this.dashboard));
        } else {
            this.subscribeToSaveResponse(
                this.dashboardService.create(this.dashboard));
        }
    }

    private subscribeToSaveResponse(result: Observable<HttpResponse<DashboardStockAndSalesUtility>>) {
        result.subscribe((res: HttpResponse<DashboardStockAndSalesUtility>) =>
            this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
    }

    private onSaveSuccess(result: DashboardStockAndSalesUtility) {
        this.eventManager.broadcast({ name: 'dashboardListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError() {
        this.isSaving = false;
    }
}

@Component({
    selector: 'jhi-dashboard-stock-and-sales-utility-popup',
    template: ''
})
export class DashboardStockAndSalesUtilityPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private dashboardPopupService: DashboardStockAndSalesUtilityPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.dashboardPopupService
                    .open(DashboardStockAndSalesUtilityDialogComponent as Component, params['id']);
            } else {
                this.dashboardPopupService
                    .open(DashboardStockAndSalesUtilityDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
