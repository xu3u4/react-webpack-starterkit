// @flow
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import countUp from 'actions';
import CountupBlock from 'components/countup_block';
import type { State } from 'reducers';

type DispatchFunc = (action: Object) => void;

const mapStateToProps = (state: State): State => {
  return {
    number: state.number
  };
};

const mapDispatchToProps = (dispatch: DispatchFunc) => (
  bindActionCreators({
    countUp
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CountupBlock);
