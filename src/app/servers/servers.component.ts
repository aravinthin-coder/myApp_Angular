import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',  //By Class
  templateUrl: './servers.component.html',
  //template:'<app-server></app-server>', //For Same line operation
  // template:`
  // <app-server></app-server>
  // <app-server></app-server>`, //For MultiLine code
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No Server was created!";
  serverName = 'Test';
  serverCreated = false;
  servers = ['Test', 'Test 2']; //array of servers 

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName); //To add new server to array
    this.serverCreationStatus="Server was created! The name is " + this.serverName ;
  }
  onUpdateServerName(even: any ){
      // console.log(event);
      this.serverName = (<HTMLInputElement>event.target).value;
  }
}
