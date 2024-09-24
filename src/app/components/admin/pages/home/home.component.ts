
import { Component } from '@angular/core';

// service
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor( private authService:AuthService){}

  ngOnInit(): void{


  }
  public logout(){
    this.authService.logout();
  }


}
