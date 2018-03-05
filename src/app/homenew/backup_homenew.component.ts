import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BackendService} from '../../service/backend/backend.service';



interface Blogs {
  publish_no: number;
  topic_name: string;
  thumbnail: string;
  short_description: string;
  body_content: string;
  hover: false;
}

@Component({
  selector: 'app-homenew',
  templateUrl: './homenew.component.html',
  styleUrls: ['./homenew.component.css'],
  providers: [BackendService]
})

export class HomenewComponent implements OnInit {

  public hover = false;
  public blogsContent: Blogs[];
  constructor(private http: HttpClient) {

    this.http.get<Blogs[]>('http://localhost:8087/getallblogs').subscribe(data => {
      this.blogsContent = data ;
      console.log('blogs_test is : ');
      console.log(this.blogsContent);
    });
  }


  ngOnInit() {
  }

  onMouseOver() {
    this.hover = true ;
    console.log('mouse_over is executing');
  }

  onMouseLeave() {
    this.hover = false ;
    console.log('mouse_leave is executing');
  }

  onClickTopic(publish_no: number) {
    console.log('mouse click with parameter' + publish_no);
  }
}
