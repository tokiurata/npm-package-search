interface ItemsState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface SearchItemsAction {
  type: ActionType.SEARCH_ITEMS;
}

interface SearchItemsSuccessAction {
  type: ActionType.SEARCH_ITEMS_SUCCESS;
  payload: string[];
}

interface SearchItemsErrorAction {
  type: ActionType.SEARCH_ITEMS_ERROR;
  payload: string;
}

type Action =
  | SearchItemsAction 
  | SearchItemsSuccessAction 
  | SearchItemsErrorAction;

enum ActionType {
  SEARCH_ITEMS = 'search_items',
  SEARCH_ITEMS_SUCCESS = 'search_items_success',
  SEARCH_ITEMS_ERROR = 'search_items_error'
}

const reducer = (
  state: ItemsState, 
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
