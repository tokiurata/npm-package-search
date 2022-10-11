import { ActionType } from '../action-types';

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

export type Action =
  | SearchItemsAction 
  | SearchItemsSuccessAction 
  | SearchItemsErrorAction;
