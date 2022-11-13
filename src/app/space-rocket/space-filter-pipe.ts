import { PipeTransform, Pipe } from '@angular/core';
import { ISpace } from './space';

@Pipe({
   name: 'spaceFilter'
})

export class SpaceFilterPipe implements PipeTransform {

   transform(value: ISpace[], filterBy: string): ISpace[] {
       filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
       return filterBy ? value.filter((space: ISpace) => space.rocketName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
   }
}
