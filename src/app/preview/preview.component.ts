import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PreviewComponent implements OnInit {

  calendar = '<h2 class="demo">TEST_HTML_STRING</h2><div>TEST222_HTML_XXXX</div><h3>other title</h3>';

  constructor() { }

  ngOnInit() {
  }

}
