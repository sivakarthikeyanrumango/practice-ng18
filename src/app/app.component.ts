import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
// import { FlowbiteService } from './flowbite.service';
import { initFlowbite } from 'flowbite';
import { SidebarComponent } from './sidebar/sidebar.component';
import { filter } from 'rxjs';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ng18-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatSlideToggleModule, MatButtonModule, SidebarComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'practice-ng18';
  showSidebar:boolean = false;

  constructor(private router: Router, private authService: AuthService){

  }
  ngOnInit():void{
    initFlowbite()
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const currentRoute = this.router.url;
      const isLoggedIn = this.authService.isAuthenticated();
      this.showSidebar = !(currentRoute.includes('/login') || currentRoute.includes('/register') || !isLoggedIn);
    })
  }
}
