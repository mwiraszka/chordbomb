import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { faUserCog, faCog } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

import { SongService } from '@app/shared/services/song.service';
import { SettingsService } from '@app/shared/services/settings.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent {
  menuOpen = false;
  userCog = faUserCog;
  faCog = faCog;

  constructor(
    public auth: AngularFireAuth,
    private songService: SongService,
    private settingsService: SettingsService,
    private toastr: ToastrService
  ) {}

  /*
   * Dropdown menu is toggled via burger menu button (on small viewports only):
   * Toggle menuOpen variable; depending of whether menu is now open, add or remove 'open'
   * class to nav element in template, which will render styles accordingly
   */
  toggleDropdownMenu() {
    this.menuOpen = !this.menuOpen;
    let topNav = document.getElementById('app-nav');
    this.menuOpen ? topNav?.classList.add('open') : topNav?.classList.remove('open');
  }

  /*
   * When 'Song Search' clicked:
   * Close dropdown menu (if on small viewport), and return to Song Search in Dashboard
   * by toggling setSongToDisplay value in Song Service, which triggers ngIf directive
   * in Dashboard template
   */
  onSongSearch() {
    this.menuOpen = false;
    document.getElementById('app-nav')?.classList.remove('open');
    this.songService.setSongToDisplay(false);
  }

  /*
   * When 'Song Manager' is clicked, close dropdown menu (if on small viewport)
   */
  onSongManager() {
    this.menuOpen = false;
    document.getElementById('app-nav')?.classList.remove('open');
  }

  /*
   * When 'Admin Login' is clicked, close dropdown menu (if on small viewport)
   */
  onAdminLogin() {
    this.menuOpen = false;
    document.getElementById('app-nav')?.classList.remove('open');
  }

  /*
   * When 'Logout' is clicked, call AngularFireAuth's signOut() method, and close dropdown
   * menu (if on small viewport)
   */
  onLogout() {
    this.auth.signOut();
    this.toastr.success('', 'Successfully logged out', {
      positionClass: 'toast-bottom-right'
    });
    this.menuOpen = false;
    document.getElementById('app-nav')?.classList.remove('open');
  }

  /*
   * When 'Settings' is clicked, have the Settings Service emit a new value (empty object)
   * through its Subject, which is observed by the Dashboard component, toggling sidenav
   */
  onSettings() {
    this.settingsService.toggleSidenav();
  }
}
