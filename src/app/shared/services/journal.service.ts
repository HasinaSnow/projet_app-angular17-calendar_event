import { Injectable, WritableSignal, signal } from "@angular/core";
import { IItem } from "../interfaces/item.interface";
import { IJournal } from "../interfaces/journal.interface";

@Injectable({
    providedIn: 'root'
})
export class JournalService {
    journalItems: WritableSignal<IJournal[]> = signal<IJournal[]>([
        {
            id: 1,
            amount: 123000,
            action: 'Transaction',
            status: 'null',
            debit: 'Cash',
            credit: 'Bank',
            event: {
                id: 1,
                date: new Date(),
                customer: { id: 1, name: 'Customer'}
            },
            createdAt: new Date()
        }
    ])

    flowFilter: IItem[] = [
        {
            id: 1,
            label: 'All'
        },
        {
            id: 2,
            label: 'Debit'
        },
        {
            id: 3,
            label: 'Credit'
        }
    ]
    actionFilter: IItem[] = [
        {
            id: 1,
            label: 'All'
        },
        {
            id: 2,
            label: 'Purchase'
        },
        {
            id: 3,
            label: 'Payment'
        },
        {
            id: 4,
            label: 'Transaction'
        },
        {
            id: 5,
            label: 'Repayment'
        },
        {
            id: 6,
            label: 'Other'
        }
    ]
    dateFilter: IItem[] = [
        {
            id: 1,
            label: 'All'
        },
        {
            id: 2,
            label: 'Today'
        },
        {
            id: 3,
            label: 'This week'
        },
        {
            id: 4,
            label: 'This month'
        },
        {
            id: 5,
            label: 'This year'
        },
    ]

    changeOrder(item: IItem) {
        console.log('change order')
    }

    changeFilter(item: IItem) {
        console.log('change filter')
    }
}