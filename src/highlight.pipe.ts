import {PipeTransform, Pipe} from '@angular/core';

@Pipe({ name: 'highlightR' })
export class HighlightPipe implements PipeTransform {
  transform(text: string): string {
console.log(text);
  var repl=text.replace(/f/g,'e')

  console.log(repl);
  	return repl
  }
}