import { Component, OnInit, ViewChild, ElementRef, QueryList, AfterViewInit, ViewChildren } from '@angular/core';
import { CounterComponent } from './counter.component';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit, AfterViewInit {
  // @ViewChild("highlight")marker: ElementRef;
  // @ViewChildren("highlight")marker: ElementRef;
  @ViewChildren('highlight')marker: QueryList<any>;

  @ViewChild('childView')child: CounterComponent;


  constructor() {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.marker);
    this.marker.first.nativeElement.style.color='red';
    this.marker.last.nativeElement.style.color='green';
  }

  inc(): void {
    this.child.increment();
  }

  dec(): void {
   this.child.decrement();
  }
}
