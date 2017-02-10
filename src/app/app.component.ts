import { Component } from '@angular/core';
import '../../public/css/styles.css';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = "this is a test property being output from the app-component.ts";
}
