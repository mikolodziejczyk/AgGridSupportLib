import { Component, OnInit } from '@angular/core';
import { IFilterParams, RowNode, IDoesFilterPassParams } from 'ag-grid-community';

@Component({
    selector: 'lib-agg-support-boolean-grid-filter',
    templateUrl: './boolean-grid-filter.component.html',
    styleUrls: ['./boolean-grid-filter.component.scss']
})
export class BooleanGridFilterComponent implements OnInit {

    constructor () { }


    private params: IFilterParams;
    private valueGetter: (rowNode: RowNode) => any;
    // tslint:disable-next-line:ban-types
    private hidePopup: Function = null;
    // raw value from checkboxes
    public rawValue: string = '';
    // cooked value from checkboxes
    public value: boolean;
    public hasValue: boolean;

    ngOnInit() {
    }


    agInit(params: IFilterParams): void {
        this.params = params;
        this.valueGetter = params.valueGetter;
    }

    isFilterActive(): boolean {
        return this.hasValue;
    }

    doesFilterPass(params: IDoesFilterPassParams): boolean {
        return (this.valueGetter(params.node) as boolean) === this.value;
    }

    getModel(): any {
        let r: any = null;

        if (this.hasValue) {
            r = {
                filterType: 'boolean',
                type: 'equals',
                filter: this.value,
            };
        }

        return r;
    }

    setModel(model: any): void {
        if (model) {
            this.value = model.filter;
            this.hasValue = true;
            this.rawValue = model.filter.toString();
        } else {
            // when model is null/undefined we should clear the filter
            this.hasValue = false;
            this.rawValue = '';
        }
    }

    onChange(newValue): void {
        if (newValue) {
            this.value = (newValue === 'true');
            this.hasValue = true;
        } else {
            this.hasValue = false;
        }

        this.params.filterChangedCallback();
        if (this.hidePopup) {
            this.hidePopup();
        }
    }

    // tslint:disable-next-line:ban-types
    afterGuiAttached(params?: { hidePopup?: Function }): void {
        if (params) {
            this.hidePopup = params.hidePopup;
        }
    }

}
