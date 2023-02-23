import { Component, OnInit } from '@angular/core';
import { RecentlyPlayedSongs } from 'app/models/entities/songs.entities';
import { SpotifyService } from 'app/services/spotify/spotify.service';
import { RECENTLY_PLAYED } from 'app/constants';

@Component({
  selector: 'app-home',
  template: `<div [title]="title">{{ title }}</div>`,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  recentlyPlayedSongs: RecentlyPlayedSongs[] = [];

  constructor(private spotifyService: SpotifyService) {}

  async ngOnInit() {
    window.location.hash && this.setAccessToken();

    this.recentlyPlayedSongs = await this.spotifyService.getRecentlyPlayedSongs(
      RECENTLY_PLAYED
    );

    console.log(this.recentlyPlayedSongs);
  }

  private setAccessToken() {
    const accessToken = window.location.hash.split('=')[1].split('&')[0];
    localStorage.setItem('ACCESS_TOKEN', accessToken);
  }
}
