import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
        name = '';
        email = '';
        message = '';
        
  constructor( private router: Router, private http: HttpClient ){}

            goToHome() {
  this.router.navigate(['/']);
            }

             goToAbout() {
    this.router.navigate(['/about']);
            }

             goToContact(){
    this.router.navigate(['/contact']);
             }
  
            goToProject() {
    this.router.navigate(['/project']);

            }
            sendMessage() {
                const contactData = {
                  name: this.name,
                  email: this.email,
                  message: this.message
                };

                this.http.post('http://127.0.0.1:8000/api/contact/send-email/', contactData)
                .subscribe({
                  next: (response) => alert('Message sent successfully!'),
                  error: (error) => alert('Error sending message. Try again later.')
            });

            }


    }