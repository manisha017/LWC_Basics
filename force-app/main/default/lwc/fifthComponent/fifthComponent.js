import { LightningElement } from 'lwc';

export default class FifthComponent extends LightningElement {
    _isAdmin = false;
    
    get isAdmin() {
        return this._isAdmin;//returning a computed or derived value based on other properties
    }

    set isAdmin(value) {
        this._isAdmin = value;
    }

    setAdminTrue(){
       //run setter method
        this.isAdmin = true;    
    }

    setAdminFalse(){
        //run setter method
        this.isAdmin = false;
    }

}