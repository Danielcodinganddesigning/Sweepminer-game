import { Component } from '@angular/core';

@Component({
  selector: 'app-start-screen',
  templateUrl: '/src/app/start-screen/start-screen.component.html',
  styleUrls: ['/src/app/start-screen/start-screen.component.scss']
})
export class StartScreenComponent {
  // showNewPageFlag: boolean = false;

  toggleNewPage() {
    
    document.getElementById('firstLayer')?.classList.add('hidden');
    document.getElementById('transition')?.classList.remove('hidden');
    // this.showNewPageFlag = !this.showNewPageFlag;
  }
}
