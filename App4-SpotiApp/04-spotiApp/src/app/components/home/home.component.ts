import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public isLoading:boolean = true;
  public newReleases:any[] = [];

  constructor( 
    private spotify: SpotifyService
    ) {
    this.spotify.getNewReleases()
      .subscribe((data:any) => {
        this.newReleases = data;
        this.isLoading = false;
      });
  }

}
