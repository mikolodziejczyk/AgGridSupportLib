import { Injectable } from '@angular/core';
import { IGridState } from 'AgGridUtilities/lib/gridState/iGridState';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GridStateStorageService {
  constructor (private http: HttpClient) { }

  static saveUrl: string = '/data/listsettings/savelistsettings';
  static loadUrl: string = '/data/listsettings/getlistsettings';

  /**
   * Saves the grid state to the server. Returns a promise that resolves when completed, without any data.
   * @param gridId The string that identifies the view, e.g. like 'connections/index'
   * @param gridState The grid settings
   */
  async save(gridId: string, gridState: IGridState) {
    const gridStateAsString = JSON.stringify(gridState);

    const dataObject = {
      viewId: gridId,
      settings: gridStateAsString
    };

    return this.http.post(GridStateStorageService.saveUrl, dataObject).toPromise();
  }

  /**
   * Loads the grid state from the server. Returns a promise that resolves to IGridState
   * or null (when there has been no entry on the server).
   * @param gridId The string that identifies the view
   */
  async load(gridId: string): Promise<IGridState> {
    const dataObject = {
      viewId: gridId
    };

    const valueAsString = await this.http.post<string>(GridStateStorageService.loadUrl, dataObject).toPromise();

    let value: IGridState = null;

    if (valueAsString) {
      value = JSON.parse(valueAsString);
    }

    return Promise.resolve(value);
  }
}
