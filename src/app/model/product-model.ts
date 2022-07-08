export class Product {
  constructor(
    _id: string,
    title: string,
    description: string,
    photos: Photo[],
    genres: string[],
    platforms: string[],
    tags: string[],
    rating: number,
    totalVotes: number,
    videos: Video[],
    createdAt: string,
    updatedAt: string,
    __v: number,
    mediumPrice: number,
    releaseYear: number
  ) {

    this._id = _id;
    this.title = title;
    this.description = description;
    this.photos = photos;
    this.genres = genres;
    this.platforms = platforms;
    this.tags = tags;
    this.rating = rating;
    this.totalVotes = totalVotes;
    this.videos = videos;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.__v = __v;
    this.mediumPrice = mediumPrice;
    this.releaseYear = releaseYear;

  }


  _id: string;
  title: string;
  description: string;
  photos: Photo[];
  genres: string[];
  platforms: string[];
  tags: string[];
  rating: number;
  totalVotes: number;
  videos: Video[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  mediumPrice: number;
  releaseYear: number;
}
export interface Photo {
  name: string,
  url: string,
  _id: string
}
export interface Video {
  type: string,
  url: string,
  _id: string
}
