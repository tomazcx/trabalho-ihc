import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherArrowLeft, featherArrowRight } from '@ng-icons/feather-icons';

@Component({
  selector: 'list-pagination',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
  providers: [provideIcons({ featherArrowLeft, featherArrowRight })],
})
export class PaginationComponent {}
