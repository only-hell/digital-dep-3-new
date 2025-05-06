import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  title = 'digital-department-application';
  greeting = "";

  ngOnChanges() {
    console.log('ngOnChanges вызван');
  }

  ngOnInit(): void {
    console.log('Я родился!');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck вызван');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit вызван');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked вызван');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit вызван');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked вызван');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy вызван');
  }

  onSayHi(): void {
    alert("Привет, " + this.greeting);
  }
}
