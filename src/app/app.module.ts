import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllMembersComponent } from './pages/all-members/all-members.component';
import { RegionSortPipe } from './pipes/region-sort.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { AddMemberComponent } from './add-member/add-member.component';


@NgModule({
  declarations: [
    AppComponent,
    AllMembersComponent,
    RegionSortPipe,
    EditMemberComponent,
    AddMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
