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
      { id: 0, content: 'Station S0', value: 1 },
      { id: 1, content: 'Station S1', value: 2 },
      { id: 2, content: 'Station S2', value: 3 },
    ]);

    // create a dataset with items
    // note that months are zero-based in the JavaScript Date object, so month 3 is April
    var items = new vis.DataSet([
      {
        id: 0,
        group: 0,
        content: 'item 0',
        start: new Date(2023, 1, 3,12,0,0,0),
        end: new Date(2023, 1, 3,12,30,0,0)
      },
      {
        id: 1,
        group: 0,
        content: 'item 1',
        start: new Date(2023, 1, 3,12,30,0,0),
        end: new Date(2023, 1, 3,14,0,0,0)
      },
      {
        id: 2,
        group: 1,
        content: 'item 2',
        start: new Date(2023, 1, 3,12,30,0,0),
        end: new Date(2023, 1, 3,13,30,0,0)
      },
      {
        id: 3,
        group: 1,
        content: 'item 3',
        start: new Date(2023, 1, 3,14,30,0,0),
        end: new Date(2023, 1, 3,18,30,0,0),
      },
      {
        id: 4,
        group: 1,
        content: 'item 4',
        start: new Date(2023, 1, 3,13,0,0,0),
        end: new Date(2023, 1, 3,15,30,0,0)
      },
      {
        id: 5,
        group: 2,
        content: 'item 5',
        start: new Date(2023, 1, 3,15,30,0,0),
        end: new Date(2023, 1, 3,16,30,0,0),
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
