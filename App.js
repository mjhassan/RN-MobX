import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { observer } from 'mobx-react';

import Control from './Control';
import Row from './Row';

class App extends Component {

  clearTable = () => {
    this.props.store.clearEmployee()
  }

  addRow = () => {
    // const name = prompt('Employee Name:')
    // const salary = parseInt(prompt('Salary: '), 10)
    this.props.store.pushEmployee({name: 'Jane', salary: 200});

    console.log("employee: ", this.props.store.numberOfEmployees)
    console.log("total: ", this.props.store.totalSum)
  }

  render() {
    const {store} = this.props;

    return (
      <View style={styles.container}>
        <Control onClear={this.clearTable} onAdd= {this.addRow}/>
        {store.employeeList.map((element, index) => {
          return <Row key={index} data={element}/>
        })}
      </View>
    )
  }
}

export default observer(App)

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
  },
})