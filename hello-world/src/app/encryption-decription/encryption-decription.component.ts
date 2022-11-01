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
  public password1: string='';
  public encryptedMessage: string='';
  public decryptedMessage: string='';
  constructor() { }

  ngOnInit(): void {
  }
  encrypt() {
    this.encryptedMessage = CryptoJS.AES.encrypt( this.message.trim(), this.password1.trim()).toString();
    this.decryptedMessage = CryptoJS.AES.decrypt( this.encryptedMessage,  this.password1.trim() ).toString(CryptoJS.enc.Utf8);
   }

}
