import { Seasons } from './seasons';

export class FormedGoal {
  public name: string;
  public startDate: Date;
  public endDate: Date;
  public globalGoalId: number;
  public userId: number;
  public season: Seasons;
  public description: string;

  constructor(name, sd, ed, global, userId, season, description){
    this.name = name;
    this.startDate = sd;
    this.endDate = ed;
    this.globalGoalId = global;
    this.userId = userId;
    this.season = season;
    this.description = description;
  }
}
