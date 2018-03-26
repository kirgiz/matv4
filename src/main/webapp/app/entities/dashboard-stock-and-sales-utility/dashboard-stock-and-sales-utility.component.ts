import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { DashboardStockAndSalesUtility } from './dashboard-stock-and-sales-utility.model';
import { DashboardStockAndSalesUtilityService } from './dashboard-stock-and-sales-utility.service';
import { Principal } from '../../shared';
import { MaterialhistoryStockAndSalesUtility } from '../materialhistory-stock-and-sales-utility';
import { ThirdStockAndSalesUtilityService, ThirdStockAndSalesUtility } from '../third-stock-and-sales-utility';

@Component({
    selector: 'jhi-dashboard-stock-and-sales-utility',
    templateUrl: './dashboard-stock-and-sales-utility.component.html'
})
export class DashboardStockAndSalesUtilityComponent implements OnInit, OnDestroy {
    summary: Map<any, any>;
    transfers: MaterialhistoryStockAndSalesUtility[];
    dashboards: DashboardStockAndSalesUtility[];
    thirds: ThirdStockAndSalesUtility[];
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
let lolo: Map<String , DashboardStockAndSalesUtility> = new Map<String , DashboardStockAndSalesUtility>();
                this.dashboards=new Array<DashboardStockAndSalesUtility>();               
                for (let entry of this.transfers) {
                                   let dte: Date =new Date(entry.creationDate);
                                   let num=parseInt((String)(dte.getFullYear().toString()).concat((String)(dte.getMonth().toString())));
                                  let  key = (String)(num.toString()).concat((String)(entry.warehousefromId.toString()));
                              let third =new ThirdStockAndSalesUtility();
                               third = this.getthird(entry.warehousefromId);
                                  if (lolo.has(key)) {
                                      let currentval: DashboardStockAndSalesUtility = lolo.get(key);
                                      currentval.numberOfItems = currentval.numberOfItems + 1;
                                      currentval.warehouseOutgId=third.id;
                                      currentval.warehouseOutgName=third.name;
                                      currentval.profitAndLoss=entry.price+currentval.profitAndLoss;
                                  
                                   lolo.set(key, currentval);
                } else {
                    let currentval: DashboardStockAndSalesUtility = new DashboardStockAndSalesUtility(num,entry.creationDate,entry.price,1,third.name,
                        third.id);
                    lolo.set(key, currentval);
                }
                }

                for (var valeur of Array.from(lolo.values())) {
                    valeur.profitAndLoss=valeur.profitAndLoss/valeur.numberOfItems;
                    this.dashboards.push(valeur);
                  }
                this.currentSearch = '';
            },
            (res: HttpErrorResponse) => this.onError(res.message)
        );
    }

    getThirds() {
        this.thirds=new Array<ThirdStockAndSalesUtility>();
    this.dashboardService.queryThird().subscribe(
        (res: HttpResponse<ThirdStockAndSalesUtility[]>) => {
            this.thirds = res.body;  
        },
        (res: HttpErrorResponse) => this.onError(res.message)
    );
};

getthird(id:number): ThirdStockAndSalesUtility {
let third : ThirdStockAndSalesUtility=new ThirdStockAndSalesUtility();
for (let mythird of this.thirds) {
    if (mythird.id==id){
        third=mythird;
      
        return third;
    }
}return third;
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
        this.getThirds();
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
