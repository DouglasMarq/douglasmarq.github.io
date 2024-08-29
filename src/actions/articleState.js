import { SELECT_ARTICLE } from '../contants/actionTypes';

export function articleAction(data) {
  return (dispatch) => {
    dispatch({
      type: SELECT_ARTICLE,
      payload: data,
    });
  };
}
