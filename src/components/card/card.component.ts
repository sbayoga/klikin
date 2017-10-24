import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('content') private content: object;

  public size = 'small';
  private thumbnailSelect = 0;

  constructor() {

  }

  ngOnInit() {
    console.log(this.content);
  }

  getPhotoHeader() {
    return this.contentHasPhotos()
    && this.content['photos'][this.thumbnailSelect].hasOwnProperty('thumbnails')
      ? this.content['photos'][this.thumbnailSelect]['thumbnails']['large']
      : 'https://www.ilmkidunya.com/images/no_image/no-image.png';
  }

  getDescription() {
    return this.content.hasOwnProperty('shortDescription')
    && this.content['shortDescription'].length > 0
      ? this.content['shortDescription']
      : 'Sin descripción';
  }

  getLogo() {
    return this.content.hasOwnProperty('logo')
    && this.content['logo'].hasOwnProperty('thumbnails')
      ? this.content['logo']['thumbnails']['small']
      : '';
  }

  getInfoContact(attribute) {
    return this.content.hasOwnProperty('contact')
    && this.content['contact'].hasOwnProperty(attribute)
      ? this.content['contact'][attribute]
      : '-';
  }

  convertSocialOnArray() {
    const result: Array<object> = [];
    for (const social in this.content['social']) {
      if (social) {
        result.push({
          name: social,
          url: this.content['social'][social]
        });
      }
    }
    return result;
  }

  getSocial() {
    return this.content.hasOwnProperty('social')
      ? this.convertSocialOnArray()
      : [];
  }

  contentHasPhotos() {
    return this.content.hasOwnProperty('photos')
      && this.content['photos'].length > 0;
  }

  contentHasMoreThanTwoPhotos() {
    return this.contentHasPhotos() && this.content['photos'].length > 2;
  }

  getPhotos() {
    return this.contentHasPhotos()
      ? this.content['photos']
      : [];
  }

  isThumbnailSelected(index) {
    return this.thumbnailSelect === index;
  }

  selectNewThumbnail(index) {
    this.thumbnailSelect = index;
  }

  selectNewThumbnailOnArrow(way) {
    if (way === 'up' && this.thumbnailSelect < this.content['photos'].length - 1
      || way === 'down' && this.thumbnailSelect > 0) {
      way === 'up' ? this.thumbnailSelect++ : this.thumbnailSelect--;
    }
  }

  getAddress() {
    let address = '';
    address += (this.content['address'].hasOwnProperty('street') ? this.content['address']['street'] : ' ') + ' ';
    address += (this.content['address'].hasOwnProperty('city') ? this.content['address']['city'] : ', ') + ' ';
    address += (this.content['address'].hasOwnProperty('country') ? this.content['address']['country'] : ', ') + ' ';
    address += (this.content['address'].hasOwnProperty('zip') ? this.content['address']['zip'] : ', ') + '';

    return address.slice(0, address.length - 1);
  }

  getOpeningHours() {
    return this.content.hasOwnProperty('openingHours')
    && this.content['openingHours'].length > 0
      ? this.content['openingHours']
      : 'No indicado';
  }

}
