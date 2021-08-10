export class VideoClip {
  constructor(
    id,
    video_id,
    start_time,
    end_time,
    tag_list,
    zone_id,
    axis_id,
    player_id
  ) {
    this.id = id;
    this.video_id = video_id;
    this.start_time = start_time;
    this.end_time = end_time;
    this.tag_list = tag_list;
    this.zone_id = zone_id;
    this.axis_id = axis_id;
    this.player_id = player_id;
  }
}
