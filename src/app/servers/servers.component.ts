import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  reloadPage() {
    // '/servers' is absolute, 'servers' is relative
    // When we use 'servers' alone, nothing happens either.
    // ActivatedRoute simply means the route we are currently on
    // if u uncomment code below, app will crash.
    // this.router.navigate(['servers'], {relativeTo: this.route});
  }

}
