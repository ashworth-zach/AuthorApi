import { Component, OnInit } from '@angular/core';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-addquote',
  templateUrl: './addquote.component.html',
  styleUrls: ['./addquote.component.css']
})
export class AddquoteComponent implements OnInit {

  data:any;
  errors="";
  newQuote:any;
  self = this;
  error:'';
  constructor(private _httpService: HttpService, private route: ActivatedRoute) { }
  ngOnInit(){
    this.findToEdit();
    this.newQuote = { quote: ''}
    // console.log(this.route.params._value.id);
  }
  findToEdit(){
    var observable=this.route.params;
    observable.subscribe((res)=>{
      this._httpService.getTask(res.id)
      .subscribe(data => {
        // console.log(data)
        this.data=data;
      })
      
    })
  }
  addQuote(newQuote){
    var observable=this.route.params;
    observable.subscribe((res)=>{
      this._httpService.postQuote(newQuote,res.id).subscribe(data => {
        if(data['message']=='Error'){
          this.error=data['error']['message']
        }
        console.log("Got data from post back", data);
      })

    })
    // this.findToEdit();
  }
}
