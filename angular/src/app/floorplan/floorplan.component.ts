import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../models/app.models';

@Component({
  selector: 'app-video',
  templateUrl: './floorplan.component.html',
  styleUrls: ['./floorplan.component.css']
})

export class FloorplanComponent implements AfterViewInit {

  current: string;
  currentCharacter: string;
  currentCategory: Item[] = [];

  heroes: Item[] = [
    { id: 11, name: 'Dr Nice', img: 't' },
    { id: 12, name: 'Narco', img: 't' },
    { id: 13, name: 'Bombasto', img: 't' },
    { id: 14, name: 'Celeritas', img: 't' },
    { id: 15, name: 'Magneta', img: 't' },
    { id: 16, name: 'RubberMan', img: 't' },
    { id: 17, name: 'Dynama', img: 't' },
    { id: 18, name: 'Dr IQ', img: 't' },
    { id: 19, name: 'Magma', img: 't' },
    { id: 20, name: 'Tornado', img: 't' }
  ];

  activities: Item[] = [
    { id: 21, name: 'Skiing', img: 't' },
    { id: 22, name: 'Dancing', img: 't' }
  ]

  constructor(private router: Router) {
    this.currentCategory = this.heroes;
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  clickSuperheroes(event: any) {
    this.currentCharacter = 'iron-man';
  }

  clickSuperhero() {
    this.currentCategory = this.activities;
  }

  generateRandomUserId() {
    return Math.floor((Math.random() * 6) + 1).toString();
  }

}
