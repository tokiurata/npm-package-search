import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const searchItems = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_ITEMS
    });
    try {
      const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
        params: {
          text: term
        }
      });
      const items = data.objects.map((item: any) => {
        return item.package.name;
      });
      dispatch({
        type: ActionType.SEARCH_ITEMS_SUCCESS,
        payload: items
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.SEARCH_ITEMS_ERROR,
          payload: err.message
        });
      }
    }
  };
};
