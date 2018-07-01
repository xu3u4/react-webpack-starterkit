// @flow
export type countUpAction = {
  type: string
};

export default function countUp(): countUpAction {
  return {
    type: 'COUNT_UP_NUMBER'
  };
}
