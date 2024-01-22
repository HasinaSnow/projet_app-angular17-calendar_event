import { Injectable, WritableSignal, signal } from "@angular/core";
import { IStatItem } from "../interfaces/stat-item.interface";
import { IDataChart } from "../interfaces/data-chart.interface";
import { IItem } from "../interfaces/item.interface";

@Injectable({
    providedIn: 'root'
  })
export class AnalyticService {
    reportItems: WritableSignal<IStatItem[]> = signal([
        {
            label: 'Budget',
            icon: 'savings',
            value: 132900,
            rate: 12
        },
        {
            label: 'Incomes',
            icon: 'trending_up',
            color: 'bg-green-500',
            value: 123000,
            rate: 21
        },
        {
            label: 'Expenses',
            icon: 'trending_down',
            color: 'bg-red-500',
            value: 12000,
            rate: 12
        }
    ])
    assetItems: WritableSignal<IStatItem[]> = signal([
        {
            label: 'Cash',
            icon: 'payments',
            color: 'bg-green-500',
            value: 132900,
            rate: 12
        },
        {
            label: 'Bank',
            icon: 'account_balance',
            color: 'bg-blue-500',
            value: 123000,
            rate: 21
        },
        {
            label: 'Mobile money',
            icon: 'smartphone',
            color: 'bg-pink-500',
            value: 12000,
            rate: 12
        }
    ])

    reportChartValues: WritableSignal<IDataChart[]> = signal<IDataChart[]>([
        {
            label: 'Budget',
            data: [24, 56, 34, 18, 35, 25, 44],
            bgColor: 'rgb(67 56 202 / 20%)',
            color: 'rgb(67 56 202)'
        },
        {
            label: 'Incomes',
            data: [18, 35, 25, 44, 24, 56, 34,],
            bgColor: 'rgb(34 197 94 / 20%)',
            color: 'rgb(34 197 94)'
        },
        {
            label: 'Expenses',
            data: [34, 56, 24, 44, 25, 3, 18],
            bgColor: 'rgb(239 68 68 / 20%)',
            color: 'rgb(239 68 68)'
        }
    ]);

    assetChartValues: WritableSignal<IDataChart[]> = signal<IDataChart[]>([
        {
            label: 'Cash',
            data: [24, 56, 34, 18, 35, 25, 44],
            bgColor: 'rgb(34 197 94 / 20%)',
            color: 'rgb(34 197 94)'
        },
        {
            label: 'Bank',
            data: [18, 35, 25, 44, 24, 56, 34,],
            bgColor: 'rgb(59 130 246 / 20%)',
            color: 'rgb(59 130 246)'
        },
        {
            label: 'Mobile Money',
            data: [34, 56, 24, 44, 25, 3, 18],
            bgColor: 'rgb(236 72 153 / 20%)',
            color: 'rgb(236 72 153)'
        }
    ])

    changeFilter(item: IItem) {
        console.log('filter anlytics changed')
    }
}