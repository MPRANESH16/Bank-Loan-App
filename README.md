# 💰 Loan Management Application (Salesforce LWC Project)

## 📌 Project Overview

The Loan Management Application is a Salesforce-based system built using 
Lightning Web Components (LWC), Apex, SOQL, and Custom Objects.

This application allows customers to:
- Register and manage their profile
- Apply for different types of loans
- Track loan status
- Manage EMIs
- View payment history
- Monitor bank account details

The system follows Salesforce best practices including 
Master-Detail Relationships, Roll-Up Summary Fields, and Formula Fields.

---

# 🏗️ Data Model Architecture

## 1️⃣ Customer Contact (Parent Object)

Stores customer details.

### Fields:
- Customer Contact Number (Auto Number)
- Name (Text)
- Email (Unique)
- Phone Number
- Address
- Age
- Owner

---

## 2️⃣ Bank Account (Child of Customer Contact)

Relationship:
Customer Contact → Master-Detail → Bank Account

### Fields:
- Bank Account Number (Auto Number)
- Branch
- IFSC Code (Auto Number)
- Deposit (Currency)
- Completed Loan (Number)
- Pending Loan (Number)
- Balance (Formula)
- Customer Contact (Master-Detail)

---

## 3️⃣ Loan Application (Main Loan Object)

Stores loan application details.

### Fields:
- Loan Application Number (Auto Number)
- Amount (Currency)
- Interest Rate (Percent)
- Time Duration (Number)
- Due Date (Date)
- Loan Type (Picklist)
- Loan Status (Picklist)
- Monthly Due (Formula Currency)
- Pending Fee (Formula Currency)
- Total Paid (Roll-Up Summary - SUM of EMI)
- Bank Account (Lookup)
- Customer Contact (Lookup)

---

## 4️⃣ EMI (Child of Loan Application)

Relationship:
Loan Application → Master-Detail → EMI

### Fields:
- EMI Number (Auto Number)
- Due Amount (Currency)
- Monthly Due (Formula)
- Number of Installment Paid (Number)
- Remaining Installment (Number)
- Payment Status (Picklist)
- Pending Fee (Formula)
- Total Paid (Formula)
- Loan Application (Master-Detail)

---

# 🔄 Relationship Flow

Customer Contact
    ↓ (Master-Detail)
Bank Account
    ↓ (Lookup)
Loan Application
    ↓ (Master-Detail)
EMI

---

# 🚀 Application Features

## 👤 Customer Management
- Create new customer
- Unique email validation
- Manage contact details

## 🏦 Bank Account Management
- Deposit tracking
- Completed & Pending Loan tracking
- Dynamic balance calculation using Formula field

## 📝 Loan Application
- Apply for different loan types
- Automatic Loan Number generation
- EMI calculation using formula
- Status tracking (Pending, Approved, Rejected)

## 💳 EMI Management
- Track installment payments
- Calculate remaining installment
- Auto-update Total Paid using Roll-Up Summary
- Payment status monitoring

## 🔁 LWC Parent–Child Communication

- Each loan displayed as a card (Child Component)
- On clicking "View":
  - Child sends Loan ID using Custom Event
  - Parent receives selected Loan ID
  - Displays detailed Loan & EMI information

---

# 🖥️ Tech Stack

- Salesforce Platform
- Lightning Web Components (LWC)
- Apex Classes
- SOQL
- Custom Events
- Master-Detail & Lookup Relationships
- Roll-Up Summary Fields
- Formula Fields
- Lightning Record Forms
- Salesforce CLI (SFDX)


---

# 📂 Project Structure
force-app/
└── main/
└── default/
├── lwc/
│ ├── loanManagementApp
│ ├── loanCard
│ ├── loanDetails
│ ├── loginComponent
│ └── registerComponent
│
├── classes/
│ ├── LoanController.cls
│ └── AuthController.cls
│
├── objects/
│ ├── Customer_Contact__c
│ ├── Bank_Account__c
│ ├── Loan_Application__c
│ └── EMI__c

🧠 Business Logic Highlights

Monthly EMI calculated using formula fields

Total Paid calculated using Roll-Up Summary

Pending Fee dynamically calculated

Balance auto-adjusts based on Deposit & Loan

Unique Email validation on Customer Contact

Parent-child LWC communication using Custom Events

📊 Future Enhancements

Approval Process automation

Role-based access control

Email Notifications

Dashboard with Charts

EMI Auto-generation via Apex

Experience Cloud customer portal

Payment Gateway Integration

🎯 Learning Outcomes

Through this project, I gained hands-on experience in:

Salesforce Data Modeling

LWC Component Communication

Apex Integration

SOQL Queries

Formula & Roll-Up Fields

Real-world Banking Use Case Implementation

Authentication Concepts

Deployment using Salesforce CLI

👨‍💻 Author

Pranesh Mohan
Salesforce Developer
GitHub: https://github.com/MPRANESH16
LinkedIn: https://www.linkedin.com/in/pranesh-m-758615319
Email: mpranesh1605@gmail.com
