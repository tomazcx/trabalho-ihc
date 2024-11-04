import { Component, Input } from '@angular/core';

@Component({
  selector: 'header-link',
  standalone: true,
  imports: [],
  templateUrl: './header-link.component.html',
  styleUrl: './header-link.component.scss'
})
export class HeaderLinkComponent {
  @Input() label:string;
  @Input() href:string;
  isActive:boolean;

  constructor(
    private location: Location
  ){}

  ngOnInit():void {
    console.log(this.location.pathname);
  }

}
