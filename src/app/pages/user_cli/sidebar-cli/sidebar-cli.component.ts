import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Chat } from 'src/app/model/chat';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriaService } from './../../../services/categoria.service';

@Component({
  selector: 'app-sidebar-cli',
  templateUrl: './sidebar-cli.component.html',
  styleUrls: ['./sidebar-cli.component.css']
})
export class SidebarCliComponent implements OnInit {
  check = sessionStorage.getItem('username');

  chatId: any = 0;
  successregister: boolean = false;
  registermsg = "";
  alert = "";
  loginmsg = "";
  alert2 = "";
  successlogin: boolean = false;
  public alluser: any = [];
  secondUsername = "";
  chatObj: Chat = new Chat();
  public chatData: any = [];
  loggedIn: boolean = false;
  loggedOut: boolean = true;
  chatbox: boolean = true;

  categorias:any;

  constructor(
    private categoriaService:CategoriaService,
    private snack:MatSnackBar,
    private router: Router,
    private chatService: ChatService,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    console.log("Nombre Usuario:"+sessionStorage.getItem('username'))
    let all = setInterval(() => {

      this.userService.getAll().subscribe((data) => {
        console.log(data);
        console.log(sessionStorage.getItem('chatId'))
        console.log(sessionStorage.getItem('username'))
        this.alluser = data;
        console.log(this.alluser)
      })
    }, 1000);
  }

  
  goToChat(username: any) {
    this.chatService.getChatByFirstUserNameAndSecondUserName(username, sessionStorage.getItem("username") ?? "").subscribe(
      (data) => {
        this.chatId = data.chatId;
        sessionStorage.setItem("chatId", this.chatId);

        sessionStorage.setItem("gotochat", "false");
        this.router.navigateByUrl('/chat');
      },
      (error) => {
        if (error.status == 404) {
          this.chatObj.firstUserName = sessionStorage.getItem("username") ?? "";
          this.chatObj.secondUserName = username;
          this.chatService.createChatRoom(this.chatObj).subscribe(
            (data) => {
              this.chatData = data;
              this.chatId = this.chatData.chatId;
              sessionStorage.setItem("chatId", this.chatData.chatId);

              sessionStorage.setItem("gotochat", "false");
              this.router.navigateByUrl('/chat');
            })
        } else {

        }
      });

  }


}