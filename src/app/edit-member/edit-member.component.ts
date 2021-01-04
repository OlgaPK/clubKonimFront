import { Member } from './../model/Member';
import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';
import { HttpServiceService } from '../service/http-service.service';
import { FormBuilder, Validators, FormArray } from '@angular/forms';



@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.scss']
})
export class EditMemberComponent implements OnInit {
  
  @Input() member : Member;
  @Output() updatedMember = new EventEmitter();
  
  memberForm = this.fb.group({
    id: [''],
    firstName: ['',  Validators.required],
    lastName: [''],   
    gender: [''],
    birthday: [''],
    nick: [''],
    password: [''],
    login: [''],
    phone: [''],
    email: [''],
    tag: [''],
    note: [''],
    status: [''],
    userType: [''],
    level: [''],
    regions: [''],
    partnerId: [''],
    analytics: [''],
  });
  
  
  constructor(private fb: FormBuilder, private memberService : HttpServiceService) { }
  
  ngOnInit(): void {
   
   this.memberForm.setValue(this.member);
    
  }

  updateClient(){ 
    const updatedMember = new Member(this.memberForm.get("id").value, this.memberForm.get("lastName").value, 
                                    this.memberForm.get("firstName").value, 0, "", "", "", "", 
                                    this.memberForm.get("phone").value);
    console.log(updatedMember);
    
    this.memberService.updateClient(updatedMember).subscribe((res : any)=>{   
    this.updatedMember.emit(updatedMember); //TODO change to res from back
   },
  (err)=> {console.log(err)
  });
  
  }

  
}
