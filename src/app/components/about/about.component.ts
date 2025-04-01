import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor( private router: Router){}

  goToHome() {
    this.router.navigate(['/']);

  }

  goToContact() {
    this.router.navigate(['/contact']);

  }

  goToAbout() {
    this.router.navigate(['/about']);

  }

  goToProject() {
    this.router.navigate(['/project']);

}
}