import { Observable } from "rxjs";
import { AuthModel } from "../models/auth.model";
import { UserLoginModel, UserLogupModel} from "../models/user.model";

export abstract class AuthGateway {
    abstract login(userToLogin: UserLoginModel): Observable<AuthModel>
    abstract logout(userId: number): Observable<AuthModel>
    abstract logup(userToLogUp: UserLogupModel): Observable<AuthModel>
}