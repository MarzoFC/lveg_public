// search.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private API_URL = 'https://www.googleapis.com/youtube/v3/search';
  private API_TOKEN = 'AIzaSyDJ4qpVMuuLs35WTJ2cw1RIj3kcNQyEDFY';

  constructor(private http: HttpClient) {}

  getVideos(): Observable <any> {
    const url = `${this.API_URL}?key=${this.API_TOKEN}&channelId=UCTcIUy7E3dD-aZO54dxWW1Q&part=snippet&type=video&maxResults=100`;    
    return this.http.get(url)
      .pipe(
        map((response: any) => response.items)
      );
  }
}
