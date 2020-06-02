import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-thumb',
  templateUrl: './event-thumb.component.html',
  styleUrls: ['./event-thumb.component.scss']
})
export class EventThumbComponent implements OnInit {
  @Input() event: any;

  constructor() { }

  ngOnInit(): void {
  }


}
