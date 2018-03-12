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
  blogSelected: Blogs;
  htmlToDisplay: string;
  // strT: string;
  // calendar = '<h2 class="demo">TEST_HTML_STRING</h2><div>TEST222_HTML_XXXX</div><h3>other title</h3>';
  constructor(private route: ActivatedRoute, private _backendService: BackendService, private http: HttpClient) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      // In a real app: dispatch action to load the details here.
      console.log('blogs onInit is executing with id = ' + this.id);
      this.blogSelected = this._backendService.getBlogContentSelected(this.id);
      console.log('this.blogSelected is');
      console.log(this.blogSelected);
      this.htmlToDisplay = this.blogSelected.html_code;
      console.log('this.htmlToDisplay is : ');
      console.log(this.htmlToDisplay);
    });
    window.scrollTo(0, 0);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
