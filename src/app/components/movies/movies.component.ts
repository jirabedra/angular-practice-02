import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  constructor(private movieService : MovieService, private sanitizer: DomSanitizer){}

  videoSource : string = "https://www.youtube.com/watch?v=V6X5ti4YlG8";

  sanitizeVideoUrl() {
    return this.sanitizer.bypassSecurityTrustHtml(this.videoSource)
  }
}
