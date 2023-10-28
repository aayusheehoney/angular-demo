import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learnapp';
  callMe(name:string, name2:string){
    window.alert(name +" "+ name2)
  }
  keyupData(vlue:any){
    console.log(vlue)
  }
  
  displayVal:string="";
  getValue(val:string){
    this.displayVal= val;
  }
  
  //make counter
  count:number=0;
  counter(type:string){
    if(type ==='plus'){
      this.count++;
    }else{this.count--;}
  }

}