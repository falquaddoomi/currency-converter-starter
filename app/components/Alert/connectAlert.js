/* eslint-disable react/prefer-stateless-function */
import PropTypes from 'prop-types';

import React, { Component } from 'react';
import hoistNonReactStatic from 'hoist-non-react-statics';

import {AlertContext} from './AlertProvider';

const connectAlert = (WrappedComponent) => {
  class ConnectedAlert extends Component {
    render() {
      return (
        <AlertContext.Consumer>
        {
          (context) => <WrappedComponent
            {...this.props}
            alertWithType={context.alertWithType}
            alert={context.alert}
          />
        }
        </AlertContext.Consumer>
      );
    }
  }

  return hoistNonReactStatic(ConnectedAlert, WrappedComponent);
};

export default connectAlert;
