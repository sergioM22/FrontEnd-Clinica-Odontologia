import { Component, OnInit } from '@angular/core';

declare var WatsonAssistantChatOptions: any;
declare var WatsonAssistantChat: any;

@Component({
  selector: 'app-user-dashboard-cli',
  templateUrl: './user-dashboard-cli.component.html',
  styleUrls: ['./user-dashboard-cli.component.css']
})
export class UserDashboardCliComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

    const script = document.createElement('script');
    script.src = 'assets/watson.js';
    document.body.appendChild(script);

    // Puedes inicializar el chat aquí si es necesario
    const options = {
      integrationID: '976052ff-7514-41d0-973c-4ea7f52d04da',
      region: 'Es'
      // Otras opciones según tu configuración
    };

    WatsonAssistantChatOptions = options;
    WatsonAssistantChat.init();

  }

}
