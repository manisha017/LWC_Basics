import { LightningElement } from 'lwc';

export default class FourthComponent extends LightningElement {

    role = 'admin'

    get isAdmin() {
        return this.role === 'admin';
    }
        
    get isUser() {
        return this.role === 'user';
    }

    get isGuest() {
        return this.role === 'guest';
    }

    get isManager() {
        return this.role === 'manager';
    }
     
}