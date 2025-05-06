import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  data: string[] = [];

  constructor(private dataService: DataService, private router: Router) {
    this.dataService.getExampleData().subscribe((response: any) => {
      this.data = response.items;
    });
  }

  goToPage2(): void {
    this.router.navigate(['/page2']);
  }
}
