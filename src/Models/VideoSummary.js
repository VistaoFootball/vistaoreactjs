export class VideoSummary {
  constructor(
    id,
    video_id,
    summary_tag_list,
    summary_title_id,
    summary_type_id,
    player_id,
    created_by_id,
    clip_list
  ) {
    this.id = id;
    this.video_id = video_id;
    this.summary_tag_list = summary_tag_list;
    this.summary_title_id = summary_title_id;
    this.summary_type_id = summary_type_id;
    this.player_id = player_id;
    this.created_by_id = created_by_id;
    this.clip_list = clip_list;
  }
}
