import { Member } from './../../model/Member';
import { HttpServiceService } from './../../service/http-service.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'all-members',
  templateUrl: './all-members.component.html',
  styleUrls: ['./all-members.component.scss']
})
export class AllMembersComponent implements OnInit {

  public currentMember = new Member();
  public members: Member[] = [];
  public newMember = false;
  public editMember: true;
  
  constructor(private memberService : HttpServiceService) { }

  ngOnInit(): void {
    this.getAllMembers();
  }
 
  getAllMembers(){
    this.memberService.getAllClients().subscribe((data)=>{
    this.members = data;
  })
   return this.members;
  }

  updateMembersList(member : Member){
    const index = this.members.findIndex(m => m.id === member.id); 
    this.members[index] = member;
    this.editMember = true;
  }

  // updateClient(member : Member){    
  //   this.memberService.updateClient(member).subscribe((res : any)=>{   
  //   const index = this.members.findIndex(m => m.id === member.id); //esli buder err, to ne otrabotaet
  //   this.members[index] = member;
  // },
  // (err)=> {console.log(err)
  // });
  
  // console.log(member);

  // }

  newClient(){
    this.newMember = true;
  }

  addClient(member : Member){
    this.memberService.addClient(member).subscribe((res : any)=>{
      this.members.push(member);
  },
  (err)=> {console.log(err)
  });
  
  console.log(member);
    this.newMember = false;
  }

  edit(member){
    this.editMember = true;
    this.currentMember = member;
    console.log(member);
  }
}
