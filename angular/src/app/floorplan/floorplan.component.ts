import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Video, Genre } from '../models/app.models';
import { FloorplanService } from './floorplan.service';

@Component({
  selector: 'app-video',
  templateUrl: './floorplan.component.html',
  styleUrls: ['./floorplan.component.css']
})

export class FloorplanComponent implements AfterViewInit {

  seenVideosForGenre: Video[];
  randomVideo: Video;
  allGenres: Genre[];
  selectedGenreId: string;
  userId: string;

  isNextButtonEnabled = false;
  isDisplayNoVideoMessage = true;
  noVideoMessage: string;

  current: string;

  @ViewChild('desk') desk: ElementRef;

  constructor(private router: Router, private videoService: FloorplanService) {

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.desk.nativeElement);
  }

  onClickImage(event: any) {
    console.log(event.target.id);
    this.desk.nativeElement.innerHTML = '<img src="assets/profile-images/adam.jpeg">';

  }

  updateDisplayNoVideos() {
    console.log('display no videos');
    if (this.selectedGenreId == undefined) {
      this.noVideoMessage = 'Select a genre to play a random video';
    } else {
      this.noVideoMessage = 'No more videos in genre';
    }

    this.isDisplayNoVideoMessage = true;
    this.isNextButtonEnabled = false;
  }

  generateRandomUserId() {
    return Math.floor((Math.random() * 6) + 1).toString();
  }

}
