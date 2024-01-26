export interface IDataLineChart {
    labels: string[],
    datasets: IDataset[]
}
export interface IDataset {
    label: string,
    colors: string[],
    datas: number[]
}