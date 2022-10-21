import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';


interface user{
  name:String,
  email:String;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  
  constructor( private http:HttpClient) {
    
   }
   
   getUsers():Observable<user>{

    // set header 
    // let header = new HttpHeaders({
    //   'content-type': 'application/form',
    //   'authenticationToken':'123456'
    // });
// set param in api
    let param = new HttpParams()
    .set('pageSize','10')
    .set('pageOptions','100');
    // return this.http.get<user>('https://jsonplaceholder.typicode.com/users');
     return this.http.get<user>('https://jsonplaceholder.typicode.com/users',{params:param});
   }

   addUser(body:any){
    // const header = new HttpHeaders({
    //   'content-type': 'application/form'
    // });
    const param = new HttpParams()
    .set('pageSize','10')

     return this.http.post('https://jsonplaceholder.typicode.com/posts',body,{params:param});

   }

   updateUser():Observable<user>{
     const user = {
       name :"nagaveni",
       id : 1
     };

    //  const header = new HttpHeaders({
    //   'content-type': 'application/form'
    // });
    const param = new HttpParams()
    .set('pageSize','10')

     return this.http.put<user>('https://jsonplaceholder.typicode.com/users/1',user,{params:param});
   }
   deleteUser(id:any){

    // const header = new HttpHeaders({
    //   'content-type': 'application/form'
    // });
    const param = new HttpParams()
    .set('pageSize','10')

     return this.http.delete('https://jsonplaceholder.typicode.com/users/'+id,{params:param});
   }

   

  
}


