import { Injectable } from '@angular/core';

@Injectable()
export class BackendService {

  constructor() { }

  getApp(): string { 
    return "Hello world by service example"; 
 } 

}
