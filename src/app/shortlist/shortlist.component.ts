import { Component, OnInit } from '@angular/core';
import { TableService } from '../services/table.service';

@Component({
  selector: 'app-shortlist',
  templateUrl: './shortlist.component.html',
  styleUrls: ['./shortlist.component.css']
})
export class ShortlistComponent implements OnInit {
  data;
  constructor(
    public tableService: TableService
  ) { }

  ngOnInit() {
    this.data = this.tableService.getData();
  }

}
