interface ItemsState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface SearchItemsAction {
  type: 'search_items';
}

interface SearchItemsSuccessAction {
  type: 'search_items_success';
  payload: string[];
}

interface SearchItemsErrorAction {
  type: 'search_items_error';
  payload: string;
}

const reducer = (
  state: ItemsState, 
  action: 
    | SearchItemsAction 
    | SearchItemsSuccessAction 
    | SearchItemsErrorAction
): ItemsState => {
  switch (action.type) {
    case 'search_items':
      return { loading: true, error: null, data: [] };
    case 'search_items_success':
      return { loading: false, error: null, data: action.payload };
    case 'search_items_error':
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
