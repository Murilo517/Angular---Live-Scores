import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MatchService } from "src/app/services/match.service";

@Component({
  selector: "app-matches",
  templateUrl: "./matches.component.html",
  styleUrls: ["./matches.component.scss"],
})
export class MatchesComponent {
  constructor(private activatedRoute: ActivatedRoute, private matchService: MatchService) {}

  matchDetails:any

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params=>{
      const matchId = params.get('id')
      this.getMatchDetails(matchId!)
    })
  }

  getMatchDetails(matchId: string): void {
    this.matchService.getMatchById(matchId).subscribe((matchDetails) => {
      this.getMatchDetails = matchDetails
      console.log(matchDetails);
      
    });
  }

}
