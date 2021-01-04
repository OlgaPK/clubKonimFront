import { Member } from './../model/Member';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) {}

   private readonly HOST_URL= 'http://localhost:8080/https://sclub.in.ua';
  //  private readonly HOST_URL= 'http://localhost:8080';
  //  private readonly HOST_URL= 'https://sclub.in.ua';
   private readonly CLIENT_URL= '/clients/';  

    getAllClients() : Observable<Member[]>{

      return this.http.get<Member[]>(this.HOST_URL + this.CLIENT_URL + 'all');
    }
  
    getClient(id: number) : Observable<Member> {
  
      return this.http.get<Member>(this.HOST_URL + this.CLIENT_URL + id);
    }

    addClient(client) : Observable<Member>{

      return this.http.post<Member>(this.HOST_URL + this.CLIENT_URL + 'add', client);
    }
  
    updateClient(client: Member) : Observable<Member>{

      return this.http.put<Member>(this.HOST_URL + this.CLIENT_URL + 'update/' + client.id, client);
    }


   
}
