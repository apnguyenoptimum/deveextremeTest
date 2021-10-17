import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as dummyData from './ExplodedExample.json';
import { DxGanttModule } from 'devextreme-angular';

import { AppService, Task, Employee, Priority } from './app.service';

if (!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [AppService],
    // preserveWhitespaces: true
})
export class AppComponent {
  tasks: Task[];
  employees: Employee[];
  priorities: Priority[];
  statuses: string[];
  jsonData: any[];
  

  constructor(service: AppService) {
    this.jsonData = JSON.parse(JSON.stringify(dummyData))["default"];
    this.jsonData.map((t) => console.log(t))



    // for(let i = 0; i < json.length, i++;){
    //   // this.jsonData.push(json[i])
    // }



  //  JSON.parse(JSON.stringify(dummyData))

 
   
    

  
    this.tasks = service.getTasks();
    this.employees = service.getEmployees();
    this.priorities = service.getPriorities();
    // this.jsonData.map((t) => console.log(t))
    console.log(this.tasks)
   


    this.statuses = [
      "Not Started",
      "Need Assistance",
      "In Progress",
      "Deferred",
      "Completed"
    ];
  }

  getCompletionText(cellInfo: any) {
    return cellInfo.valueText + "%";
  }
}

// @NgModule({
//   imports: [
//       BrowserModule,
//       DxGanttModule
//   ],
//   declarations: [AppComponent],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

// platformBrowserDynamic().bootstrapModule(AppModule);