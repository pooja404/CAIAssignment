import { HttpClient } from '@angular/common/http';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  private _jsonURL = 'assets/SampleJson.json';
  data:any={}
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
     console.log(data);
     this.data={...data}
    });
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
}
