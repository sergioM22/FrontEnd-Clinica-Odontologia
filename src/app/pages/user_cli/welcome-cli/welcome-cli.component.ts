import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-welcome-cli',
  templateUrl: './welcome-cli.component.html',
  styleUrls: ['./welcome-cli.component.css']
})
export class WelcomeCliComponent implements OnInit {

  user:any = null;

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {

    this.user = this.loginService.getUser();
  }

}
