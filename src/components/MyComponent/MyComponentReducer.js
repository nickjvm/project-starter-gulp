import * as Constants from './MyComponentConstants';

const initialState = {
    name: 'world',
};


export default function MyComponentReducer(state = initialState, action) {
  switch (action.type) {
    case Constants.SET_NAME: {
        return Object.assign({}, state, {
                name: action.value ? action.value : state.name,
            });
        }
    default: {
      return state;
    }
  }
}
