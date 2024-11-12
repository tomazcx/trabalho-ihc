import { Component, Input } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'header-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-link.component.html',
  styleUrls: ['./header-link.component.scss'],
})
export class HeaderLinkComponent {
  @Input() label: string;
  @Input() href: string;
  isActive: boolean;

  constructor(private location: Location) {}

  ngOnInit(): void {
    this.isActive = this.location.path() === this.href;
  }
}
