import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { DashboardStockAndSalesUtility } from './dashboard-stock-and-sales-utility.model';
import { DashboardStockAndSalesUtilityService } from './dashboard-stock-and-sales-utility.service';
import { Principal } from '../../shared';
import { MaterialhistoryStockAndSalesUtility } from 'src/main/webapp/app/entities/materialhistory-stock-and-sales-utility';

@Component({
    selector: 'jhi-dashboard-stock-and-sales-utility',
    templateUrl: './dashboard-stock-and-sales-utility.component.html'
})
export class DashboardStockAndSalesUtilityComponent implements OnInit, OnDestroy {
    summary: Map<any, any>;
    transfers: MaterialhistoryStockAndSalesUtility[];
    dashboards: DashboardStockAndSalesUtility[];
    currentAccount: any;
    eventSubscriber: Subscription;
    currentSearch: string;

    constructor(
        private dashboardService: DashboardStockAndSalesUtilityService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private activatedRoute: ActivatedRoute,
        private principal: Principal
    ) {
        this.currentSearch = this.activatedRoute.snapshot && this.activatedRoute.snapshot.params['search'] ?
            this.activatedRoute.snapshot.params['search'] : '';
    }

  /*  loadAll() {
        if (this.currentSearch) {
            this.dashboardService.search({
                query: this.currentSearch,
                }).subscribe(
                    (res: HttpResponse<DashboardStockAndSalesUtility[]>) => this.dashboards = res.body,
                    (res: HttpErrorResponse) => this.onError(res.message)
                );
            return;
       }
        this.dashboardService.query().subscribe(
            (res: HttpResponse<DashboardStockAndSalesUtility[]>) => {
                this.dashboards = res.body;
                this.currentSearch = '';
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }*/

    loadAll() {
        if (this.currentSearch) {
            this.dashboardService.search({
                query: this.currentSearch,
                }).subscribe(
                    (res: HttpResponse<DashboardStockAndSalesUtility[]>) => this.dashboards = res.body,
                    (res: HttpErrorResponse) => this.onError(res.message)
                );
            return;
       }
        this.dashboardService.queryMaterialHistory().subscribe(
            (res: HttpResponse<MaterialhistoryStockAndSalesUtility[]>) => {
                this.transfers = res.body;
this.summary=new Map();
                this.dashboards=new Array<DashboardStockAndSalesUtility>();
                for (let entry of this.transfers) {
                                   let dte: Date =new Date(entry.creationDate);  
                                   let year =  dte.getFullYear.toString;
                                   console.log(dte);   
                                   console.log(year);        
                                   let num=parseInt((String)(dte.getFullYear().toString()).concat((String)(dte.getMonth().toString())));
                                   console.log((String)(dte.getFullYear().toString()));
                    this.dashboards.push(new DashboardStockAndSalesUtility(num,entry.creationDate,12,1,'fdsfdsf',12));
                }     
                this.currentSearch = '';
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }


    search(query) {
        if (!query) {
            return this.clear();
        }
        this.currentSearch = query;
        this.loadAll();
    }

    clear() {
        this.currentSearch = '';
        this.loadAll();
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInDashboards();
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    trackId(index: number, item: DashboardStockAndSalesUtility) {
        return item.id;
    }
    registerChangeInDashboards() {
        this.eventSubscriber = this.eventManager.subscribe('dashboardListModification', (response) => this.loadAll());
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
