import { Seasons } from './seasons';

export class FormedGoal {
  public name: string;
  public startDate: Date;
  public endDate: Date;
  public globalGoalid: number;
  public userid: string;
  public season: Seasons;
  public description: string;
  public pausedDate: Date;

  constructor(name, sd, ed, global, userId, season, description, pd){
    this.name = name;
    this.startDate = sd;
    this.endDate = ed;
    this.globalGoalid = global;
    this.userid = userId;
    this.season = season;
    this.description = description;
    this.pausedDate = pd;
  }
}
