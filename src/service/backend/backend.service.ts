import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Blogs} from '../../app/custom.type';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class BackendService {

  blogsContentGlobal: Blogs[];
  testGlobalVal: string;
  configUrl = 'http://localhost:8087/people';
  blogContentSelected: Blogs;

  // configUrl = 'https://address-book-demo.herokuapp.com/api/contacts';

  constructor(private http: HttpClient) {
    // this.http.get<Blogs[]>('http://localhost:8087/getallblogs').subscribe(data => {
    //   this.blogsContentGlobal = data;
    //   console.log('backendservice constructor is executing');
    //   console.log('blogsContentGlobal is : ');
    //   console.log(this.blogsContentGlobal);
    //   console.log('array[0] is ');
    //   console.log(this.blogsContentGlobal[0]);
    // });
  }

  initializeApp(): Promise<any> {
    console.log(`InitialzaApp before call rest`);
    // const promise = this.http.get<Blogs[]>('http://localhost:8087/getallblogs')
    const promise = this.http.get<Blogs[]>('/api/getallblogs')
      .toPromise()
      .then(data => {
        console.log(`return from API: `, data);
        this.blogsContentGlobal = data;
        console.log(this.blogsContentGlobal);
        console.log('call rest is completed');
        console.log('almost return data');
        return this.blogsContentGlobal;
      });

    return promise;
  }

  setBlogContentSelected(blogsClick: Blogs) {
    console.log('set selected blog is executing');
    this.blogContentSelected = blogsClick;
    console.log('this.blogContentSelected is ');
    console.log(this.blogContentSelected);
  }

  getBlogContentSelected(id: number): Blogs {
    // this.blogContentSelected = this.blogsContentGlobal[index];
    console.log('get selected blog is executing');
    const index = id - 1;
    // console.log('index is');
    // console.log(index);
    // console.log('this.blogsContentGlobal is');
    // console.log(this.blogsContentGlobal);
    // console.log('this.blogsContentGlobal[0] is');
    // console.log(this.blogsContentGlobal[0]);
    this.blogContentSelected = this.blogsContentGlobal[index];
    return this.blogContentSelected;
  }

  getAllBlogContentSelected(): Blogs[] {
    console.log('get all blog is executing');
    return this.blogsContentGlobal;
  }

  init() {
    console.log('before call rest');

    this.http.get<Blogs[]>('http://localhost:8087/getallblogs').subscribe(data => {
      this.blogsContentGlobal = data;
      console.log('backendservice init() is executing');
      console.log('blogsContentGlobal is : ');
      console.log(this.blogsContentGlobal);
      console.log('array[0] is ');
      console.log(this.blogsContentGlobal[0]);
    });

    console.log('after call rest');
  }

  getApp(): string {
    return 'Hello world by service example';
  }

  getBackEndGo() {

    console.log('executing get');
    console.log('Result is : ');
    console.log(this.configUrl);

    return this.http.get(this.configUrl);
  }

  settestGlobalVal(valString: string) {
    console.log('settest is executing');
    this.testGlobalVal = valString;
  }

  gettestGlobalVal() {
    console.log('gettest is executing');
    return this.testGlobalVal;
  }

  getBlogsGlobal() {
    console.log('getBlogsGlobal is executing');
    console.log('result is ');
    console.log(this.blogsContentGlobal);
    return this.blogsContentGlobal;
  }


}
