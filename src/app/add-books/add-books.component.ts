import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import {AllService } from '../_services/all.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  public bookDetails:FormGroup;
  public submitted =false;
  public allBooksList:[];
  public editBookTemp:any;

  constructor(private allService:AllService) {
    this.booksFormGroup();
    this.bookList();
    this.editBookTemp='';
   }

 // Create a book form  obj
   booksFormGroup(){
      this.bookDetails= new FormGroup({
      bookName : new FormControl(),
      author: new FormControl(),
      publication: new FormControl(''),
      noOfCopy: new FormControl(''),
     });
   }


  ngOnInit() {

  }

  get bookD() { return this.bookDetails.controls; }

  saveBook(){

    this.submitted = true;
    let bookData=this.bookDetails.value;  
    this.bookDetails= new FormGroup({
      bookName : new FormControl(bookData.bookName,[Validators.pattern('[a-zA-Z ]*'),Validators.required,Validators.minLength(2)]),
      author: new FormControl(bookData.author,[Validators.required]),
      publication: new FormControl(bookData.author,[Validators.required]),
      noOfCopy: new FormControl(bookData.noOfCopy,[Validators.required]),
     });
     
     if(this.bookDetails.valid){
      this.allService.saveBookInfo(bookData).subscribe(res=>{
        if(res.msg=='success'){
          this.bookList();
          this.booksFormGroup();
        }
        this.submitted = false;

      },error=>{
        
        this.submitted = false;
      })
     }

  }
  bookList(){

    this.allService.getBookList().subscribe(res=>{
      if(res.msg=='success'){
        console.log(res.bookList)
         this.allBooksList=res.bookList;
      }
      this.submitted = false;

    },error=>{
      
      this.submitted = false;
    })
  }

  deleteBook(bookId){
    this.allService.deleteBook({bookId:bookId}).subscribe(res=>{
      if(res.msg=='success'){
         this.bookList();
      }
      this.submitted = false;

    },error=>{
      
      this.submitted = false;
    })
  }

  editBook(book){
    this.editBookTemp=book;
    this.submitted = true;
    let bookData=book; 
   // this.bookDetails.id=book.id; 
    this.bookDetails= new FormGroup({
      bookName : new FormControl(bookData.bookName,[Validators.pattern('[a-zA-Z ]*'),Validators.required,Validators.minLength(2)]),
      author: new FormControl(bookData.author,[Validators.required]),
      publication: new FormControl(bookData.author,[Validators.required]),
      noOfCopy: new FormControl(bookData.noOfCopy,[Validators.required]),
     });

     
    }


    updateBookInfo(){
      
      this.submitted = true;
      let bookData=this.bookDetails.value;  
      this.bookDetails= new FormGroup({
        bookName : new FormControl(bookData.bookName,[Validators.pattern('[a-zA-Z ]*'),Validators.required,Validators.minLength(2)]),
        author: new FormControl(bookData.author,[Validators.required]),
        publication: new FormControl(bookData.author,[Validators.required]),
        noOfCopy: new FormControl(bookData.noOfCopy,[Validators.required]),
       });
  
       if(this.bookDetails.valid){
        let bookData=this.bookDetails.value;
        bookData.id=this.editBookTemp.id;
        this.allService.updateBookInfo(bookData).subscribe(res=>{
          if(res.msg=='success'){
            this.bookList();
            this.booksFormGroup();
            this.editBookTemp='';
          }
          this.submitted = false;
  
        },error=>{
          
          this.submitted = false;
        })
       }
      }

    
}
