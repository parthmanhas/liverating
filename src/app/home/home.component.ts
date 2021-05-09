import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public categories: string[] = [
    'games',
    'movies',
    'anime',
    'manga'
  ]

  isLoading: boolean = false;
  currentCategory: string = '';

  public list: AppModel[] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.categories = this.categories.sort();
    this.currentCategory = this.categories[0];
    this.list = this.list.sort((a, b) => b.votes - a.votes)

    this.isLoading = true;
    this.http.get('api/list').subscribe((list: AppModel[]) => {
      this.list = list
        .filter(item => item.category === this.categories[0])
        .sort((a, b) => b.votes - a.votes);

      this.isLoading = false;
    });
  }

  vote(id: number, upvote: boolean): void {
    const item = this.list.find(item => item.id == id);
    if (upvote)
      item.votes++;
    else
      item.votes--;

    this.http.post('api/list', item).subscribe(_ => {
      
    });
    this.list = this.list.sort((a, b) => b.votes - a.votes);
  }

  changeCategory(category: string): void {
    this.currentCategory = category;
    this.isLoading = true;
    this.http.get('api/list').subscribe((list: AppModel[]) => {
      this.list = list.filter(a => a.category === category).sort((a, b) => b.votes - a.votes);;
      this.isLoading = false;
    });
  }

}

export interface AppModel {
  id: number;
  name: string,
  votes: number;
  category: string;
}