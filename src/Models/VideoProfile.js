export class VideoProfile {
  constructor(
    id,
    context_type,
    clip_duration,
    pitch_ground,
    speed,
    is_private,
    home_team,
    away_team
  ) {
    this.id = id;
    this.context_type = context_type;
    this.clip_duration = clip_duration;
    this.pitch_ground = pitch_ground;
    this.speed = speed;
    this.is_private = is_private;
    this.home_team = home_team;
    this.away_team = away_team;
  }
}
