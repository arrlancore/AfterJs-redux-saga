import Immutable from 'seamless-immutable';
import actionTypes from 'actions/Article';

export const INITIAL_STATE = Immutable({
  loading: false,
  listArticle: null,
});

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.LOAD_ARTICLE:
      return state.merge({
        loading: true,
      });
    case actionTypes.LOAD_ARTICLE_SUCCESS:
      return state.merge({
        loading: false,
        listArticle: action.data,
      });

    default:
      return state;
  }
}

export default reducer;