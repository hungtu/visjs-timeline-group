import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';
import { PopoverModule, PopoverConfig, PopoverDirective } from 'ngx-bootstrap';
declare var vis: any;

@Component({
  selector: 'app-vis',
  templateUrl: './vis.component.html',
  styleUrls: ['./vis.component.css'],
})
export class VisComponent implements OnInit {
  @ViewChild('timeline') timelineContainer: ElementRef;

  public timeline: any;

  constructor() {}

  ngOnInit() {
    var groups = new vis.DataSet([
      { id: 0, content: 'First', value: 1 },
      { id: 1, content: 'Third', value: 3 },
      { id: 2, content: 'Second', value: 2 },
    ]);

    // create a dataset with items
    // note that months are zero-based in the JavaScript Date object, so month 3 is April
    var items = new vis.DataSet([
      {
        id: 0,
        group: 0,
        content: 'item 0',
        start: new Date(2014, 3, 17),
        end: new Date(2014, 3, 21),
      },
      {
        id: 1,
        group: 0,
        content: 'item 1',
        start: new Date(2014, 3, 19),
        end: new Date(2014, 3, 20),
      },
      {
        id: 2,
        group: 1,
        content: 'item 2',
        start: new Date(2014, 3, 16),
        end: new Date(2014, 3, 24),
      },
      {
        id: 3,
        group: 1,
        content: 'item 3',
        start: new Date(2014, 3, 23),
        end: new Date(2014, 3, 24),
      },
      {
        id: 4,
        group: 1,
        content: 'item 4',
        start: new Date(2014, 3, 22),
        end: new Date(2014, 3, 26),
      },
      {
        id: 5,
        group: 2,
        content: 'item 5',
        start: new Date(2014, 3, 24),
        end: new Date(2014, 3, 27),
      },
    ]);

    var container = this.timelineContainer.nativeElement;

    // create visualization

    var options = {
      // option groupOrder can be a property name or a sort function
      // the sort function must compare two groups and return a value
      //     > 0 when a > b
      //     < 0 when a < b
      //       0 when a == b
      groupOrder: function (a, b) {
        return a.value - b.value;
      },
      editable: true,
    };

    this.timeline = new vis.Timeline(container);
    this.timeline.setOptions(options);
    this.timeline.setGroups(groups);
    this.timeline.setItems(items);
  }
}
