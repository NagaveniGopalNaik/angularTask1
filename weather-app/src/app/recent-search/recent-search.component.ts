import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RemoveRecentSearchComponent } from '../remove-recent-search/remove-recent-search.component';
import { WeatherData } from '../weather-data';
@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.css']
})
export class RecentSearchComponent implements OnInit {
  public favourite:boolean=true;
  public favourite1:boolean=false;
  currentData:any;
  data=false;
  data1 = false;
  length=0
  // datas = new WeatherData();
  // icon:any;
  // temp:any;
  constructor(private dialog:MatDialog,private router:Router) { }

  ngOnInit(): void {
    this.dataDetails();

    if(this.length <= 0){
      this.data = true;
      this.data1=false;
    } else {
      this.data1 = true; 
      this.data = false;
    }
    
  }
dataDetails(){
  
    if(localStorage.getItem('recentSearch')){
      this.currentData = localStorage.getItem('recentSearch');
    this.currentData = JSON.parse(this.currentData);
    this.length = this.currentData.length;
    
    }
    
    
}
  change(){
  
    this.favourite = !this.favourite;
    this.favourite1 = !this.favourite1;
  }

  onpenDialog(){
    this.dialog.open(RemoveRecentSearchComponent,{panelClass:'removeAll'});
    this.dataDetails();

  }

  getData(recent:any,id:any){
    localStorage.setItem('id',JSON.stringify(id));
    localStorage.setItem('data', JSON.stringify(recent));
    this.router.navigate(['/home']);
  }
  

}


