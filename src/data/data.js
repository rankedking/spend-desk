import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images";

export const navigationLinks = [
    { id: 1, title: 'Home', image: iconsImgs.home },
    { id: 2, title: 'Budget', image: iconsImgs.budget },
    { id: 3, title: 'Transactions', image: iconsImgs.plane },
    { id: 4, title: 'Subscriptions', image: iconsImgs.wallet },
    { id: 5, title: 'Loans', image: iconsImgs.bills },
    { id: 6, title: 'Reports', image: iconsImgs.report },
    { id: 7, title: 'Savings', image: iconsImgs.wallet },
    { id: 8, title: 'Financial Advice', image: iconsImgs.wealth },
    { id: 9, title: 'Account', image: iconsImgs.user },
    { id: 10, title: 'Settings', image: iconsImgs.gears }
];

export const transactions = [
    {
        id: 11, 
        name: "Phil Blaize (Received)",
        image: personsImgs.person_four,
        date: "18/03/24",
        amount: 22000
    },
    {
        id: 12, 
        name: "Mercy Deola (Sent)",
        image: personsImgs.person_three,
        date: "23/02/24",
        amount: 20000
    },
    {
        id: 13, 
        name: "Irene Doe (Received)",
        image: personsImgs.person_two,
        date: "07/01/24",
        amount: 30000
    }
];

export const reportData = [
    {
        id: 14,
        month: "Jan",
        value1: 45,
        value2: null
    },
    {
        id: 15,
        month: "Feb",
        value1: 45,
        value2: 60
    },
    {
        id: 16,
        month: "Mar",
        value1: 45,
        value2: null
    },
    {
        id: 17,
        month: "Apr",
        value1: 45,
        value2: null
    },
    {
        id: 18,
        month: "May",
        value1: 45,
        value2: null
    }
];

export const budget = [
    {
        id: 19, 
        title: "Internet Subscriptions",
        type: "Jan - March",
        amount: 12800
    },
    {
        id: 20, 
        title: "Salary/Wages",
        type: "Jan - Feb",
        amount: 80000
    },
    {
        id: 21, 
        title: "Transport",
        type: "Jan - March",
        amount: 15700
    },
    {
        id: 22, 
        title: "Call Center Services",
        type: "Feb - March",
        amount: 950
    },
    {
        id: 23, 
        title: "Others",
        type: "March",
        amount: 1500
    }
];

export const subscriptions = [
    {
        id: 24,
        title: "GtB Bank",
        due_date: "01/12/2010",
        amount: 200000
    },
    {
        id: 25,
        title: "Shares",
        due_date: "01/01/2024",
        amount: 10000
    },
    {
        id: 26,
        title: "Bonds",
        due_date: "23/12/22",
        amount: 300000
    }
];

export const savings = [
    {
        id: 27,
        image: personsImgs.person_one,
        saving_amount: 968000,
        title: "Spars Technologies Ltd",
        date_taken: "23/01/2023",
        amount_left: 510000
    }
]