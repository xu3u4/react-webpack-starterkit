export default function CountupReducer(state = {
  number: 0
}, action) {
  switch (action.type) {
    case 'COUNT_UP_NUMBER':
      return {
        number: state.number + 1
      };
    default:
      return state;
  }
}
