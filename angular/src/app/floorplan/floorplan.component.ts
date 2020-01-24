import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
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
  heroes: Item[] = [
    { id: 1, name: 'Batman', img: 'assets/images/batman.jpg' },
    { id: 2, name: 'Captain Marvel', img: 'assets/images/captainmarvel.jpg' },
    { id: 3, name: 'Iron Man', img: 'assets/images/iron-man.jpg' },
    { id: 4, name: 'Storm', img: 'assets/images/storm.jpg' },
    { id: 5, name: 'Spiderman', img: 'assets/images/spiderman.jpg' },
    { id: 6, name: 'Wonder Woman', img: 'assets/images/wonderwoman.jpg' },
  ];

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  clickSuperheroes(event: any) {
    this.currentCharacter = 'iron-man';
  }

  generateRandomUserId() {
    return Math.floor((Math.random() * 6) + 1).toString();
  }

}
