export interface BaseDTO {
    status: StatusDTO,
    token: string,
    data: any
}

export interface StatusDTO {
    success: boolean,
    code: number,
    message: string
}