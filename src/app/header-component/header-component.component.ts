import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss']
})
export class HeaderComponentComponent {

  @Input() LeftSide: any;
  @Input() RightSide: any;
  @Input() CenterSide: any;

  @Output() dataEvent = new EventEmitter<string>();

  select_category(index:number, category:string){
    console.log(index, category);
    if(category == 'left'){
      for (let i = 0; i < this.LeftSide.length; i++) {
        if(i == index){
          this.LeftSide[i].class = "active";
        }else{
          this.LeftSide[i].class = "not-active";
        }
      }
      this.sendDataToParent(this.LeftSide[index].name);
    }
    else if(category == 'right'){
      for (let i = 0; i < this.RightSide.length; i++) {
        if(i == index){
          this.RightSide[i].class = "active";
        }else{
          this.RightSide[i].class = "not-active";
        }
      }
      this.sendDataToParent(this.RightSide[index].name);
    }
    else{
      for (let i = 0; i < this.CenterSide.length; i++) {
        if(i == index){
          this.CenterSide[i].class = "active";
        }else{
          this.CenterSide[i].class = "not-active";
        }
      }
      this.sendDataToParent(this.CenterSide[index].name);
    }


  }

  sendDataToParent(value: string) {
    const dataToSend = value;
    // Emit the event with the data to the parent component
    this.dataEvent.emit(dataToSend);
  }

}
