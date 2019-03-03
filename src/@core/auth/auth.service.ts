import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class AuthService {

    isLogin = false;
    onLogin() {
        return new Observable((subscriber) => {
            setTimeout(() => {
                this.isLogin = true
                subscriber.next(this.isLogin);
                subscriber.complete();
            }, 500);
        })
    }
}