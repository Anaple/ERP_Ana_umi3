declare namespace API {
  export interface CurrentUser {
    avatar?: string;
    name?: string;
    title?: string;
    group?: string;
    signature?: string;
    userid?: string;
    access?: 'user' | 'guest' | 'admin' |'manager';
  }

  export interface LoginStateType {
    status?: 'ok' | 'error';
    type?: string;
    token:string;
    name:string;
    token_time?:int;
  }

  export interface NoticeIconData {
    id: string;
    key: string;
    avatar: string;
    title: string;
    datetime: string;
    type: string;
    read?: boolean;
    description: string;
    clickClose?: boolean;
    extra: any;
    status: string;
  }
}
