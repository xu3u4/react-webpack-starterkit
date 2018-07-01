// @flow
import type { countUpAction } from '../actions';

export type State = {
  number: number
}

const initState: State = {
  number: 0
};

type numberAction =
  | countUpAction;

export default function CountupReducer(
  state: State = initState,
  action: numberAction
): State {
  switch (action.type) {
    case 'COUNT_UP_NUMBER':
      return {
        number: state.number + 1
      };
    default:
      return state;
  }
}
