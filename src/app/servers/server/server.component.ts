import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, 
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    // Adding a + sign in front of the id makes it a number!
    // We commented out the code below because we are using a resolver instead!
    //=========================================================================
    //=========================================================================
    // const id = +this.route.snapshot.params['id'];                          |
    // this.server = this.serversService.getServer(id);                       |
    // this.route.params.subscribe(                                           |
    //   (params: Params) => {                                                |
    //     this.server = this.serversService.getServer(+params['id']);        |
    //     console.log(params['id']);                                         |
    //   }                                                                    |
    // );                                                                     |
    // this.route.params.subscribe(                                           |
    //   params => {                                                          |
    //     let id = params['id'];                                             |
    //     this.server = this.serversService.getServer(id);                   |
    //   }                                                                    |
    // );                                                                     |
    //=========================================================================
    //=========================================================================
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    );
  }

  editServer() {
    // Use queryParamsHandling so that our links dont go away when we click edit!!!!
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
