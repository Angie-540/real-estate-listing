import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  user$ = this.authService.currentUser$;

  constructor(private authService: AuthenticationService) {

  }

  ngOnInit(): void {

  }

    // readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  
    // housingLocation: HousingLocation = {
    //   id: 9999,
    //   name: 'Test Home',
    //   city: 'Test city',
    //   state: 'ST',
    //   photo: `${this.baseUrl}/example-house.jpg`,
    //   availableUnits: 99,
    //   wifi: true,
    //   laundry: false,
    // };
  



}
