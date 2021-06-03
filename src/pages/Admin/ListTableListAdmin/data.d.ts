export type TableListItem = {
  key:number;
  id:number;
  avatar:string;
  username: string;
  password:string;
  access:string;
  token:string;
  time:TimeRanges;
};

export type TableListPagination = {
  total: number;
  pageSize: number;
  current: number;
};

export type TableListData = {
  list: TableListItem[];
  
};

export type TableListParams = {
  
  
  pageSize?: number;
  currentPage?: number;
  filter?: Record<string, any[]>;
  sorter?: Record<string, any>;
};
