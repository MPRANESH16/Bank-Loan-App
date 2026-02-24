public with sharing class LoanApprovalController {

    @AuraEnabled
    public static void submitForApproval(Id loanId) {

        Approval.ProcessSubmitRequest req = new Approval.ProcessSubmitRequest();
        req.setObjectId(loanId);
        Approval.ProcessResult result = Approval.process(req);

    }
}