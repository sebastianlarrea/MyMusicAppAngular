import { Component, OnInit } from '@angular/core';
import { Songs } from 'app/models/entities/songs.entities';
import { SpotifyService } from 'app/services/spotify/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  songs: Songs[] = [];

  constructor(private spotifyService: SpotifyService) {}

  async ngOnInit() {
    window.location.hash && this.setAccessToken();

    this.songs = await this.spotifyService.getSongs(
      'player/recently-played?limit=50'
    );

    console.log(this.songs);
  }

  private setAccessToken() {
    const accessToken = window.location.hash.split('=')[1].split('&')[0];
    localStorage.setItem('ACCESS_TOKEN', accessToken);
  }
}
