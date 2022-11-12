import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const API_KEY = environment.API_KEY;
const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  constructor(public httpClient:HttpClient) { }

  loadData(data:any){
    return this.httpClient.get(`${API_URL}/weather?q=${data}&appid=${API_KEY}`);
  }

  addData(data:any){
    let datas = [];
    if(localStorage.getItem('recentSearch')){
      let oldData = JSON.parse(localStorage.getItem('recentSearch') || '[]');
<<<<<<< HEAD
      let previousData = oldData.find((old:any)=>{
        return old['name']== data['name'];
      })
      if(previousData == undefined){
        datas=[data,...oldData];
      }
      else {
        let searchedData = oldData.indexOf(previousData);
      let currentValue = oldData.splice(searchedData,1)[0]
      datas= [currentValue,...oldData];
      }
      // datas = [data,...oldData];
=======
    
>>>>>>> 8286b8893e531bda6ea8b5be9816bcbd349958d6
    
    } else {
      datas = [data]
    }
    localStorage.setItem('recentSearch',JSON.stringify(datas));
<<<<<<< HEAD
    
=======
 
>>>>>>> 8286b8893e531bda6ea8b5be9816bcbd349958d6
    
  }
}
