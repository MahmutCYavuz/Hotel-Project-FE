import { Injectable } from '@angular/core';
// import { User } from './rezervation/rezervation.component';
import { User } from './rezervation/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoomType } from './models/roomtype.model';
import { ContactModel } from './contact/contact.component';


@Injectable({
  providedIn: 'root'
})

@Injectable()
export class UserService {

  private usersUrl: string;
  private contactUrl : string;
  private users!: any[];
  private rooms!: RoomType[];


  constructor(private http: HttpClient) { 
    this.usersUrl = 'http://localhost:8080/invoiceguests/save';
    this.contactUrl = 'https://64b58414f3dbab5a95c769e2.mockapi.io/contact';
  }

  public findAll(): void {

       this.http.get<User[]>("http://localhost:8080/invoiceguests").subscribe(
      (response) => {
        this.users = response; // Backendden gelen user nesnelerini users değişkenine ata
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public findRooms2(): any {
    return this.http.get("http://localhost:8080/roomType/getAll");
  }
  

//   public findRooms(): RoomType[] {

//     this.http.get<any>("http://localhost:8080/roomType/getAll").subscribe(
//    (response) => {
//     this.rooms  = response; // Backendden gelen user nesnelerini users değişkenine ata
//      console.log(response);
//      return response ;
//    },
//    (error) => {
//      console.error(error);
//    }
//     );
//  return this.rooms;
 
// }


//   public findRooms(): RoomType[] {

//     this.http.get<RoomType[]>("http://localhost:8080/roomType/getAll").subscribe(
//    (response) => {
//     this.rooms  = response; // Backendden gelen user nesnelerini users değişkenine ata
//      console.log(response);
//      return response ;
//    },
//    (error) => {
//      console.error(error);
//    }
//     );
//  return this.rooms;
// }




  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

  public sendContact(contactModel : ContactModel){
     return this.http.post<ContactModel>(this.contactUrl, contactModel);
  }
}
