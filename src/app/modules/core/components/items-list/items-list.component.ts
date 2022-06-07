import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from 'src/app/entities/Formation/formation';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  @Input() public $formations: Observable<Formation[]>;
  constructor() { }

  ngOnInit(): void {
  }

}
