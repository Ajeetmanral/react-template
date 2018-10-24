import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cx from 'classnames';
import * as actions from 'actions/app';

import './index.scss';

class HelloWorld extends React.Component {
  togglePing = () => {
    if (this.props.isPinging) {
      this.props.pongIt();
    } else {
      this.props.pingIt();
    }
  }

  render() {
    const { isPinging } = this.props;
    return (
      <div>
        <h2>Hello World</h2>
        <h3>We are integrating react</h3>
        <button onClick={this.togglePing}>
          {
            isPinging ? 'PONG IT' : 'PING IT'
          }
        </button>
        <h4 className={cx({ pinged: isPinging, ponged: !isPinging })}>
          Its {
            isPinging ? 'PING PING !!!' : 'PONG PONG !!!'
          }
        </h4>
      </div>
    );
  }
}

HelloWorld.propTypes = {
  isPinging: PropTypes.bool.isRequired,

  // actions
  pongIt: PropTypes.func.isRequired,
  pingIt: PropTypes.func.isRequired,
};

HelloWorld.defaultProps = {
  isPinging: false,

  // actions
  pongIt: () => {},
  pingIt: () => {},
};

const mapStateToProps = state => ({
  isPinging: state.App.isPinging,
});

export default connect(mapStateToProps, actions)(HelloWorld);
