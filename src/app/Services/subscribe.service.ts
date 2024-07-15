import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor() { }

  onSubscribeClicked(type:string) {
    alert(`Thank you for your ${type} subscription, You can enjoy our services to the core now. HAPPY WATCHING` )
  }
}
