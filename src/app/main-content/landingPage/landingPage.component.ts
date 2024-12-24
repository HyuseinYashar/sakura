import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-landingPage',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: /*html*/ `
    <section>
      <div><app-navbar></app-navbar>
      </div>
      <h1 class="fontRaleway">SAKURA RAMEN</h1>
      <h2 class="fontRaleway">BEST RAMEN IN TOWN</h2>
    </section>
  `,
  styleUrls: ['./landingPage.component.scss'],
})
export class landingPageComponent {}
