import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class BankAccountForm extends LightningElement {

    handleSuccess() {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Bank Account Created Successfully!',
                variant: 'success'
            })
        );
    }
}