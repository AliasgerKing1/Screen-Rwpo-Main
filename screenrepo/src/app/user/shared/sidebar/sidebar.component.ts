import { Component } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor() {}

  Category: any = [
    'business',
    'Education',
    'Entertainment',
    'Finance',
    'Food & Drink',
    'Health & Fitness',
    'Lifestyle',
    'Medical',
    'Music',
    'Navigation',
    'News',
    'Photo & Video',
    'Productivity',
    'Reference',
    'Shopping',
    'Socisl Networking',
    'Sports',
    'Travel',
    'Utilities',
  ];
}
