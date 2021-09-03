import { Component } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { combineLatest, of } from 'rxjs';

import { LoggerService } from './services/logger.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private logger: LoggerService) {}

  call() {
    this.logger
      .getArticle(12)
      .pipe(
        switchMap(res =>
          combineLatest([of(res), this.logger.getUser(res.userId)])
        )
      )
      .subscribe(([article, user]) => console.log(article, user));
  }
}
