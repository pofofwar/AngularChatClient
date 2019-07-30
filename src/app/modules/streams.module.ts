import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreamsComponent } from '../components/streams/streams.component';
import { TokenService } from '../service/token.service';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';

@NgModule({
  declarations: [StreamsComponent, ToolbarComponent],
  imports: [CommonModule],
  exports: [StreamsComponent]
})
export class StreamsModule {}
