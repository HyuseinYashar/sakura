import { Component } from '@angular/core';
import { landingPageComponent } from './landingPage/landingPage.component';
import { CommonModule } from '@angular/common';
import { HowToOrderComponent } from './how-to-order/how-to-order.component';
import { OurMenuComponent } from './our-menu/our-menu.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule,landingPageComponent,HowToOrderComponent,OurMenuComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
