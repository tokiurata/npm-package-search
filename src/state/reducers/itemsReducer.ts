interface ItemsState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface Action {
  type: string;
  payload?: any;
}

const reducer = (
  state: ItemsState, 
  action: Action
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
