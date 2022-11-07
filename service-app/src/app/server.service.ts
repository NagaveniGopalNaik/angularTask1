import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface admin extends Array <admin[]>{
  name: string;
  employeeCode:string;
  mailId:string;
  id:string;
}

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private server:HttpClient) { }

  addSuperAdmin(body:any):Observable<admin[]>{
  

    return this.server.post<admin[]>('http://localhost:3000/super-admin',body);

  }

  getSuperAdmin():Observable<admin[]>{
    

    return this.server.get<admin[]>('http://localhost:3000/super-admin');

  }

  deleteSuperAdmin(id:any):Observable<admin[]>{
    return this.server.delete<admin[]>('http://localhost:3000/super-admin/'+id);
}

updateSuperAdmin(id:any,body):Observable<admin[]>{
  // debugger;
  return this.server.put<admin[]>('http://localhost:3000/super-admin/'+id,body)
}


// admin details

addAdmin(body:any):Observable<admin[]>{
  

  return this.server.post<admin[]>('http://localhost:3000/admin',body);

}

getAdmin():Observable<admin[]>{
  

  return this.server.get<admin[]>('http://localhost:3000/admin');

}

deleteAdmin(id:any):Observable<admin[]>{
  return this.server.delete<admin[]>('http://localhost:3000/admin/'+id);
}

updateAdmin(id:any,body):Observable<admin[]>{
return this.server.put<admin[]>('http://localhost:3000/admin/'+id,body)
}

}
