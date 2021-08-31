import { Component } from '@angular/core';
import { PostsService } from './shared/services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: any;
  dataSource: any;
  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  constructor(private _getPosts:PostsService) { }


  ngOnInit() {
    this._getPosts.getPosts()
  .subscribe(response => {
     this.posts= response;
      console.log(this.posts);
     this.dataSource = this.posts;
     })
  
  }
}
