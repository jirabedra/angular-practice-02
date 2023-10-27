import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MovieService } from 'src/app/services/movie.service';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  constructor(private movieService : MovieService,
     private reviewService : ReviewService){}

  score:number = 0;

  add(){
    this.score++
  }

  less(){
    if(this.score >= 1){
      this.score--;
    };
  }

  submit(){
    this.reviewService.reviews.push(this.score);
    alert(this.reviewService.reviews.length);
    this.score=0;
  }
}
