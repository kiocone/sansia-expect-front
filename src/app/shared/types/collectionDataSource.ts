import { DataSource } from "@angular/cdk/collections";
import { Observable } from "rxjs";

export interface TableDataSource extends DataSource<any> {
  loading$: Observable<boolean>;
  totalSize$: Observable<number>;
  load(): void;
};