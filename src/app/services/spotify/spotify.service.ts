import { Injectable } from '@angular/core';
import { ApiService } from 'app/services/api/api.service';
import { Songs } from 'app/models/entities/songs.entities';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  SPOTIFY_API_URL: string = 'https://api.spotify.com/v1/me/';

  constructor(private api: ApiService) {}

  async getSongs(path: string): Promise<Songs[]> {
    return this.api
      .get(`${this.SPOTIFY_API_URL}${path}`, {})
      .then((response) => response.data.items)
      .catch((error) => {
        throw new Error(error);
      });
  }
}
