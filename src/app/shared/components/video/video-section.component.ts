import { Component, Input, OnInit } from "@angular/core";
import { SafeUrlPipe } from "../../../safe-url.pipe";

@Component({
  selector: 'youtube-video-player',
  standalone: true,  
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.scss'],
  imports: [SafeUrlPipe]
})
export class YoutubeVideoComponent implements OnInit {
  @Input() videoId!: string;
  @Input() width: string ="435"
  @Input() height: string ="300"
  @Input() isShort!: string;

  stylecss: string = ""

  constructor() {
  }

  ngOnInit(): void {
    if (this.isShort == "true") {
      this.stylecss = "width: 100%; max-width: 400px; aspect-ratio: 9 / 16; border-radius: 10px;"
    } else {
      this.stylecss = "height: 300px; width: 435px;"
    }
  }

  get embedUrl(): string {
    return `https://www.youtube.com/embed/${this.videoId}`;
  }
}
