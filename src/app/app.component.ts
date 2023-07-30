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
      class:"",
      type:"image"
    },
    {
    name:"Home",
    class:"active",
    type:"text"
  },
  {
    name:"About",
    class:"not-active",
    type:"text"
  },
  {
    name:"Featured",
    class:"not-active",
    type:"text"
  },
  {
    name:"Pricing",
    class:"not-active",
    type:"text"
  }
];

  right = [
    {
      name:"Login",
      class:"button",
      type:"button"
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
