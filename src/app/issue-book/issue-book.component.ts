import { Component, OnInit } from '@angular/core';
import {AllService } from '../_services/all.service';
@Component({
  selector: 'app-issue-book',
  templateUrl: './issue-book.component.html',
  styleUrls: ['./issue-book.component.css']
})
export class IssueBookComponent implements OnInit {
  public studInfo:any;
  public bookInfo:any;
  public rollNo:any;
  public bookId:any;
  public bookName:any;
  public studName:string;
  constructor(private allService:AllService) { 
  //  this.studInfo='';
  
  }

  ngOnInit() {
  }

  searchStud(keyword){

    if(keyword !=''){
      this.allService.searchStudData({keyword:keyword}).subscribe(res=>{
        if(res.msg=='success'){
        console.log(res)
         this.studInfo=res.searchData;
              }
          },error=>{
            
        })
    }else{
      this.studInfo="";
    }
        
  }

  searchBook(keyword){

    if(keyword !=''){
      this.allService.searchBookData({keyword:keyword}).subscribe(res=>{
        if(res.msg=='success'){
        console.log(res)
         this.bookInfo=res.searchData;
              }
          },error=>{
            
        })
    }else{
      this.bookInfo="";
    }
        
  }
  selectedStud(info){
     
    this.rollNo=info.rollNo;
    this.studName=info.fullName;
      
  }

  selectedBook(info){
     
    this.bookName=info.bookName;
    this.bookId=info.id;
      
  }


  issueBook(rollNo,bookId){

    
    if(rollNo !='' && bookId){
      this.allService.issueBookStud({stud_id:rollNo,book_id:bookId,status:'Issue'}).subscribe(res=>{
        if(res.msg=='success'){
        alert(this.studName + "successfully Issued Book ");
        //   this.studInfo="";
        //  this.bookInfo='';
        //  this.bookName='';
        //  this.bookId='';
              }
          },error=>{
            
        })
    }else{
      this.bookInfo="";
    }
        
  
  }
}
