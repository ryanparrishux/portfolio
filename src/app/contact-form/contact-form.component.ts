import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

//import {ContactService} from './contact.service';
//import {AirtableData} from './contact.models';
//import {FormControl} from '@angular/core'
import {HttpClient, HttpHeaders} from "@angular/common/http";




@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})


export class ContactFormComponent implements OnInit {

//Define Form Properties   
 // Name = new FormControl('');
  //Email = new FormControl('');
  //Message = new FormControl('');
      
  //Call HTTP Service and Contact Service 
   // constructor(private http:HttpClient, private ContactService:ContactService) {
  //  }
  form: FormGroup;

//Formbuilder Group 
  constructor(
    public fb: FormBuilder,
    private http: HttpClient
  ) {
    this.form = this.fb.group({
      Name: [''],
      Email: [''],
      Message: ['']
    })
  }


  stringifiedData: any;  
  
  // Object Data  
  AirtableData = { 
    records:[
      {
      fields:{
        Name: "" ,
        Email: "",  
        Message: "" 
      }
      }
    ] 
  };  
  

  
ngOnInit(){
//Convert to JSON 


this.stringifiedData = JSON.stringify(this.AirtableData);  
  console.log("With Stringify :" , this.stringifiedData); 
 

}



submitForm() {

//Define HTTP Header as JSON 
let headers = new HttpHeaders();
headers = headers.set('Content-Type', 'application/json; charset=utf-8');


//Collect Form Data   
var formData: any = new FormData();
  formData.append('Name', this.form.get('Name').value);
  formData.append('Message', this.form.get('Message').value);
  formData.append('Email', this.form.get('Email').value);

  //Post Data 
 
  this.http.post('https://api.airtable.com/v0/appczYik55k1acHEi/Contact%20Form?api_key=keyXJaDEIrVA6knai', this.AirtableData).subscribe(
    (response) => console.log(response),
    (error) => console.log(error)
  )
}
      //post form method
  //  PostFormData() {
      
    //  this.ContactService.PostForm().subscribe((data:AirtableData) =>{
        // Map Properties to Modals 
        //this.Name = data.Name;
       // this.Email = data.Email;
        //this.Message = data.Message;
      //  });
    //  }
    }
  //subscribe to service 
   // PostAirtableData():void{
  
 // this.ContactService.PostForm().subscribe((data:AirtableData) =>{
 // this.PostForm = data;
 // });
  
    
 // }
