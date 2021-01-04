import { Pipe, PipeTransform } from '@angular/core';
// import {DataService} from '../Service/data.service';
import {tap} from 'rxjs/internal/operators/tap';
import {Observable} from 'rxjs';

@Pipe({
  name: 'regionSort'
})
export class RegionSortPipe implements PipeTransform {

  transform(members:Array<any>, regions: Array<string>): any {
    return ;
  }

}
