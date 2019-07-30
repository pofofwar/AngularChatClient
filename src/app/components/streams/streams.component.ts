import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css']
})
export class StreamsComponent implements OnInit {
  token: string;

  constructor(private tokenService: TokenService) {}

  ngOnInit() {
    this.token = this.tokenService.getToken();
  }
}
