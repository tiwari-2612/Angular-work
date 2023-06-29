import { Component } from '@angular/core';
import {userinfo} from "../userinfo";

@Component({
  selector: 'app-emailtest',
  templateUrl: './emailtest.component.html',
  styleUrls: ['./emailtest.component.css']
})
export class EmailtestComponent {
  email="";

  submitted = false;



  onSubmit() { this.submitted = true; }
}
