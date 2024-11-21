import { Component } from '@angular/core';
import { User } from '../interface/User';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrl: './usercard.component.css',
})
export class UsercardComponent {
  users: User[] = [
    {
      Name: 'brielle katherine',
      design: 'web  developer usa',
      image: 'img1.jpg',
    },
    {
      Name: 'ahmed syed',
      design: 'web design usa ',
      image: 'img2.jpg',
    },
    {
      Name: 'john Doe',
      design: 'Backend developer ',
      image: 'img3.jpeg',
    },
  ];
}
