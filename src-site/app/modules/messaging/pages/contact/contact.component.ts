import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from '../../../user-auth/services/auth.service';
import { UserStateService } from '../../../../shared/services/user-state.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private snackbar: MatSnackBar,
    private router: Router,
    public userStateService: UserStateService
  ) { }

  public user: object = {
    name: null,
    email: null
  };

  public topics: Array<string> = [
    'Interesting Tech', 'Problem with the website', 'Looking to get involved',
    'Software Development Meetings', 'Other', 'Emergency'
  ];

  public autoFillName = this.user['name'] != null ? this.user['name'] : '';
  public autoFillEmail = this.user['email'] != null ? this.user['email'] : '';

  public ContactForm = new FormGroup({
    name: new FormControl(this.autoFillName),
    email: new FormControl(this.autoFillEmail, [Validators.required, Validators.email]),
    topic: new FormControl(this.topics[0]),
    message: new FormControl('', Validators.required)
  }, { updateOn: 'blur' });

  /**
   * Auto Fill the form with the user's email and name
   * by grabbing the current user from the auth service
   */
  ngOnInit() {
    // Not yet implimented. Will save for another day
    this.userStateService.userObject.subscribe(currentUser => {
      this.user = currentUser;
    });
  }

  public onSubmit(post: FormGroup): void {
    const data: object = {
      name: post['name'].trim(),
      email: post['email'].trim(),
      topic: post['topic'].trim(),
      message: post['message'].trim()
    };

    this.contactService.sendEmail(data).subscribe(status => {
      if (status['success'] === true) {
        this.snackbar.open('Message successfully sent. Thank You!',
          'Close', { duration: 3000 });
        this.router.navigate(['/']);
      } else {
        this.snackbar.open('Error sending message, please try again later...',
          'Close', { duration: 2000 });
      }
    });
  }


}
