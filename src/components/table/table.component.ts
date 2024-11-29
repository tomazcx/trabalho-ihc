import { Component, Input } from '@angular/core';
import { SearchInputComponent } from '../search-input/search-input.component';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [SearchInputComponent, PaginationComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() title: string;
  @Input() subtitleLink: string;
  @Input() columns: string[];
  @Input() body: string[][];
  @Input() hidePagination?: boolean;
}
