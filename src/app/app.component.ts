import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  val: any;
  constructor(private http: HttpClient) {
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe((data) => {
      this.val = data
      console.log(this.val);
    })
  }
}
