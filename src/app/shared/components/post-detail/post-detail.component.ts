import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PostServices } from "../../../services/post.service";
import { ITarjeta } from "../terjeta/type/tarjeta-content.interface";
import { YoutubeVideoComponent } from "../video/video-section.component";

@Component({
  standalone: true,
  selector: "post-detail",
  templateUrl: "post-detail.component.html",
  styleUrls: ["post-detail.component.scss"],
  imports:[
    YoutubeVideoComponent
  ]
})
export class PostDetailComponent implements OnInit {

  post!: ITarjeta;

  constructor(
    private route: ActivatedRoute,
    private postService: PostServices
  ) {
  }

  ngOnInit() {
    if (this.route.snapshot.paramMap.has('id')) {
      this.route.params.subscribe(params => {
        this.post = this.postService.getPostById(params['id']);
      });
    }
  }
}