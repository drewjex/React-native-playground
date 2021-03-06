import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { ReactModoroNavigator } from '~/containers'
import { PreSplash } from '~/components'

export default class AppContainer extends Component {
  static propTypes = {
    isAuthenticating: PropTypes.bool.isRequired
  }
  static defaultProps = {
    isAuthenticating: true
  }
  render () {
    return (
      <View style={{flex: 1}}>
        {this.props.isAuthenticating === true
            ? <PreSplash />
            : <ReactModoroNavigator />}
      </View>
    )
  }
}
