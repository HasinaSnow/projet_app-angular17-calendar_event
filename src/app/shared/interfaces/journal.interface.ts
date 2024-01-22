export interface IJournal {
    id: number,
    event: IEventJournal,
    action: string,
    amount: number,
    status: 'debit'| 'credit'| 'null',
    debit: string,
    credit: string,
    createdAt: Date
}

interface IEventJournal {
    id: number,
    date: Date,
    customer: ICustomerEventJournal
}

interface ICustomerEventJournal {
    id: number,
    name: string
}