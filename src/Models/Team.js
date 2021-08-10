export class Team {
  constructor(
    id,
    club_id,
    age_category_id,
    jersey_colour_id,
    jersey_number,
    team_number_id,
    user_list
  ) {
    this.id = id;
    this.club_id = club_id;
    this.age_category_id = age_category_id;
    this.jersey_colour_id = jersey_colour_id;
    this.jersey_number = jersey_number;
    this.team_number_id = team_number_id;
    this.user_list = user_list;
  }
}
