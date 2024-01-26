import { Injectable, WritableSignal, signal, effect, inject } from "@angular/core";
import { IStatItem } from "../interfaces/stat-item.interface";
import { IItem } from "../interfaces/item.interface";
import { IDataLineChart } from "../interfaces/data-chart.interface";
import { ChartJsService } from "./chart-js.service";

@Injectable({
    providedIn: 'root'
  })
export class AnalyticService {
    private chartService = inject(ChartJsService)

    // switch btns (reports, assets)
    switchBtns: IItem[] = [
        {id: 1, label: 'Reports', icon: 'request_quote'},
        {id: 2, label: 'Assets', icon: 'account_balance_wallet'},
    ]
    itemSwitched: WritableSignal<IItem> = signal(this.switchBtns[0])

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
            label: 'M. money',
            icon: 'smartphone',
            color: 'bg-pink-500',
            value: 12000,
            rate: 12
        }
    ])

    assetChartValues: WritableSignal<IDataLineChart> = signal<IDataLineChart>({
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Cash',
                datas: [24, 56, 34, 18, 35, 25, 44],
                colors: ['rgb(34 197 94)', 'rgb(34 197 94 / 10%)']
            },
            {
                label: 'Bank',
                datas: [18, 35, 25, 44, 24, 56, 34,],
                colors: ['rgb(63 131 248)', 'rgb(63 131 248 / 10%)']
            },
            {
                label: 'Mobile Money',
                datas: [34, 56, 24, 44, 25, 3, 18],
                colors: ['rgb(236 72 153)', 'rgb(236 72 153 / 10%)']
            }
        ]
    })

    reportChartValues: WritableSignal<IDataLineChart> = signal<IDataLineChart>({
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Budget',
                datas: [24, 56, 34, 18, 35, 25, 44],
                colors: ['rgb(67 56 202)', 'rgb(67 56 202 / 10%)']
            },
            {
                label: 'Incomes',
                datas: [18, 35, 25, 44, 24, 56, 34],
                colors: ['rgb(34 197 94)', 'rgb(34 197 94 / 10%)']
            },
            {
                label: 'Expenses',
                datas: [34, 56, 24, 44, 25, 3, 18],
                colors: ['rgb(236 72 153)', 'rgb(236 72 153 / 10%)']
            }
        ]
    })

    datafilters: any = {
        week: {
            items: {
                report: [
                    { value: 132900, rate: 12 },
                    { value: 123000, rate: 21 },
                    { value: 12000, rate: 12 },
                ],
                asset: [
                    { value: 135000, rate: 15 },
                    { value: 146000, rate: 18 },
                    { value: 178000, rate: 32 },
                ]

            },
            chart: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                report: [
                    { data: [24, 56, 34, 18] },
                    { data: [18, 35, 25, 44] },
                    { data: [34, 56, 24, 44], },
                ],
                asset: [
                    { data: [44, 25, 35, 18] },
                    { data: [32, 56, 24, 44] },
                    { data: [44, 56, 25, 35] },
                ]

            }
        },
        month: {
            items: {
                report: [
                    { value: 125000, rate: 4 },
                    { value: 123000, rate: 21 },
                    { value: 120000, rate: 18 },
                ],
                asset: [
                    { value: 351000, rate: 32 },
                    { value: 120000, rate: 14 },
                    { value: 320000, rate: 5 },
                ]

            },
            chart: {
                labels: ['1st week', '2nd week', '3rd week', '4th week'],
                report: [
                    { data: [44, 25, 35, 18] },
                    { data: [32, 56, 24, 44] },
                    { data: [44, 56, 25, 35] },
                ],
                asset: [
                    { data: [24, 56, 34, 18] },
                    { data: [18, 35, 25, 44] },
                    { data: [34, 56, 24, 44], },
                ]

            }
        },
        year: {
            items: {
                report: [
                    { value: 125000, rate: 4 },
                    { value: 123000, rate: 21 },
                    { value: 120000, rate: 18 },
                ],
                asset: [
                    { value: 351000, rate: 32 },
                    { value: 120000, rate: 14 },
                    { value: 320000, rate: 5 },
                ]

            },
            chart: {
                labels: ['Jan', 'Fev', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                report: [
                    { data: [44, 25, 35, 18, 34] },
                    { data: [32, 56, 24, 44, 12] },
                    { data: [44, 56, 25, 35, 14] },
                ],
                asset: [
                    { data: [24, 56, 34, 18, 16] },
                    { data: [18, 35, 25, 44, 38] },
                    { data: [34, 56, 24, 44, 26] },
                ]

            }
        }
    }

    changeFilter(item: IItem) {
        console.log('filter change', item)
        if(item.id == 1) {
            // report
            this.reportItems.update(values => values.map((value, i) => {
                value.value = this.datafilters.week.items.report[i].value
                value.rate = this.datafilters.week.items.report[i].rate
                return value
            }))
            this.reportChartValues.update(value => {
                value.labels = this.datafilters.week.chart.labels
                value.datasets = value.datasets.map((v, i) => {
                    v.datas = this.datafilters.week.chart.report[i].data
                    return v
                })
                return value
            })

            // asset
            this.assetItems.update(values => values.map((value, i) => {
                value.value = this.datafilters.week.items.asset[i].value
                value.rate = this.datafilters.week.items.asset[i].rate
                return value
            }))
            this.assetChartValues.update(value => {
                value.labels = this.datafilters.week.chart.labels
                value.datasets = value.datasets.map((v, i) => {
                    v.datas = this.datafilters.week.chart.asset[i].data
                    return v
                })
                return value
            })

        } else if(item.id == 2) {
            // report
            this.reportItems.update(values => values.map((value, i) => {
                value.value = this.datafilters.month.items.report[i].value
                value.rate = this.datafilters.month.items.report[i].rate
                return value
            }))
            this.reportChartValues.update(value => {
                value.labels = this.datafilters.month.chart.labels
                value.datasets = value.datasets.map((v, i) => {
                    v.datas = this.datafilters.month.chart.report[i].data
                    return v
                })
                return value
            })

            // asset
            this.assetItems.update(values => values.map((value, i) => {
                value.value = this.datafilters.month.items.asset[i].value
                value.rate = this.datafilters.month.items.asset[i].rate
                return value
            }))
            this.assetChartValues.update(value => {
                value.labels = this.datafilters.month.chart.labels
                value.datasets = value.datasets.map((v, i) => {
                    v.datas = this.datafilters.month.chart.asset[i].data
                    return v
                })
                return value
            })
        } else if(item.id == 3) {
            // report
            this.reportItems.update(values => values.map((value, i) => {
                value.value = this.datafilters.year.items.report[i].value
                value.rate = this.datafilters.year.items.report[i].rate
                return value
            }))
            this.reportChartValues.update(value => {
                value.labels = this.datafilters.year.chart.labels
                value.datasets = value.datasets.map((v, i) => {
                    v.datas = this.datafilters.year.chart.report[i].data
                    return v
                })
                return value
            })

            // asset
            this.assetItems.update(values => values.map((value, i) => {
                value.value = this.datafilters.year.items.asset[i].value
                value.rate = this.datafilters.year.items.asset[i].rate
                return value
            }))
            this.assetChartValues.update(value => {
                value.labels = this.datafilters.year.chart.labels
                value.datasets = value.datasets.map((v, i) => {
                    v.datas = this.datafilters.year.chart.asset[i].data
                    return v
                })
                return value
            })
        }
        this.updateChartValues()
    }

    switchItem(item: IItem) {
        this.itemSwitched.set(item)
        this.updateChartValues()
    }

    private updateChartValues() {
        if(this.itemSwitched() == this.switchBtns[0]) {
            this.chartService.updateDataChart(this.reportChartValues())
        } else if(this.itemSwitched() == this.switchBtns[1]) {
            this.chartService.updateDataChart(this.assetChartValues())
        }
    }
}