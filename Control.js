import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default class Control extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.props.onClear}>
            <Text style={styles.buttonTitle}>Clear Table</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.props.onAdd}>
            <Text style={styles.buttonTitle}>Add Row</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

Control.propTypes = {
    onClear: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        flex: 1,
        margin: 5,
        padding: 10,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#A5A5A5',
        alignItems: 'center',
    },
    buttonTitle: {
        color: '#A5A5A5',
    }
})