import { Component, OnInit } from '@angular/core';
// import * as CryptoJs from 'crypto-js';
import * as CryptoJS from 'crypto-js'; 
@Component({
  selector: 'app-encryption-decription',
  templateUrl: './encryption-decription.component.html',
  styleUrls: ['./encryption-decription.component.css']
})
export class EncryptionDecriptionComponent implements OnInit {
  public message: string ='';
  public message1: string ='';
  public password1: string='hjdfhlak';
  public encryptedMessage: string='';
  // public encryptedMessage1: string='';
  public decryptedMessage: string='';
  public decryptedMessage1: string='';
  
  display=false;
  constructor() { }

  ngOnInit(): void {
  }
  encrypt() {
    this.display = true;
    this.encryptedMessage = CryptoJS.AES.encrypt( this.message.trim(), this.password1.trim()).toString();
    this.decryptedMessage = CryptoJS.AES.decrypt(this.encryptedMessage, this.password1.trim() ).toString(CryptoJS.enc.Utf8);
    // this.encryptedMessage1 = CryptoJS.AES.encrypt( this.password1.trim(), 'hello').toString();
    
   }

   encrypt1(){
     this.display = true;
     this.encryptedMessage = CryptoJS.AES.encrypt( this.message1.trim(), this.password1.trim()).toString();
     this.decryptedMessage1 = CryptoJS.AES.decrypt(this.encryptedMessage, this.password1.trim() ).toString(CryptoJS.enc.Utf8);
    //  this.decryptedMessage = CryptoJS.AES.decrypt(this.encryptedMessage, this.password1.trim() ).toString(CryptoJS.enc.Utf8);
    //  this.decryptedMessage = CryptoJS.AES.decrypt(this.encryptedMessage1,'hello').toString(CryptoJS.enc.Utf8);
   }
  

}
