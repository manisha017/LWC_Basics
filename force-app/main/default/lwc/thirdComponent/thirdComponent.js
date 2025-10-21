import { LightningElement } from 'lwc';

export default class ThirdComponent extends LightningElement {
    isVisible = false;

    handler() {
        this.isVisible = !this.isVisible;
    console.log('Button clicked');
    }
}