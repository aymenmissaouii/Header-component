import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'header-component';

  Left=[
    {
      name:"assets/angular-icon.png",
      class:"image",
      type:"image"
    },
    {
    name:"Dashboard",
    class:"active",
    type:"text"
  },
  {
    name:"Team",
    class:"not-active",
    type:"text"
  },
  {
    name:"Projects",
    class:"not-active",
    type:"text"
  },
  {
    name:"Calendar",
    class:"not-active",
    type:"text"
  }
];

  right = [
    {
      name:"assets/svg/notifications.svg",
      class:"icon",
      type:"image"
    },
    {
      name:"assets/images/user.jpg",
      class:"image",
      type:"image"
    }


  ];

  center = [
    {}
  ];


  receivedData: string = "Home";

  onDataReceived(data: string) {
    // Handle the data received from the child component
    this.receivedData = data;
  }
}
