import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BackendService} from '../../service/backend/backend.service';
import {Blogs} from '../custom.type';

@Component({
  selector: 'app-homenew',
  templateUrl: './homenew.component.html',
  styleUrls: ['./homenew.component.css']
})

export class HomenewComponent implements OnInit {

  public hover = false;
  public blogsContent: Blogs[];

  constructor(private http: HttpClient, private _backendService: BackendService) {

    // this.http.get<Blogs[]>('http://localhost:8087/getallblogs').subscribe(data => {
    //   this.blogsContent = data ;
    //   console.log('blogs_test is : ');
    //   console.log(this.blogsContent);
    // });

    // this._backendService.settestGlobalVal('Hello from homenew');
  }


  ngOnInit() {
    this.blogsContent = this._backendService.getAllBlogContentSelected();
    window.scrollTo(0, 0);
  }

  onMouseOver() {
    this.hover = true;
    console.log('mouse_over is executing');
  }

  onMouseLeave() {
    this.hover = false;
    console.log('mouse_leave is executing');
  }

  onClickTopic(publish_no: number) {
    // not execute this function yet
    // console.log('onClickTopic is executing with parameter' + publish_no);
    // const index = publish_no - 1;
    // this._backendService.setBlogContentSelected(this.blogsContent[index]);
  }
}
