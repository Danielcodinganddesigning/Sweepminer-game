import { Component } from '@angular/core';

@Component({
  selector: 'app-start-screen',
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss']
})
export class StartScreenComponent {
  // showNewPageFlag: boolean = false;

  toggleNewPage() {
    document.getElementById('firstLayer')?.classList.add('hidden');
    document.getElementById('transition')?.classList.remove('hidden');
    // this.showNewPageFlag = !this.showNewPageFlag;
  }
}
