import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  data:any;
  errors="";
  editAuthor:any;
  self = this;
  error:'';
  constructor(private _httpService: HttpService, private route: ActivatedRoute) { }
  ngOnInit(){
    this.findToEdit();
    this.editAuthor = { name:this.data.name }
  }
  findToEdit(){
    var observable= this.route.params;
    observable.subscribe((res)=>{
      console.log("RESP",res);
      this._httpService.getTask(res.id)
      .subscribe(data => {
        this.data=data['data'];
      })
    })
  }
  onEdit(editTask){
    console.log("Edit the task", editTask._id)
    let observable = this._httpService.editTask(editTask);
    observable.subscribe(data => {
      if(data['message']=='Error'){
        this.error=data['error']['message']
      }
      console.log("Got data from post back", data);
    })
    this.findToEdit();
  }
}

