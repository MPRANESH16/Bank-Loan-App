import { LightningElement, track } from 'lwc';
import submitApproval from '@salesforce/apex/LoanApprovalController.submitForApproval';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LoanApplicationForm extends LightningElement {

    @track recordId;

    handleLoanCreated(event) {
        this.recordId = event.detail.id;

        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Loan Application Created Successfully!',
                variant: 'success'
            })
        );
    }

    submitForApproval() {
        submitApproval({ loanId: this.recordId })
            .then(() => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Submitted',
                        message: 'Loan Submitted for Approval!',
                        variant: 'success'
                    })
                );
            })
            .catch(error => {
                console.error(error);
            });
    }
}