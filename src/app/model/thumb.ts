import { SafeResourceUrl, SafeUrl } from "@angular/platform-browser";

export class Thumb {
  type: ThumbType;
  url: string;
  video: SafeResourceUrl;
  constructor(type: ThumbType, url: string, video: string) {
    this.type = type;
    this.url = url;
    this.video = video;
  }
}

export enum ThumbType {
  VIDEO = 'VIDEO',
  FOTO = 'FOTO'
}
