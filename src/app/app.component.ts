import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxGanttModule } from 'devextreme-angular';

import { AppService, Task, Dependency, Resource, ResourceAssignment } from './app.service';

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
  title = 'ganttTest';
  number = 500;
    tasks: Task[];
    dependencies: Dependency[];
    resources: Resource[];
    resourceAssignments: ResourceAssignment[];

    constructor(service: AppService) {
        this.tasks = service.getTasks();
        this.dependencies = service.getDependencies();
        this.resources = service.getResources();
        this.resourceAssignments = service.getResourceAssignments();
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