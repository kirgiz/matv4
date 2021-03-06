import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SERVER_API_URL } from '../../app.constants';

import { JhiDateUtils } from 'ng-jhipster';

import { MaterialhistoryStockAndSalesUtility } from './materialhistory-stock-and-sales-utility.model';
import { createRequestOption } from '../../shared';

export type EntityResponseType = HttpResponse<MaterialhistoryStockAndSalesUtility>;

@Injectable()
export class MaterialhistoryStockAndSalesUtilityService {

    private resourceUrl =  SERVER_API_URL + 'api/materialhistories';
    private resourceSearchUrl = SERVER_API_URL + 'api/_search/materialhistories';

    constructor(private http: HttpClient, private dateUtils: JhiDateUtils) { }

    create(materialhistory: MaterialhistoryStockAndSalesUtility):
        Observable<EntityResponseType> {
        const copy = this.convert(materialhistory);
        return this.http.post<MaterialhistoryStockAndSalesUtility>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    update(materialhistory: MaterialhistoryStockAndSalesUtility):
        Observable<EntityResponseType> {
        const copy = this.convert(materialhistory);
        return this.http.put<MaterialhistoryStockAndSalesUtility>(this.resourceUrl, copy, { observe: 'response' })
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<MaterialhistoryStockAndSalesUtility>(`${this.resourceUrl}/${id}`, { observe: 'response'})
            .map((res: EntityResponseType) => this.convertResponse(res));
    }

    query(req?: any): Observable<HttpResponse<MaterialhistoryStockAndSalesUtility[]>> {
        const options = createRequestOption(req);
        return this.http.get<MaterialhistoryStockAndSalesUtility[]>(this.resourceUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<MaterialhistoryStockAndSalesUtility[]>) => this.convertArrayResponse(res));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
    }

    search(req?: any): Observable<HttpResponse<MaterialhistoryStockAndSalesUtility[]>> {
        const options = createRequestOption(req);
        return this.http.get<MaterialhistoryStockAndSalesUtility[]>(this.resourceSearchUrl, { params: options, observe: 'response' })
            .map((res: HttpResponse<MaterialhistoryStockAndSalesUtility[]>) => this.convertArrayResponse(res));
    }

    private convertResponse(res: EntityResponseType): EntityResponseType {
        const body: MaterialhistoryStockAndSalesUtility = this.convertItemFromServer(res.body);
        return res.clone({body});
    }

    private convertArrayResponse(res: HttpResponse<MaterialhistoryStockAndSalesUtility[]>): HttpResponse<MaterialhistoryStockAndSalesUtility[]> {
        const jsonResponse: MaterialhistoryStockAndSalesUtility[] = res.body;
        const body: MaterialhistoryStockAndSalesUtility[] = [];
        for (let i = 0; i < jsonResponse.length; i++) {
            body.push(this.convertItemFromServer(jsonResponse[i]));
        }
        return res.clone({body});
    }

    /**
     * Convert a returned JSON object to MaterialhistoryStockAndSalesUtility.
     */
    private convertItemFromServer(materialhistory: MaterialhistoryStockAndSalesUtility): MaterialhistoryStockAndSalesUtility {
        const copy: MaterialhistoryStockAndSalesUtility = Object.assign({}, materialhistory);
        copy.creationDate = this.dateUtils
            .convertLocalDateFromServer(materialhistory.creationDate);
        return copy;
    }

    /**
     * Convert a MaterialhistoryStockAndSalesUtility to a JSON which can be sent to the server.
     */
    private convert(materialhistory: MaterialhistoryStockAndSalesUtility): MaterialhistoryStockAndSalesUtility {
        const copy: MaterialhistoryStockAndSalesUtility = Object.assign({}, materialhistory);
        copy.creationDate = this.dateUtils
            .convertLocalDateToServer(materialhistory.creationDate);
        return copy;
    }
}
