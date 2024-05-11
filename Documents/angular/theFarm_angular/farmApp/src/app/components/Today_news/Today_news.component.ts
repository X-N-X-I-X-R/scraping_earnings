// Today_news.component.ts
import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-Today_news',
  templateUrl: './Today_news.component.html',
  styleUrls: ['./Today_news.component.css']
})
export class Today_newsComponent implements OnInit {
  news$: Observable<any>;

  constructor(private newsService: NewsService) {
    this.news$ = this.newsService.getNews();
  }

  ngOnInit() {
    // No need to assign the result of getNews() again
  }
}