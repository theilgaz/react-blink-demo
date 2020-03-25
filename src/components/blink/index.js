import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'

class Blink extends Component {

  constructor(props){
      super(props);
      this.state = { isShowingText : true };
      
      setInterval(() => (
            this.setState(x => (
                { isShowingText: !x.isShowingText }
                ))
      ),1000);

  }
  render() {
    if (!this.state.isShowingText) {
      return null;
    }
    return (
      <Text style={styles.text}>{this.props.text}</Text>
    );
  }
}

const styles = StyleSheet.create({
    text: {
      color:"#c00",
      textAlign:"center",
      marginTop:50
    },
  });

export default Blink;
