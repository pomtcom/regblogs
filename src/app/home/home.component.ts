import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../service/backend/backend.service' ;
import { TOPICS } from '../topic';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [BackendService]
})
export class HomeComponent implements OnInit {

  value: string = "";
  topics = TOPICS ;

  constructor(private _BackendService: BackendService) { }

  ngOnInit() {
    this.value = this._BackendService.getApp();
    console.log("value after use service is : " + this.value);
  }

}
