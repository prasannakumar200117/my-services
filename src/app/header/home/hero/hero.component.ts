import { Component } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  providers : [SubscribeService]
})
export class HeroComponent {

  constructor( private subService :  SubscribeService) {
    
  }
  onSubscribe() {    
    this.subService.onSubscribeClicked("quarterly");
  }
}
