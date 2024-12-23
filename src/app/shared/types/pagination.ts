export interface PaginatedResponse<D> {
  pagination: PaginationMetadata;
  data: D[];
};

export interface PaginationMetadata {
  pageIndex: number;
  pageSize: number;
  totalSize: number;
};