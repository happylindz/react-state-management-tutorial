import { observable, computed, action } from "mobx";

class CounterStore {
    @observable counters = {
        'First': 0,
        'Second': 10,
        'Third': 20,
    }
    @computed get totalValue() {
        let total = 0
        for(let key in this.counters) {
            if(this.counters.hasOwnProperty(key)) {
                total += this.counters[key]                
            }
        }
        return total
    }
    @action changeCounter = (caption, type) => {

        if(type === 'increment') {
            this.counters[caption]++            
        }else {
            this.counters[caption]--
        }
    }
}
const counterStore = new CounterStore()

export default counterStore
export { counterStore }
