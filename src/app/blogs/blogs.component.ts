import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BackendService} from '../../service/backend/backend.service';
import {Blogs} from '../custom.type';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit, OnDestroy {

  id: number;
  private sub: any;
  strT: string;
  blogSelected: Blogs;
  calendar = '<h2 class="demo">TEST_HTML_STRING</h2><div>TEST222_HTML_XXXX</div><h3>other title</h3>';
  htmlToDisplay: string;

  constructor(private route: ActivatedRoute, private _backendService: BackendService, private http: HttpClient) {
    // this.strT = this._backendService.gettestGlobalVal();
    // console.log('strT is : ', this.strT);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // console.log('blog is : ') ;
      // console.log(params['blogs']);

      // In a real app: dispatch action to load the details here.
      console.log('blogs onInit is executing with id = ' + this.id);
      this.blogSelected = this._backendService.getBlogContentSelected(this.id);
      console.log('this.blogSelected is');
      console.log(this.blogSelected);
      this.htmlToDisplay = this.blogSelected.html_code;
      console.log('this.htmlToDisplay is : ');
      console.log(this.htmlToDisplay);
    });


    // this.blogSelected.html_code = '';

    // console.log('html value is ')
    // console.log(this.blogSelected.html_code);

    // if (this.blogSelected.html_code !== '') {
    //   // console.log('blogs component is executing');
    //   console.log('blogSelected is');
    //   console.log(this.blogSelected);
    //   console.log('html to display is');
    //   console.log(this.blogSelected.html_code);
    // } else {
    //   console.log('else loop is executing')
    //   this.connectToBackend();
    // }

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  // connectToBackend() {
  //   const index = this.id - 1;
  //   this.http.get<Blogs[]>('http://localhost:8087/getallblogs').subscribe(data => {
  //     this.blogSelected = data[index];
  //     console.log('this.blogSelected is : ');
  //     console.log(this.blogSelected);
  //   });
  //
  // }

}
