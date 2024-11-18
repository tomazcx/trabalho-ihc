import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherArrowLeft } from '@ng-icons/feather-icons';

@Component({
  selector: 'go-back-link',
  standalone: true,
  imports: [NgIconComponent, RouterModule],
  providers: [provideIcons({ featherArrowLeft })],
  templateUrl: './go-back-link.component.html',
  styleUrl: './go-back-link.component.scss',
})
export class GoBackLinkComponent {
  @Input() href:string
  @Input() label:string

}
