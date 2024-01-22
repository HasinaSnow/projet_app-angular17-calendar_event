import { Injectable, WritableSignal, signal } from "@angular/core";
import { IItem } from "../interfaces/item.interface";
import { IMyProfile, IUser, IUserDetail } from "../interfaces/user.interface";

@Injectable({
    providedIn: 'root'
  })
export class UserService {
    myProfile: WritableSignal<IMyProfile> = signal<IMyProfile>({
        id: 1,
        name: 'H. Niaina',
        email: 'hasinaniaina@gmial.com',
        isOnline: true,
        rules: [
            {
                id: 1,
                name: 'user Admin'
            }
        ]
    })

    userItems: WritableSignal<IUser[]> = signal<IUser[]>([
        {
            id: 1,
            name: 'H. Niaina',
            servicesUser: [
                { id: 1, name: 'Decoration'},
                { id: 2, name: 'Staff'}
            ],
            rulesUser: [
                {id: 1, name: 'Solution Manager'},
                {id: 2, name: 'Create Time Officer'}
            ],
            online: true
        }
    ])

    userDetail: WritableSignal<IUserDetail> = signal({
        userRef: {
            id: 1,
            name: 'H. Niaina',
            servicesUser: [
                { id: 1, name: 'Decoration'},
                { id: 2, name: 'Staff'}
            ],
            rulesUser: [
                {id: 1, name: 'ADMIN'},
                {id: 2, name: 'TASK_MANAGER'}
            ],
            online: true
        },
        email: 'hasinaniaina@email.com',
        adress: 'Bucharest, Romania',
        socials: {
            facebook: '',
            whatsapp: '',
            twitter: ''
        },
        infos: 'An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.'
    })

    changeOrder(item: IItem) {
        console.log('change order')
    }

    changeFilter(item: IItem) {
        console.log('change filter')
    }
}