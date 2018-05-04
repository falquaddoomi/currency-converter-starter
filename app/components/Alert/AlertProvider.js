import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';

import {AlertContext} from './index.js';

class AlertProvider extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AlertContext.Provider value={
          alert: (...args) => this.dropdown.alert(...args),
          alertWithType: (...args) => this.dropdown.alertWithType(...args),
        }>
          {React.Children.only(this.props.children)}
        </AlertContext.Provider>
    
        <DropdownAlert
          ref={(ref) => {
            this.dropdown = ref;
          }}
        />
      </View>
    );
  }
}

export default AlertProvider;
