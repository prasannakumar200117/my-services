import { Component } from '@angular/core';
import { SubscribeService } from '../../../Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  providers : [SubscribeService]
})
export class SidebarComponent {
     constructor( private subService :  SubscribeService) {
    
    }
    onSubscribe() {    
      this.subService.onSubscribeClicked("yearly");
    }
  }

