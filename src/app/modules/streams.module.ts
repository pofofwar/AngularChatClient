import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamsComponent } from '../components/streams/streams.component';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { SideComponent } from '../components/side/side.component';
import { PostFormComponent } from '../components/post-form/post-form.component';
import { PostsComponent } from '../components/posts/posts.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [StreamsComponent,
    ToolbarComponent,
    SideComponent, PostFormComponent, PostsComponent],
  imports: [CommonModule,
    ReactiveFormsModule, HttpClientModule],
  exports: [StreamsComponent]
})
export class StreamsModule {}
