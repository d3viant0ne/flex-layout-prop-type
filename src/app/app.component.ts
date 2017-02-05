import { Component, Inject } from '@angular/core';
import { ObservableMediaService } from '@angular/flex-layout/media-query/observable-media-service';
import { MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
      <div *ngIf="media.isActive('xs')">
         This content is only shown on Mobile devices
      </div>
      <footer>
      </footer>
  `
})
export class AppComponent {
  public state = '';
  constructor( @Inject(ObservableMediaService) public media) {
    media.asObservable()
      .subscribe((change: MediaChange) => {
        this.state = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
      });
  }
}
