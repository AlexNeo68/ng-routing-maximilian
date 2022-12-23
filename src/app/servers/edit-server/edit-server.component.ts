import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: { id: number, name: string, status: string } = { id: 0, name: '', status: '' };
  allowEdit: boolean = false;

  saved: boolean = false;

  @ViewChild('serverName') serverName: string = '';
  @ViewChild('serverStatus') serverStatus: string = '';

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    const findServer = this.serversService.getServer(1)
    if (findServer) {
      this.server = findServer;
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    }

    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = +queryParams['allowEdit'] === 1 ? true : false;
    });
    this.route.fragment.subscribe();
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.saved = true;
    this.router.navigate(['../'], { relativeTo: this.route })
  }


  canDeactivate(): boolean | Promise<boolean> | Observable<boolean> {

    if (!this.allowEdit) {
      return true;
    }

    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.saved) {
      return confirm('Are you shure to go? Unsaved data will be losed!');
    } else {
      return true;
    }
  }
}
