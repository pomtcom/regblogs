import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {BackendService} from '../../service/backend/backend.service';
import {Topic, TOPICS} from '../topic';

import {HttpClient, HttpHeaders} from '@angular/common/http';

import 'rxjs/add/operator/map';  // we need to import this now

// import { catchError, map, tap } from 'rxjs/operators';


interface Blogs {
  publish_no: number;
  topic_name: string;
  thumbnail: string;
  short_description: string;
  body_content: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [BackendService]
})


export class HomeComponent implements OnInit {

  value = '';
  topics = TOPICS;

  httpResponse = '';

  public blogsContent: Blogs[];


  calendar = '<h2 class="demo">TEST_HTML_STRING</h2><div>TEST222_HTML_XXXX</div><h3>other title</h3>';
  testHtml = '<div class="demo"><b><u>This is my HTMLxx.</u></b></div>';
  testHtml2 = '<div class="demo">Test color below here</div> <div class="demo">Second line</div>';

  constructor(private _BackendService: BackendService, private http: HttpClient) {

    this.http.get<Blogs[]>('http://localhost:8087/getallblogs').subscribe(data => {
      this.blogsContent = data ;
      console.log('blogs_test is : ');
      console.log(this.blogsContent);
    });

  }

  ngOnInit() {
    this.value = this._BackendService.getApp();
    console.log('value after use service is : ' + this.value);
  }


  onClickBtn() {


    console.log('TESTCLICK12345');
    this._BackendService.getBackEndGo().subscribe(data => {
      console.log('response data is : ');
      console.log(data);
    });
    // this.httpResponse = this._BackendService.getBackEndGo();

    // console.log();
  }


  onClickBtn2() {

    console.log('onclickbtn2 is executing');
    this.http.get('http://localhost:8087/getallblogs').subscribe(data => {
      console.log(data);
    });

  }


  onClickBtn3() {

    console.log('onclickbtn3 is executing');
    this.http.get<Blogs[]>('http://localhost:8087/getallblogs').subscribe(data => {

      console.log('all is : ');
      console.log(data);
      console.log('test is ' + data[0].publish_no);

    });


    // this.http.get('http://localhost:8087/getallblogs').subscribe(data => {
    //   console.log('non fix');
    //   console.log(data[0].topic_name);
    // });

  }


}
