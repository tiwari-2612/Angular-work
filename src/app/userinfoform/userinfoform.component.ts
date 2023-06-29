
import { Component } from '@angular/core';

import { userinfo } from '../userinfo';

@Component({
  selector: 'app-userinfoform',
  templateUrl: './userinfoform.component.html',
  styleUrls: ['./userinfoform.component.css']
})
export class userinfoformcomponent {


  model = new userinfo("abc_2612", "abc", "xyz", "1234567890","abc@gmai.ocom");

  submitted = false;



  onSubmit() { this.submitted = true; }


}

