import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamsComponent } from '../components/streams/streams.component';
import { TokenService } from '../service/token.service';



@NgModule({
  declarations: [StreamsComponent],
  imports: [
    CommonModule
  ],
  providers: [TokenService], 
  exports: [StreamsComponent]
})
export class StreamsModule { }
