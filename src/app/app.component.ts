import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Live Rating';

  public categories: string[] = [
    'games',
    'movies',
    'anime',
    'manga'
  ]

  currentCategory: string = this.categories[0];

  public list: AppModel[] = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.categories = this.categories.sort();
    this.list = this.list.sort((a, b) => b.votes - a.votes)

    this.http.get('api/list').subscribe((list: AppModel[]) => {
      this.list = list
        .filter(item => item.category === this.categories[0])
        .sort((a, b) => b.votes - a.votes);
    })
  }

  vote(id: number, upvote: boolean): void {
    const item = this.list.find(item => item.id == id);
    if (upvote)
      item.votes++;
    else
      item.votes--;
    this.http.post('api/list', item).subscribe(_ => console.log('updated', item.id));
    this.list = this.list.sort((a, b) => b.votes - a.votes);
  }

  changeCategory(category: string): void {
    this.currentCategory = category;
    this.http.get('api/list').subscribe((list: AppModel[]) => {
      this.list = list.filter(a => a.category === category);
    })
  }

}

export interface AppModel {
  id: number;
  name: string,
  votes: number;
  category: string;
}