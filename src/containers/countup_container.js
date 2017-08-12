import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import countUp from '../actions';
import CountupBlock from '../components/countup_block';

const mapStateToProps = (state) => {
  return {
    number: state.number
  };
};

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    countUp
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(CountupBlock);
