import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {
  color = 'blue';
  showSettings = false;
  showMinisidebar = false;
  showDarktheme = false;
  showRtl = false;

  public innerWidth: any;

  constructor(public router: Router) {}

  ngOnInit(): void {
    if (this.router.url === '/') {
      this.router.navigate(['/app']);
    }
    this.handleLayout();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.handleLayout();
  }

  toggleSidebar() {
    this.showMinisidebar = !this.showMinisidebar;
  }

  handleLayout() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 1170) {
      this.showMinisidebar = true;
    } else {
      this.showMinisidebar = false;
    }
  }
}
