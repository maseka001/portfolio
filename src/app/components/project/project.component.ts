import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

  constructor( private router: Router){}

            goToHome() {
        this.router.navigate(['/']);
}

            goToAbout() {
        this.router.navigate(['/about']);
  }
  
            goToContact() {
        this.router.navigate(['/contact']);
  }

            goToProject() {
        this.router.navigate(['/project']);

}
}