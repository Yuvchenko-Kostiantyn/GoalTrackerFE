export class FormedGoal {
  public name: string;
  public startDate: Date;
  public endDate: Date;
  public globalGoal: number;
  public user: number;
  // public season

  constructor(name, sd, ed, global, user){
    this.name = name;
    this.startDate = sd;
    this.endDate = ed;
    this.globalGoal = global;
    this.user = user;
    // this.season = season
  }
}
