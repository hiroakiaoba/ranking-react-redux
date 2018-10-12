import { connect } from 'react-redux';
import Ranking from '../components/Ranking';
import * as actions from '../actions/Ranking';

const mapStateToProps = (state, ownProps) => {
  return {
    categoryId: ownProps.cateogryId
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onMount(categoryId) {
      dispatch(actions.fetchRanking(categoryId))
    },
    onUpdate(categoryId) {
      dispatch(actions.fetchRanking(categoryId))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);