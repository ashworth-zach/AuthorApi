import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {

  NewAuthor: any;
  errors="";
  self = this;
  constructor(private _httpService: HttpService) { }
  ngOnInit(){
    this.NewAuthor = { name:"" }

  }
  onSubmit(){
    let observable = this._httpService.addTask(this.NewAuthor);
    observable.subscribe(data => {
      if(data['message']=='Error'){
        this.errors=data['error']['message'];
      }
      else{
        this.errors='';
      }
      console.log("Got data from post back", data);
      this.NewAuthor = {name: ""}
    })
  }
}
