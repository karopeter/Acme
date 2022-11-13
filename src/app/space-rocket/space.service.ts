import { Injectable } from '@angular/core';
import { ISpace } from './space';

@Injectable({
  providedIn: 'root'
})
export class SpaceService {
  getRockets(): ISpace[] {
    return [
      {
      rocketId: 1,
      rocketName: 'Atlas Agenda',
      rocketCode: 'SM-65',
      rocketDate: '1960-1978',
      rocketPrice: 90.8,
      description: 'Space Rocket to reach the moon and marsfinally with full deep sights Most of these were flown on Thor Agenda',
      engineRating: 1.8,
      imageUrl: '/assets/img/atlas.jpg',
      },
      {
       rocketId: 2,
       rocketName: 'Commercial Titians III',
       rocketCode: 'CT-3',
       rocketDate: '1990-1992',
       rocketPrice: 68.14,
       description: 'An American expendable launch system developed by martin marieetta Due to higher cost than contemporary rockets such as Ariane 4',
       engineRating: 4.3,
       imageUrl: '/assets/img/titians.jpg'
      },
      {
       rocketId: 3,
       rocketName: 'Delta III',
       rocketCode: 'RS-27A',
       rocketDate: '1998–2000',
       rocketPrice: 3.810,
       description: 'The First stage of the Delta III burned kerosene and liquid oxygen and was powered by Rocketydne the tank was increased from 2.4 meters to 4 meter',
       engineRating: 2.7,
       imageUrl: '/assets/img/delta.png'
      },
      {
      rocketId: 4,
      rocketName: 'Antares',
      rocketCode: 'NK-33',
      rocketDate: '2011-2022',
      rocketPrice: 6.90,
      description: 'Orbital Science Corporation now part of the space act agreement delivery cargo international space stations COTS missions and the rocket had a successful return to flight in October 17, 2016',
      engineRating: 3.1,
      imageUrl: '/assets/img/Antares.jpg'
      }
    ];
  }
}
