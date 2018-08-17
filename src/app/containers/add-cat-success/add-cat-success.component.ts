import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-add-cat-success',
  templateUrl: './add-cat-success.component.html',
  styleUrls: ['./add-cat-success.component.css']
})
export class AddCatSuccessComponent implements OnInit {
  @ViewChild('heading') heading: ElementRef;

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Your cat has been saved');
    // After navigating to this route, keyboard and screen reader users will be
    // disoriented. Move focus to the heading so they are oriented.
    // Also move focus to heading so that it is spoken aloud by screen reader.
    this.heading.nativeElement.focus();
  }

}
