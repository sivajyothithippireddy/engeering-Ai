import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FirstserviceService {
  static gettabledata() {
    throw new Error("Method not implemented.");
  }

  constructor(private ht:HttpClient) { }

  gettabledata(){
     return this.ht.get("https://hn.algolia.com/api/v1/search_by_date?tags=story")
  }
}
