import { Component } from '@angular/core';
import { User } from 'src/app/model/common.dto';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent 
{
//   users : User[] = [
//   {
//     name: 'Melroy',
//     city: 'Mangalore',
//     emailId: 'dsamelroy5gmail.com',
//     id: 5,

//   },
//   {
//     name: 'Melrfghfgoy',
//     city: 'Mangalore',
//     emailId: 'dsamelroy5gmail.com',
//     id: 5,

//   },
// ]

constructor(public userService:UserService) {}

    ngOnInit()
    {
      this.userService.getUsers();
    }
  }