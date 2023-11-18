import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile-cli',
  templateUrl: './profile-cli.component.html',
  styleUrls: ['./profile-cli.component.css']
})
export class ProfileCliComponent implements OnInit {

  user:any = null;

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
   this.user = this.loginService.getUser();

  }

}
