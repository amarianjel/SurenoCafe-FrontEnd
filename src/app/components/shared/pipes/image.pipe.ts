import { Pipe } from '@angular/core';

@Pipe({
  name: 'imageDefault'
})
export class ImagePipe{

  transform(value: string, fallback:string):string{
    let image = '';
    if (value) {
      image = value;
    }else{
      image = fallback;
    }
    return image;
  }

}
