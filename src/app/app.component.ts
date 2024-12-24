import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { landingPageComponent } from './main-content/landingPage/landingPage.component';
import { NavbarComponent } from './main-content/landingPage/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, MainContentComponent,FooterComponent,ImprintComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sakura';
}
