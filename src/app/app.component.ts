import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculator';

  tempNum = '0';
  sumNum = 'sum';

  public getNumber(v: string) {
    this.tempNum === '0' ? this.tempNum = v : this.tempNum += v;
  }

  clear(v: string) {
    this.tempNum = '0';
    this.sumNum = 'sum';
  }

  getOperation(v: string) {
       this.tempNum += v;
  }

  getOperationEval() {
    this.sumNum = eval(this.tempNum);
  }


}
