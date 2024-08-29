import { MENU_CONTROLLER } from '../contants/actionTypes';

export function menuAction(data) {
  return (dispatch) => {
    dispatch({
      type: MENU_CONTROLLER,
      payload: data,
    });
  };
}
