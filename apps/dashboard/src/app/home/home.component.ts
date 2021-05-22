import { Component, OnInit } from '@angular/core';
import { Widget } from '@pga/api-interfaces';
import { WidgetsService } from '@pga/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'pga-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  widgets: Observable<Widget[]>;

  constructor(private widgetsService: WidgetsService) {}

  ngOnInit() {
    this.widgets = this.widgetsService.all();
  }
}
