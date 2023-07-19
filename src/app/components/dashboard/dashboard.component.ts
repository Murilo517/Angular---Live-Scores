import { Component , OnInit} from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  constructor(private matchService: MatchService){

  }

  ngOnInit(): void {
    this.matchService.getMatches().subscribe(resp => {
      console.log(resp);   
    })
  }

}
