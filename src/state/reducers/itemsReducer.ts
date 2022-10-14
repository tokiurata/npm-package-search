import { ActionType } from '../action-types';
import { Action } from '../actions';

interface ItemsState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState = {
  loading: false,
  error: null,
  data: []
};

const reducer = (
  state: ItemsState = initialState, 
  action: Action
): ItemsState => {
  switch (action.type) {
    case ActionType.SEARCH_ITEMS:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_ITEMS_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_ITEMS_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
