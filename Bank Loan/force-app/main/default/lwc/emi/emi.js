import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class EmiForm extends LightningElement {

    handleSuccess() {
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'EMI Recorded Successfully!',
                variant: 'success'
            })
        );
    }
}