import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnDestroy {
  server: { id: number, name: string, status: string } = { id: 0, name: '', status: '' };
  paramsSubscription: Subscription = new Subscription();
  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {

    // const id = +this.route.snapshot.params['id'];

    // let findServer = this.serversService.getServer(id)

    // if (findServer) {
    //   this.server = findServer;
    // }

    // this.paramsSubscription = this.route.params.subscribe((params: Params) => {
    //   findServer = this.serversService.getServer(+params['id'])
    //   if (findServer) {
    //     this.server = findServer;
    //   }
    // });
    this.route.data.subscribe((data: Data) => {
      this.server = data['server'];
    });

  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  editServer() {
    this.router.navigate(['edit'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }

}
