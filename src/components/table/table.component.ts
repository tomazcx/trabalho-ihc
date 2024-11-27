import { Component, Input } from '@angular/core';
import { SearchInputComponent } from '../search-input/search-input.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherArrowLeft, featherArrowRight } from '@ng-icons/feather-icons';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [SearchInputComponent, NgIconComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  providers: [provideIcons({ featherArrowLeft, featherArrowRight })],
})
export class TableComponent {
  @Input() title: string;
  @Input() subtitleLink: string;
  @Input() columns: string[]
  @Input() body: string[][]
  @Input() hidePagination?: boolean
}
