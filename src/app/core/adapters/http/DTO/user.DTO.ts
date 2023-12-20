export interface UserDTO {
    id: number,
    name: string,
    email: string,
    rulesRef: number[]
    created: Date
    updated: Date|null
}