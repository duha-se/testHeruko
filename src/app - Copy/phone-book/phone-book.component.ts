import { Component, OnInit , Inject, Injectable} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from  '@angular/material/dialog';
import { ContactserService } from '../contactser.service';
import { Contact } from './../Contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent {
      all : Contact[];
      num : Number = 1 ;
      isShowDiv = true;
      public  email:  string  =  "";
      public  password:  string  =  "";
      // img : string[]=["u1.png","u2.png","u3.png","u4.png","u5.png"];
    public cont:Contact = new Contact();     
constructor(private contaSer : ContactserService , private  dialog:  MatDialog, private  router:  Router , 
  private  dialogRef:  MatDialogRef<PhoneBookComponent>,
   @Inject(MAT_DIALOG_DATA) public  data:  any)  { }
public  closeMe() {
  // this.dialogRef.close();
}
login(){
  if(this.email  ===  "email@email.com"  &&  this.password  === "p@ssw0rd")
  {
      this.router.navigate(['success']);
  }
  else
  {
      this.dialog.open(PhoneBookComponent,{ data: {
      message:  "Error!!!"
      }});
  }
}
toggleDisplayDiv() {
  this.isShowDiv = !this.isShowDiv;
}
addContact(){
  // this.toggleDisplayDiv();
}
  getOneContact (){
    
    // this.conta.readSingleContact(this.cont.id).subscribe(res=>{
    //   this.contact[]= res;
    //   console.log(JSON.stringify(this.contact [1].title));
    // })
  }
  getAll(){
    this.contaSer.readAlls().subscribe(res=>{
       this.all=res;

    })
  }

del(id:string){
  console.log(`del: ${id}`)
  this.contaSer.deleteSingleContact(id).subscribe(res=> {
    this.getAll();
    return;
  } , er=>{
    console.log(er);
    })
    
}
udate(){

}
 

}
