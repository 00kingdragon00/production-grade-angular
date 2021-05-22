import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Widget } from '@pga/api-interfaces';
import { WidgetsService } from '@pga/core-data';
@Component({
  selector: 'pga-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  widgets$: Observable<Widget[]>;

  constructor(private widgetsService: WidgetsService) {}

  ngOnInit() {
    this.widgets$ = this.widgetsService.all();
  }
}
