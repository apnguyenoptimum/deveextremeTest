import { Injectable } from '@angular/core';

export class Task {
	Task_ID: number;
	Task_Parent_ID: number;
	Task_Assigned_Employee_ID: number;
	Task_Completion: number;
	Task_Priority: number;
	Task_Status: string;
	Task_Subject: string;
	Task_Start_Date: string;
	Task_Due_Date: string;
	Task_Assigned_Employee?: Employee;
}

export class Employee {
	ID: number;
	Name: string;
	Picture: string;
}

export class Priority {
	id: number;
	value: string;
}

let tasks: Task[] = [{
    "Task_ID": 1,
    "Task_Assigned_Employee_ID": 1,
    "Task_Subject": "Plans 2015",
    "Task_Start_Date": "2015-01-01T00:00:00",
    "Task_Due_Date": "2015-04-01T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 2,
    "Task_Assigned_Employee_ID": 2,
    "Task_Subject": "Health Insurance",
    "Task_Start_Date": "2015-02-12T00:00:00",
    "Task_Due_Date": "2015-05-30T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 4,
    "Task_Completion": 75,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 3,
    "Task_Assigned_Employee_ID": 4,
    "Task_Subject": "New Brochures",
    "Task_Start_Date": "2015-02-17T00:00:00",
    "Task_Due_Date": "2015-03-01T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 4,
    "Task_Assigned_Employee_ID": 31,
    "Task_Subject": "Training",
    "Task_Start_Date": "2015-03-02T00:00:00",
    "Task_Due_Date": "2015-06-29T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 5,
    "Task_Assigned_Employee_ID": 5,
    "Task_Subject": "NDA",
    "Task_Start_Date": "2015-03-12T00:00:00",
    "Task_Due_Date": "2015-05-01T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 3,
    "Task_Completion": 90,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 6,
    "Task_Assigned_Employee_ID": 7,
    "Task_Subject": "Revenue Projections",
    "Task_Start_Date": "2015-03-24T00:00:00",
    "Task_Due_Date": "2015-04-15T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 7,
    "Task_Assigned_Employee_ID": 9,
    "Task_Subject": "TV Recall",
    "Task_Start_Date": "2015-04-18T00:00:00",
    "Task_Due_Date": "2016-02-04T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 4,
    "Task_Completion": 90,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 8,
    "Task_Assigned_Employee_ID": 6,
    "Task_Subject": "Overtime",
    "Task_Start_Date": "2015-06-10T00:00:00",
    "Task_Due_Date": "2015-06-20T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 2,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 9,
    "Task_Assigned_Employee_ID": 8,
    "Task_Subject": "Recall and Refund Forms",
    "Task_Start_Date": "2015-06-17T00:00:00",
    "Task_Due_Date": "2016-04-09T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 2,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 10,
    "Task_Assigned_Employee_ID": 10,
    "Task_Subject": "Shippers",
    "Task_Start_Date": "2015-07-10T00:00:00",
    "Task_Due_Date": "2016-04-11T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 2,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 11,
    "Task_Assigned_Employee_ID": 6,
    "Task_Subject": "Hardware Upgrade",
    "Task_Start_Date": "2015-07-22T00:00:00",
    "Task_Due_Date": "2016-05-01T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 3,
    "Task_Completion": 95,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 12,
    "Task_Assigned_Employee_ID": 6,
    "Task_Subject": "Touch-Enabled Apps",
    "Task_Start_Date": "2015-08-05T00:00:00",
    "Task_Due_Date": "2016-04-30T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 2,
    "Task_Completion": 90,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 13,
    "Task_Assigned_Employee_ID":6,
    "Task_Subject": "Online Sales",
    "Task_Start_Date": "2015-08-20T00:00:00",
    "Task_Due_Date": "2015-09-15T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 14,
    "Task_Assigned_Employee_ID": 6,
    "Task_Subject": "New Website Design",
    "Task_Start_Date": "2015-09-17T00:00:00",
    "Task_Due_Date": "2015-11-01T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 15,
    "Task_Assigned_Employee_ID": 6,
    "Task_Subject": "Bandwidth Increase",
    "Task_Start_Date": "2015-11-01T00:00:00",
    "Task_Due_Date": "2015-11-07T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 16,
    "Task_Assigned_Employee_ID": 18,
    "Task_Subject": "Support",
    "Task_Start_Date": "2015-11-10T00:00:00",
    "Task_Due_Date": "2015-11-15T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 2,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 17,
    "Task_Assigned_Employee_ID": 31,
    "Task_Subject": "Training Material",
    "Task_Start_Date": "2015-11-14T00:00:00",
    "Task_Due_Date": "2016-02-05T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 18,
    "Task_Assigned_Employee_ID": 22,
    "Task_Subject": "New Database",
    "Task_Start_Date": "2015-12-24T00:00:00",
    "Task_Due_Date": "2015-12-29T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 95,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 19,
    "Task_Assigned_Employee_ID": 32,
    "Task_Subject": "New HDMI Specification",
    "Task_Start_Date": "2016-01-02T00:00:00",
    "Task_Due_Date": "2016-01-31T00:00:00",
    "Task_Status": "Deferred",
    "Task_Priority": 2,
    "Task_Completion": 50,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 20,
    "Task_Assigned_Employee_ID": 3,
    "Task_Subject": "Automation Server",
    "Task_Start_Date": "2016-01-15T00:00:00",
    "Task_Due_Date": "2016-04-30T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 3,
    "Task_Completion": 85,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 21,
    "Task_Assigned_Employee_ID": 40,
    "Task_Subject": "Retail Sales",
    "Task_Start_Date": "2016-01-20T00:00:00",
    "Task_Due_Date": "2016-02-10T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 22,
    "Task_Assigned_Employee_ID": 1,
    "Task_Subject": "Reports",
    "Task_Start_Date": "2016-03-13T00:00:00",
    "Task_Due_Date": "2016-05-07T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 4,
    "Task_Completion": 50,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 23,
    "Task_Assigned_Employee_ID": 5,
    "Task_Subject": "Budget",
    "Task_Start_Date": "2016-03-20T00:00:00",
    "Task_Due_Date": "2016-04-01T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 4,
    "Task_Completion": 30,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 24,
    "Task_Assigned_Employee_ID": 13,
    "Task_Subject": "Shipping Labels",
    "Task_Start_Date": "2016-04-01T00:00:00",
    "Task_Due_Date": "2016-04-15T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 2,
    "Task_Completion": 50,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 25,
    "Task_Assigned_Employee_ID": 10,
    "Task_Subject": "New Warehouse",
    "Task_Start_Date": "2016-04-05T00:00:00",
    "Task_Due_Date": "2016-04-15T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 2,
    "Task_Completion": 65,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 26,
    "Task_Assigned_Employee_ID": 10,
    "Task_Subject": "Forklift",
    "Task_Start_Date": "2016-04-07T00:00:00",
    "Task_Due_Date": "2016-04-20T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 2,
    "Task_Completion": 20,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 27,
    "Task_Assigned_Employee_ID": 1,
    "Task_Subject": "Customer Follow Up Plan",
    "Task_Start_Date": "2016-05-05T00:00:00",
    "Task_Due_Date": "2016-05-11T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 2,
    "Task_Completion": 40,
    "Task_Parent_ID": 0
}, {
    "Task_ID": 28,
    "Task_Assigned_Employee_ID": 7,
    "Task_Subject": "Prepare 2015 Financial",
    "Task_Start_Date": "2015-01-15T00:00:00",
    "Task_Due_Date": "2015-01-31T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 1
}, {
    "Task_ID": 29,
    "Task_Assigned_Employee_ID": 4,
    "Task_Subject": "Prepare 2015 Marketing Plan",
    "Task_Start_Date": "2015-01-01T00:00:00",
    "Task_Due_Date": "2015-01-31T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 1
}, {
    "Task_ID": 30,
    "Task_Assigned_Employee_ID": 2,
    "Task_Subject": "Review Health Insurance Options Under the Affordable Care Act",
    "Task_Start_Date": "2015-02-12T00:00:00",
    "Task_Due_Date": "2015-04-25T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 4,
    "Task_Completion": 50,
    "Task_Parent_ID": 2
}, {
    "Task_ID": 31,
    "Task_Assigned_Employee_ID": 1,
    "Task_Subject": "Choose between PPO and HMO Health Plan",
    "Task_Start_Date": "2015-02-15T00:00:00",
    "Task_Due_Date": "2015-04-15T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 4,
    "Task_Completion": 75,
    "Task_Parent_ID": 2
}, {
    "Task_ID": 32,
    "Task_Assigned_Employee_ID": 1,
    "Task_Subject": "Google AdWords Strategy",
    "Task_Start_Date": "2015-02-16T00:00:00",
    "Task_Due_Date": "2015-02-28T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 29
}, {
    "Task_ID": 34,
    "Task_Assigned_Employee_ID": 28,
    "Task_Subject": "2015 Brochure Designs",
    "Task_Start_Date": "2015-02-19T00:00:00",
    "Task_Due_Date": "2015-02-24T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 3
}, {
    "Task_ID": 35,
    "Task_Assigned_Employee_ID": 29,
    "Task_Subject": "Brochure Design Review",
    "Task_Start_Date": "2015-02-19T00:00:00",
    "Task_Due_Date": "2015-02-22T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 2,
    "Task_Completion": 100,
    "Task_Parent_ID": 34
}, {
    "Task_ID": 36,
    "Task_Assigned_Employee_ID": 29,
    "Task_Subject": "Website Re-Design Plan",
    "Task_Start_Date": "2015-02-19T00:00:00",
    "Task_Due_Date": "2015-02-24T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 35
}, {
    "Task_ID": 37,
    "Task_Assigned_Employee_ID": 4,
    "Task_Subject": "Rollout of New Website and Marketing Brochures",
    "Task_Start_Date": "2015-02-20T00:00:00",
    "Task_Due_Date": "2015-02-28T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 3
}, {
    "Task_ID": 38,
    "Task_Assigned_Employee_ID": 8,
    "Task_Subject": "Update Sales Strategy Documents",
    "Task_Start_Date": "2015-02-20T00:00:00",
    "Task_Due_Date": "2015-02-22T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 2,
    "Task_Completion": 100,
    "Task_Parent_ID": 29
}, {
    "Task_ID": 39,
    "Task_Assigned_Employee_ID": 41,
    "Task_Subject": "Create 2012 Sales Report",
    "Task_Start_Date": "2015-02-20T00:00:00",
    "Task_Due_Date": "2015-02-21T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 2,
    "Task_Completion": 100,
    "Task_Parent_ID": 29
}, {
    "Task_ID": 40,
    "Task_Assigned_Employee_ID": 42,
    "Task_Subject": "Direct vs Online Sales Comparison Report",
    "Task_Start_Date": "2015-02-20T00:00:00",
    "Task_Due_Date": "2015-02-22T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 29
}, {
    "Task_ID": 41,
    "Task_Assigned_Employee_ID": 4,
    "Task_Subject": "Review 2012 Sales Report and Approve 2015 Plans",
    "Task_Start_Date": "2015-02-23T00:00:00",
    "Task_Due_Date": "2015-02-28T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 2,
    "Task_Completion": 100,
    "Task_Parent_ID": 29
}, {
    "Task_ID": 42,
    "Task_Assigned_Employee_ID": 3,
    "Task_Subject": "Deliver R&D Plans for 2015",
    "Task_Start_Date": "2015-03-01T00:00:00",
    "Task_Due_Date": "2015-03-10T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 1
}, {
    "Task_ID": 43,
    "Task_Assigned_Employee_ID": 32,
    "Task_Subject": "Create 2015 R&D Plans",
    "Task_Start_Date": "2015-03-01T00:00:00",
    "Task_Due_Date": "2015-03-07T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 2,
    "Task_Completion": 100,
    "Task_Parent_ID": 42
}, {
    "Task_ID": 44,
    "Task_Assigned_Employee_ID": 33,
    "Task_Subject": "2015 QA Strategy Report",
    "Task_Start_Date": "2015-03-02T00:00:00",
    "Task_Due_Date": "2015-03-05T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 2,
    "Task_Completion": 100,
    "Task_Parent_ID": 42
}, {
    "Task_ID": 45,
    "Task_Assigned_Employee_ID": 31,
    "Task_Subject": "2015 Training Events",
    "Task_Start_Date": "2015-03-02T00:00:00",
    "Task_Due_Date": "2015-03-04T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 4
}, {
    "Task_ID": 46,
    "Task_Assigned_Employee_ID": 2,
    "Task_Subject": "Non-Compete Agreements",
    "Task_Start_Date": "2015-03-12T00:00:00",
    "Task_Due_Date": "2015-03-14T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 1,
    "Task_Completion": 100,
    "Task_Parent_ID": 5
}, {
    "Task_ID": 47,
    "Task_Assigned_Employee_ID": 1,
    "Task_Subject": "Update NDA Agreement",
    "Task_Start_Date": "2015-03-14T00:00:00",
    "Task_Due_Date": "2015-03-16T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 5
}, {
    "Task_ID": 48,
    "Task_Assigned_Employee_ID": 5,
    "Task_Subject": "Update Employee Files with New NDA",
    "Task_Start_Date": "2015-03-16T00:00:00",
    "Task_Due_Date": "2015-03-26T00:00:00",
    "Task_Status": "Need Assistance",
    "Task_Priority": 2,
    "Task_Completion": 90,
    "Task_Parent_ID": 5
}, {
    "Task_ID": 49,
    "Task_Assigned_Employee_ID": 6,
    "Task_Subject": "Sign Updated NDA",
    "Task_Start_Date": "2015-03-20T00:00:00",
    "Task_Due_Date": "2015-03-25T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 5
}, {
    "Task_ID": 50,
    "Task_Assigned_Employee_ID": 7,
    "Task_Subject": "Sign Updated NDA",
    "Task_Start_Date": "2015-03-20T00:00:00",
    "Task_Due_Date": "2015-03-25T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 5
}, {
    "Task_ID": 51,
    "Task_Assigned_Employee_ID": 8,
    "Task_Subject": "Sign Updated NDA",
    "Task_Start_Date": "2015-03-20T00:00:00",
    "Task_Due_Date": "2015-03-25T00:00:00",
    "Task_Status": "Need Assistance",
    "Task_Priority": 3,
    "Task_Completion": 25,
    "Task_Parent_ID": 5
}, {
    "Task_ID": 52,
    "Task_Assigned_Employee_ID": 9,
    "Task_Subject": "Sign Updated NDA",
    "Task_Start_Date": "2015-03-20T00:00:00",
    "Task_Due_Date": "2015-03-25T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 5
}, {
    "Task_ID": 53,
    "Task_Assigned_Employee_ID": 17,
    "Task_Subject": "Submit Questions Regarding New NDA",
    "Task_Start_Date": "2015-03-21T00:00:00",
    "Task_Due_Date": "2015-03-24T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 5
}, {
    "Task_ID": 54,
    "Task_Assigned_Employee_ID": 18,
    "Task_Subject": "Submit Questions Regarding New NDA",
    "Task_Start_Date": "2015-03-21T00:00:00",
    "Task_Due_Date": "2015-03-24T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 5
}, {
    "Task_ID": 55,
    "Task_Assigned_Employee_ID": 19,
    "Task_Subject": "Submit Questions Regarding New NDA",
    "Task_Start_Date": "2015-03-21T00:00:00",
    "Task_Due_Date": "2015-03-24T00:00:00",
    "Task_Status": "Need Assistance",
    "Task_Priority": 4,
    "Task_Completion": 25,
    "Task_Parent_ID": 5
}, {
    "Task_ID": 56,
    "Task_Assigned_Employee_ID": 14,
    "Task_Subject": "Submit Signed NDA",
    "Task_Start_Date": "2015-03-22T00:00:00",
    "Task_Due_Date": "2015-03-24T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 5
}, {
    "Task_ID": 57,
    "Task_Assigned_Employee_ID": 13,
    "Task_Subject": "Submit Signed NDA",
    "Task_Start_Date": "2015-03-22T00:00:00",
    "Task_Due_Date": "2015-03-24T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 5
}, {
    "Task_ID": 58,
    "Task_Assigned_Employee_ID": 15,
    "Task_Subject": "Submit Signed NDA",
    "Task_Start_Date": "2015-03-22T00:00:00",
    "Task_Due_Date": "2015-03-24T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 5
}, {
    "Task_ID": 59,
    "Task_Assigned_Employee_ID": 16,
    "Task_Subject": "Submit Signed NDA",
    "Task_Start_Date": "2015-03-22T00:00:00",
    "Task_Due_Date": "2015-03-24T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 5
}, {
    "Task_ID": 60,
    "Task_Assigned_Employee_ID": 7,
    "Task_Subject": "Update Revenue Projections",
    "Task_Start_Date": "2015-03-24T00:00:00",
    "Task_Due_Date": "2015-04-07T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 2,
    "Task_Completion": 100,
    "Task_Parent_ID": 6
}, {
    "Task_ID": 61,
    "Task_Assigned_Employee_ID": 8,
    "Task_Subject": "Review Revenue Projections",
    "Task_Start_Date": "2015-03-25T00:00:00",
    "Task_Due_Date": "2015-04-06T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 6
}, {
    "Task_ID": 62,
    "Task_Assigned_Employee_ID": 41,
    "Task_Subject": "Comment on Revenue Projections",
    "Task_Start_Date": "2015-03-25T00:00:00",
    "Task_Due_Date": "2015-04-03T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 6
}, {
    "Task_ID": 63,
    "Task_Assigned_Employee_ID": 42,
    "Task_Subject": "Comment on Revenue Projections",
    "Task_Start_Date": "2015-03-25T00:00:00",
    "Task_Due_Date": "2015-04-03T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 6
}, {
    "Task_ID": 64,
    "Task_Assigned_Employee_ID": 45,
    "Task_Subject": "Comment on Revenue Projections",
    "Task_Start_Date": "2015-03-25T00:00:00",
    "Task_Due_Date": "2015-04-03T00:00:00",
    "Task_Status": "Deferred",
    "Task_Priority": 3,
    "Task_Completion": 25,
    "Task_Parent_ID": 6
}, {
    "Task_ID": 65,
    "Task_Assigned_Employee_ID": 5,
    "Task_Subject": "Provide New Health Insurance Docs",
    "Task_Start_Date": "2015-03-28T00:00:00",
    "Task_Due_Date": "2015-04-07T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 2,
    "Task_Completion": 100,
    "Task_Parent_ID": 2
}, {
    "Task_ID": 66,
    "Task_Assigned_Employee_ID": 10,
    "Task_Subject": "Review Changes to Health Insurance Coverage",
    "Task_Start_Date": "2015-04-07T00:00:00",
    "Task_Due_Date": "2015-04-30T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 2,
    "Task_Completion": 100,
    "Task_Parent_ID": 2
}, {
    "Task_ID": 67,
    "Task_Assigned_Employee_ID": 14,
    "Task_Subject": "Scan Health Insurance Forms",
    "Task_Start_Date": "2015-04-15T00:00:00",
    "Task_Due_Date": "2015-04-20T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 2,
    "Task_Completion": 100,
    "Task_Parent_ID": 2
}, {
    "Task_ID": 68,
    "Task_Assigned_Employee_ID": 15,
    "Task_Subject": "Sign Health Insurance Forms",
    "Task_Start_Date": "2015-04-16T00:00:00",
    "Task_Due_Date": "2015-04-19T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 2
}, {
    "Task_ID": 69,
    "Task_Assigned_Employee_ID": 13,
    "Task_Subject": "Sign Health Insurance Forms",
    "Task_Start_Date": "2015-04-16T00:00:00",
    "Task_Due_Date": "2015-04-19T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 2
}, {
    "Task_ID": 70,
    "Task_Assigned_Employee_ID": 16,
    "Task_Subject": "Sign Health Insurance Forms",
    "Task_Start_Date": "2015-04-16T00:00:00",
    "Task_Due_Date": "2015-04-19T00:00:00",
    "Task_Status": "Deferred",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 2
}, {
    "Task_ID": 71,
    "Task_Assigned_Employee_ID": 18,
    "Task_Subject": "Follow up with West Coast Stores",
    "Task_Start_Date": "2015-04-18T00:00:00",
    "Task_Due_Date": "2016-02-04T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 3,
    "Task_Completion": 95,
    "Task_Parent_ID": 7
}, {
    "Task_ID": 72,
    "Task_Assigned_Employee_ID": 17,
    "Task_Subject": "Follow up with East Coast Stores",
    "Task_Start_Date": "2015-04-18T00:00:00",
    "Task_Due_Date": "2016-01-04T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 3,
    "Task_Completion": 85,
    "Task_Parent_ID": 7
}, {
    "Task_ID": 73,
    "Task_Assigned_Employee_ID": 19,
    "Task_Subject": "Send Email to Customers about Recall",
    "Task_Start_Date": "2015-04-18T00:00:00",
    "Task_Due_Date": "2015-04-30T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 4,
    "Task_Completion": 100,
    "Task_Parent_ID": 7
}, {
    "Task_ID": 74,
    "Task_Assigned_Employee_ID": 9,
    "Task_Subject": "Submit Refund Report for 2015 Recall",
    "Task_Start_Date": "2015-04-25T00:00:00",
    "Task_Due_Date": "2015-05-05T00:00:00",
    "Task_Status": "Completed",
    "Task_Priority": 3,
    "Task_Completion": 100,
    "Task_Parent_ID": 7
}, {
    "Task_ID": 180,
    "Task_Assigned_Employee_ID": 9,
    "Task_Subject": "Support Team Evaluation Report",
    "Task_Start_Date": "2016-05-01T00:00:00",
    "Task_Due_Date": "2016-05-07T00:00:00",
    "Task_Status": "Deferred",
    "Task_Priority": 2,
    "Task_Completion": 0,
    "Task_Parent_ID": 22
}, {
    "Task_ID": 181,
    "Task_Assigned_Employee_ID": 1,
    "Task_Subject": "Review New Customer Follow Up Plan",
    "Task_Start_Date": "2016-05-05T00:00:00",
    "Task_Due_Date": "2016-05-11T00:00:00",
    "Task_Status": "In Progress",
    "Task_Priority": 2,
    "Task_Completion": 75,
    "Task_Parent_ID": 27
}, {
    "Task_ID": 182,
    "Task_Assigned_Employee_ID": 2,
    "Task_Subject": "Submit Customer Follow Up Plan Feedback",
    "Task_Start_Date": "2016-05-06T00:00:00",
    "Task_Due_Date": "2016-05-10T00:00:00",
    "Task_Status": "Deferred",
    "Task_Priority": 2,
    "Task_Completion": 0,
    "Task_Parent_ID": 27
}];

let employees: Employee[] = [{
    "ID": 1,
    "Name": "John Heart",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/01.png"
}, {
    "ID": 2,
    "Name": "Samantha Bright",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/04.png"
}, {
    "ID": 3,
    "Name": "Arthur Miller",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/02.png"
}, {
    "ID": 4,
    "Name": "Robert Reagan",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/03.png"
}, {
    "ID": 5,
    "Name": "Greta Sims",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png"
}, {
    "ID": 6,
    "Name": "Brett Wade",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/05.png"
}, {
    "ID": 7,
    "Name": "Sandra Johnson",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/08.png"
}, {
    "ID": 8,
    "Name": "Ed Holmes",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/07.png"
}, {
    "ID": 9,
    "Name": "Barb Banks",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/09.png"
}, {
    "ID": 10,
    "Name": "Kevin Carter",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/10.png"
}, {
    "ID": 11,
    "Name": "Cindy Stanwick",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/15.png"
}, {
    "ID": 12,
    "Name": "Sammy Hill",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/11.png"
}, {
    "ID": 13,
    "Name": "Davey Jones",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/12.png"
}, {
    "ID": 14,
    "Name": "Victor Norris",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/13.png"
}, {
    "ID": 15,
    "Name": "Mary Stern",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/16.png"
}, {
    "ID": 16,
    "Name": "Robin Cosworth",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/14.png"
}, {
    "ID": 17,
    "Name": "Kelly Rodriguez",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/17.png"
}, {
    "ID": 18,
    "Name": "James Anderson",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/18.png"
}, {
    "ID": 19,
    "Name": "Antony Remmen",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/19.png"
}, {
    "ID": 20,
    "Name": "Olivia Peyton",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/20.png"
}, {
    "ID": 21,
    "Name": "Taylor Riley",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/21.png"
}, {
    "ID": 22,
    "Name": "Amelia Harper",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/22.png"
}, {
    "ID": 23,
    "Name": "Wally Hobbs",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/23.png"
}, {
    "ID": 24,
    "Name": "Brad Jameson",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/24.png"
}, {
    "ID": 25,
    "Name": "Karen Goodson",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/25.png"
}, {
    "ID": 26,
    "Name": "Marcus Orbison",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/26.png"
}, {
    "ID": 27,
    "Name": "Sandy Bright",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/27.png"
}, {
    "ID": 28,
    "Name": "Morgan Kennedy",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/28.png"
}, {
    "ID": 29,
    "Name": "Violet Bailey",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/29.png"
}, {
    "ID": 30,
    "Name": "Ken Samuelson",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/32.png"
}, {
    "ID": 31,
    "Name": "Nat Maguiree",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/34.png"
}, {
    "ID": 32,
    "Name": "Bart Arnaz",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/37.png"
}, {
    "ID": 33,
    "Name": "Leah Simpson",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/38.png"
}, {
    "ID": 34,
    "Name": "Arnie Schwartz",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/40.png"
}, {
    "ID": 35,
    "Name": "Billy Zimmer",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/42.png"
}, {
    "ID": 36,
    "Name": "Samantha Piper",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/30.png"
}, {
    "ID": 37,
    "Name": "Maggie Boxter",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/31.png"
}, {
    "ID": 38,
    "Name": "Terry Bradley",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/33.png"
}, {
    "ID": 39,
    "Name": "Gabe Jones",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/35.png"
}, {
    "ID": 40,
    "Name": "Lucy Ball",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/36.png"
}, {
    "ID": 41,
    "Name": "Jim Packard",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/43.png"
}, {
    "ID": 42,
    "Name": "Hannah Brookly",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/39.png"
}, {
    "ID": 43,
    "Name": "Harv Mudd",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/44.png"
}, {
    "ID": 44,
    "Name": "Clark Morgan",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/45.png"
}, {
    "ID": 45,
    "Name": "Todd Hoffman",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/46.png"
}, {
    "ID": 46,
    "Name": "Jackie Garmin",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/47.png"
}, {
    "ID": 47,
    "Name": "Lincoln Bartlett",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/49.png"
}, {
    "ID": 48,
    "Name": "Brad Farkus",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/50.png"
}, {
    "ID": 49,
    "Name": "Jenny Hobbs",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/48.png"
}, {
    "ID": 50,
    "Name": "Dallas Lou",
    "Picture": "https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/41.png"
},{
    "ID": 51,
    "Name": "Stu Pizaro",
    "Picture": ""
}];

let priorities: Priority[] = [
	{ id: 1, value: "Low" },
	{ id: 2, value: "Normal" },
	{ id: 3, value: "Urgent" },
	{ id: 4, value: "High" }
];

@Injectable()
export class AppService {
	getTasks(): Task[] {
		return tasks.map(function (task: Task) {
			employees.forEach(function (employee: Employee) {
				if (task.Task_Assigned_Employee_ID === employee.ID) {
					task.Task_Assigned_Employee = employee;
				}
			});

			return task;
		});
	}

	getEmployees(): Employee[] {
		return employees;
	}

	getPriorities(): Priority[] {
		return priorities;
	}
}
