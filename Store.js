import { decorate, observable, action, computed } from 'mobx';

class Store {
    employeeList = [
        {name: 'John Doe', salary: 150},
        {name: 'Richard Roe', salary: 225},
    ]

    clearEmployee() {
        this.employeeList = []
    }

    pushEmployee(item) {
        this.employeeList.push(item)
    }

    get numberOfEmployees() {
        return this.employeeList.length
    }

    get totalSum() {
        let sum = 0
        this.employeeList.map(e => sum += e.salary)

        return sum
    }
}

decorate(Store, {
    employeeList: observable,
    clearEmployee: action,
    pushEmployee: action,
    numberOfEmployees: computed,
    totalSum: computed,
})

export default new Store()