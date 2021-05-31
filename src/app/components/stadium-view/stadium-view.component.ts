import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { zonesData } from 'src/app/demoData';
import { SelectionChangeEvent } from 'src/app/models/selection-change-event.model';
import { ShowBehavior } from 'src/app/models/show-behavior.enum';
import { SeatingService } from 'src/app/services/seating.service';
// import * as svgPanZoom from 'svg-pan-zoom';

@Component({
  selector: 'app-stadium-view',
  templateUrl: './stadium-view.component.html',
  styleUrls: ['./stadium-view.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StadiumViewComponent implements OnInit {
  seatingService: SeatingService;
  seatRadius = 5;
  seatGap = 5;

  constructor(private router: Router) { }

  ngOnInit() {
    this.initSeating();
    this.testData();
  }

  initSeating() {
    // var panZoomTiger = svgPanZoom('#x', {
    //   viewportSelector: '.svg-pan-zoom_viewport'
    //   , panEnabled: true
    //   , controlIconsEnabled: true
    //   , zoomEnabled: true
    //   , dblClickZoomEnabled: true
    //   , mouseWheelZoomEnabled: true
    //   , preventMouseEventsDefault: true
    //   , zoomScaleSensitivity: 0.2
    //   , minZoom: 0.5
    //   , maxZoom: 10
    //   , fit: true
    //   , contain: false
    //   , center: true
    //   , refreshRate: 'auto'
    //   , beforeZoom: function () { }
    //   , onZoom: function () { }
    //   , beforePan: function () { }
    //   , onPan: function () { }
    //   , onUpdatedCTM: function () { }
    //   , eventsListenerElement: null
    // });

    this.seatingService = SeatingService.attach(document.getElementById('x'),
      {
        showBehavior: ShowBehavior.AllDecendants,
        allowManualSelection: true
      },
      document.getElementById("tooltip"));

    this.seatingService.registerZoomChangeListener(() => {
      console.log('zoom evt should run everytime');
    });

    this.seatingService.registerSelectionChangeListener((e: SelectionChangeEvent) => {
      console.log(e);
      console.log('select evt should run everytime');
    });

  }

  testData() {
    const data = zonesData;
    data.forEach(zone => {
      const w = ((this.seatGap + 2 * this.seatRadius) * zone.seats.columns) - this.seatGap;
      const h = ((this.seatGap + 2 * this.seatRadius) * zone.seats.rows) - this.seatGap;
      this.seatingService.addZone(zone.id, zone.x - this.seatRadius, zone.y - this.seatRadius,
        h, w);
      for (let i = 0; i < zone.seats.rows; i++) {
        for (let j = 0; j < zone.seats.columns; j++) {
          if (zone.emptySpaces && zone.emptySpaces.find(e => e.x == i && e.y == j)) {
            continue;
          }
          const y = zone.y + i * (this.seatGap + 2 * this.seatRadius);
          const x = zone.x + j * (this.seatGap + 2 * this.seatRadius);
          const seatId = `${i}-${j}`;
          this.seatingService.addSeat(zone.id, seatId, this.seatRadius, x, y);
        }
      }
    });
    this.seatingService.bindEvents();
    this.seatingService.goToBoard();
  }

  public closest1Click() {
    this.seatingService.select(this.seatingService.getClosestSeats('left', 3, false));
  }

  public bookClick() {
    this.seatingService.lock('[selected]', 'reserved');
  }

  public goBackClick() {
    if (this.seatingService.canGoBack()) {
      this.seatingService.goBack();
    } else {
      console.log('you cant go back');
    }
  }

  public threeViewClick() {
    this.router.navigate(['panorama']);
  }
}
