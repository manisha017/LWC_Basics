import { LightningElement } from 'lwc';

export default class SecondComponent extends LightningElement {
    name;

    handleChange(event) {
        this.name = event.target.value;
        console.log('name printed on change:'+ event.target.value);
    }

}