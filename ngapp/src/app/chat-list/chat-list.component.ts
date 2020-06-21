import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {

  entities: object[];
  constructor() {
    this.entities = [{
      username: 'Group'
    }];
  }

  ngOnInit(): void {
  }

}
