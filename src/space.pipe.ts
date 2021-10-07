import {PipeTransform, Pipe} from '@angular/core';

@Pipe({ name: 'spaces' })
export class SpacePipe implements PipeTransform {
  constructor() {
  }
  transform(text) {
  	console.log(text);
    return text.toUpperCase()
  }

}