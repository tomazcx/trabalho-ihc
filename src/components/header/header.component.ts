import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { featherGlobe } from '@ng-icons/feather-icons';
import { HeaderLinkComponent } from '../header-link/header-link.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [NgIconComponent, HeaderLinkComponent, RouterModule ],
  providers: [provideIcons({ featherGlobe })],
})
export class HeaderComponent {}
