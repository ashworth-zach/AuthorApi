import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'app';
  tasks = {};
  task = {};
  id = '';
  NewAuthor: any;
  editTask = [];
  showEditForm = false;
  errors="";
  self = this;
  constructor(private _httpService: HttpService) { }
  ngOnInit(){
    this.NewAuthor = { name:"" }
    this.tasksOnClick();

  }
  tasksOnClick() {
    this._httpService.getTasks().subscribe(data => {
      console.log("Got our data!", data)
      this.tasks = data;
      console.log("Got our tasks!", this.tasks)
    })
  }
  showOne(id: String) {
    // get one planet
    // set the planet to the child component using Inputs
  }
  taskOnClick(event: any){
    this.task = [];
    this.id = event.target.value;
    let observable = this._httpService.getTask(this.id)
    observable.subscribe(data => {
      console.log("Clicked the button!", this.id)
      this.task = data;
      console.log("Got our task!", this.task)
    })
  }
  onDelete(id){
    let observable = this._httpService.Delete(id);
    observable.subscribe(data => {
      console.log("Got data from post back", data);
      if(data['error']){

      }
      this.tasksOnClick();
    })
  }

 
}
