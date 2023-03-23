import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-icon[icon]',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input() icon!: 'cloud-upload';

  @HostBinding()  get class(): string {
    return `icon-${this.icon}`;
  }
}
