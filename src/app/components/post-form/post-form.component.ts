import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from 'src/app/service/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  postForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private postService: PostsService
  ) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.postForm = this.formBuilder.group({
      post: ['', Validators.required]
    });
  }
  submitPost() {
    this.postService.addPost(this.postForm.value).subscribe(data => {
      this.postForm.reset();
    });
  }
}
