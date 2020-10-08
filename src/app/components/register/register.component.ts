import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User()
  firstName: string = ''
  lastName: string = ''
  email: string = ''
  phoneNumber: string = ''
  city: string = ''
  street: string = ''
  state: string = ''
  zip: string = ''
  membership: boolean = false

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.user)
    this.userService.register(this.user).subscribe(() => {
      this.router.navigate(['/login'])
    })

    this.user.firstName = '';
    this.user.lastName = '';
    this.user.email = '';
    this.user.phoneNumber = '';
    this.user.city = '';
    this.user.street = '';
    this.user.state = '';
    this.user.zip = '';
    this.membership = false;
  }

}
