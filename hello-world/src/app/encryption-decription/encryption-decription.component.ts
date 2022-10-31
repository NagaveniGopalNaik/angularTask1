import { Component, OnInit } from '@angular/core';
import * as CryptoJs from 'crypto-js';
@Component({
  selector: 'app-encryption-decription',
  templateUrl: './encryption-decription.component.html',
  styleUrls: ['./encryption-decription.component.css']
})
export class EncryptionDecriptionComponent implements OnInit {
username="";
password = '';
encryptText = '';
decryptText = '';
  constructor() { }

  ngOnInit(): void {
  }
  encryption(){
    console.log('encryption');
    // this.encryptedMessage = CryptoJS.AES.encrypt( this.message.trim(), this.password.trim()).toString();
    this.encryptText = CryptoJs.AES.encrypt(this.username.trim(),this.password.trim().toString());
  }
  convertText(encrypt:any){
    console.log('decryption');
    
  }

}
