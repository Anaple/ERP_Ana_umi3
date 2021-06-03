import { queryActivities, queryCurrent, queryProjectNotice } from './service';
import {queryStatus} from'../Admin/ServerStatusAdmin/service'

const Model = {
  namespace: 'dashboardWorkplaceTwo',
  state: {

    currentUser: undefined,

  },
  effects: {
    *init(_, { put }) {
      yield put({
        type: 'fetchUserCurrent',
      });
  
    
    },

    *fetchUserCurrent(_, { call, put }) {
      const response = yield call(queryCurrent);
      yield put({
        type: 'save',
        payload: {
          currentUser: response,
        },
      });
    },

    *fetchProjectNotice(_, { call, put }) {
      const response = yield call(queryProjectNotice);
      yield put({
        type: 'save',
        payload: {
          projectNotice: Array.isArray(response) ? response : [],
        },
      });
    },

    *fetchActivitiesList(_, { call, put }) {
      const response = yield call(queryActivities);
      yield put({
        type: 'save',
        payload: {
          activities: Array.isArray(response) ? response : [],
        },
      });
    },


  },
  *fetchGetStatus(_, { call, put }) {
    const response = yield call(queryStatus);
    yield put({
        type: 'save',
        payload: {
          servers: response.servers
        },
    });
    
},
  
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },

    clear() {
      return {
        currentUser: undefined,
        projectNotice: [],
        activities: [],
        servers:[],
       
   
      };
    },
  },
};
export default Model;
