import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherSearch } from '@ng-icons/feather-icons';

@Component({
  selector: 'search-input',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
  providers: [provideIcons({ featherSearch })],
})
export class SearchInputComponent {}
