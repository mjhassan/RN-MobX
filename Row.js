import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

export default class Row extends Component {
  render() {
    const {name, salary} = this.props.data;

    return (
      <View style={styles.container}>
        <View style={styles.name}>
            <Text>{name}</Text>
        </View>

        <View style={styles.separator}/>
        
        <View style={styles.salary}>
            <Text>{salary}$</Text>
        </View>
      </View>
    )
  }
}

Row.propTypes = {
    data: PropTypes.object,
}

Row.defaultProps = {
    
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#A5A5A5',
    },
    name: {
        flex: 1,
        margin: 5,
        padding: 10,
        alignItems: 'flex-start',
    },
    salary: {
        flex: 1,
        margin: 5,
        padding: 10,
        alignItems: 'flex-end',
    },
    separator: {
        width: 2,
        height: '100%',
        backgroundColor: '#A5A5A5',
    }
})