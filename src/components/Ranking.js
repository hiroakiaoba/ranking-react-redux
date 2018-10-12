import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Ranking extends Component {

  componentWillMount() {
    this.props.onMount(this.props.categoryId)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.categoryId !== nextProps.categoryId) {
      this.props.onUpdate(nextProps.categoryId);
    }
  }

  render() {
    return (
      <div>
        <h2>Rankingコンポーネント</h2>
        <p>categoryId: { this.props.categoryId }</p>
      </div>
    )
  }
}

Ranking.propTypes = {
  categoryId: PropTypes.string,
  onMount: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired
};

Ranking.defaultProps = {
  // categoryId=1は総合ランキング
  categoryId: '1'
}

export default Ranking;