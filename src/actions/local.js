import * as types from './types';
export const emptyMessage = () => async (dispatch) => {
  dispatch({type: types.POST_MESSAGE, payload: null});
}
export const showModal = (toRender, data) => async (dispatch) => {
  dispatch({type: types.MODAL, payload: { component: toRender, data: data} })
}
