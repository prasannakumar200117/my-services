import { Component } from '@angular/core';
import { SubscribeService } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  providers: [SubscribeService]
})
export class HeaderComponent {
  constructor( private subService :  SubscribeService) {
    
  }
  onSubscribe() {    
    this.subService.onSubscribeClicked("monthly");
  }
}
