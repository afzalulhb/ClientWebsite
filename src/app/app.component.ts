import { Component } from '@angular/core';

@Component({
  selector: 'nwm-app',
  template: `
   <div class="wrapper"> 
    
      <!-- LOGIN -->
      <nwm-login></nwm-login>

      <!-- MENU -->
      <nwm-menu></nwm-menu>
      <div class="row">
            <!-- CONTENT -->
            <div class="col-md-offset-1 col-md-7">
              <router-outlet></router-outlet>
            </div>
            <div class="col-md-offset-1 col-md-2 advisor">
              <nwm-advisors></nwm-advisors>
            </div>
      </div>
  </div>
  <div class="spacer"></div>
  <div class="footer">
    <!-- FOOTER -->
    <nwm-footer></nwm-footer>
  </div>    
  `,
  styles:[`
 .wrapper {
    min-height: calc(100vh - 50px);
    /* 80px header + 40px footer = 120px  */
}
.advisor{
  margin-top:200px;
}
  `]
})
export class AppComponent  { name = 'Angular'; }
