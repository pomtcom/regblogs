import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BackendService } from '../../service/backend/backend.service' ;
import { TOPICS } from '../topic';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [BackendService]
})
export class HomeComponent implements OnInit {

  value: string = "";
  topics = TOPICS ;

  calendar='<h2 class="demo">somedd title</h2><div>some text</div><h3>other title</h3>' ;
  testHtml = '<div class="demo"><b>This is my HTMLxx.</b></div>';

  constructor(private _BackendService: BackendService) { }

  ngOnInit() {
    this.value = this._BackendService.getApp();
    console.log("value after use service is : " + this.value);
  }

}
