import { Injectable } from "@angular/core";
import { Dummy } from "../components/dummy/types/dummy.interface";
import { PaginatedResponse } from "../types/pagination";

@Injectable({
  providedIn: 'root'
})
export class DummyService {
  getDummyData(): Promise<PaginatedResponse<Dummy>> {
    return new Promise<PaginatedResponse<Dummy>>((resolve) => {
      setTimeout(() => {
        resolve( {
          data: [
            { id: 1, name: 'John Doe', lastName: 'Smith' },
            { id: 2, name: 'Jane Doe', lastName: 'Johnson' },
            { id: 3, name: 'John Doe', lastName: 'Doe' },
            { id: 4, name: 'Jane Doe', lastName: 'Doe' },
            { id: 5, name: 'John Doe', lastName: 'Doe' }
          ],
          pagination: {
            pageIndex: 1,
            pageSize: 1,
            totalSize: 5
          }
        });
      }, 1000);
    });
  }
}
