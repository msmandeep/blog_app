import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

import { PostService } from '../service/post.service'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  allPosts: any[] = [];
  singlePost: any;
  constructor(private postService:PostService) { }

  ngOnInit() {
    this.getPosts();
    this.postCallback();
  }

  getPosts(){
   this.postService.getAllPosts()
    .subscribe((result: any)=>{
      debugger
      result.hits.forEach(post=>this.allPosts.push(post))
    })
  }

  postCallback(){
    interval(10000).subscribe((counter) => {
      this.getPosts();
    });
  }
}
