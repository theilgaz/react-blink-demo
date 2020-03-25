import React, { PureComponent } from 'react'
import { View } from 'react-native'
import Blink from './src/components/blink/'

export default class App extends PureComponent {
  render() { 
    return (
      <View>
        <Blink text="Press any key to continue"/>
      </View>
    )
  }
}
