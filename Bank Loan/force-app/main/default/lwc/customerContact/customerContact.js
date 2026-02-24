import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CustomerContactForm extends LightningElement {

    handleSuccess() {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Customer Contact Created Successfully!',
                variant: 'success'
            })
        );
    }
}