import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/services/user.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {
  user: User;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(
    private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;
      this.galleryImages = this.getPhotos();
    });

    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }
    ];
  }

  getPhotos() {
    const imageUrls = [];
    for (const photo of this.user.photos) {
      imageUrls.push({
        small: photo.url,
        medium: photo.url,
        big: photo.url
      });
    }
    return imageUrls;
  }
}
