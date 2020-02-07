import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [SearchService]
})
export class AppComponent  {
  name = 'Angular';
  results: Object;
  searchTerm$ = new Subject<string>();

  constructor(private searchService: SearchService) {
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.results;
      });
  }
}
