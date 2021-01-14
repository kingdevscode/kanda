import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.page.html',
  styleUrls: ['./ticket.page.scss'],
})
export class TicketPage implements OnInit {

  data:any;

  constructor(
    private route:ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe(params=>{
      console.log('params:',params);
      if(params&& params.special){
        this.data=JSON.parse(params.special);
      }
    });
   }

  ngOnInit() {
  }

}
