import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';
//import * as myGlobal from '../globals';


@Injectable({
  providedIn: 'root'
})
export class AllService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public baseUrl:string;

  constructor(private http: HttpClient) {
        this.baseUrl='http://localhost:8080/library_mang/api/';
    }


saveBookInfo(formData:any) {
    return this.http.post<any>(this.baseUrl+`saveBookInfo`,formData)
        .pipe(map(res => {
                     return res;
        }));
}

getBookList() {
  return this.http.get<any>(this.baseUrl+`getBookList`)
      .pipe(map(res => {
                   return res;
      }));
}

deleteBook(formData:any) {
  return this.http.put<any>(this.baseUrl+`deleteBook`,formData)
      .pipe(map(res => {
                   return res;
      }));
}

updateBookInfo(formData:any) {
  return this.http.post<any>(this.baseUrl+`updateBookInfo`,formData)
      .pipe(map(res => {
                   return res;
      }));
}
searchStudData(formData:any) {
  return this.http.post<any>(this.baseUrl+`searchStud`,formData)
      .pipe(map(res => {
                   return res;
      }));
}

searchBookData(formData:any) {
  return this.http.post<any>(this.baseUrl+`searchBook`,formData)
      .pipe(map(res => {
                   return res;
      }));
}

issueBookStud(formData:any) {
  return this.http.post<any>(this.baseUrl+`issueBook`,formData)
      .pipe(map(res => {
                   return res;
      }));
}
}
