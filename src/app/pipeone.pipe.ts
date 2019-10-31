import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeone'
})
export class PipeonePipe implements PipeTransform {

  transform(value: any, searchBy): any {
    return value.filter(af=>
      {
        if(!searchBy)
        {
          return value;
        }
        
        const data = af.title.toLowerCase().startsWith(searchBy.toLowerCase());
        return data;
      });
  }




  
}
