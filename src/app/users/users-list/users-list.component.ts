import { Component, OnInit } from '@angular/core';
declare var $: any;
//import * as $ from 'jquery';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  
  users$: any[] = [];
  dtOptions: DataTables.Settings = {};
 // dtTrigger: Subject<any> = new Subject();

  constructor() {
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    
      this.users$ = [{'name':'amol', 'email':'amol.bedge@imuons.com','website':'www.imuons.com'}];
   //   this.dtTrigger.next();
   
  }

  ngOnDestroy(): void {
    //this.dtTrigger.unsubscribe();
  }

}
