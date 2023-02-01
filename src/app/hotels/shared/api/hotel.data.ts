import { InMemoryDbService } from 'angular-in-memory-web-api';

import { IHotel } from '../models/hotel';

/**
 * Initial data for in memory web api
 *
 * @export
 * @class HotelData
 * @implements {InMemoryDbService}
 */
export class HotelData implements InMemoryDbService {

  createDb(): Record<string, IHotel[]> {
    const hotels: IHotel[] = [
      {
        id: 1,
        hotelName: 'Radison Hotel',
        description: 'Belle vue au bord de la mer',
        price:  200000,
        imageUrl: 'assets/img/hotel-room.jpg',
        rating: 4.5,
        tags: ['nouveau']
      }, {
        id: 2,
        hotelName: 'King Fahd Place',
        description: 'Profitez de la vue sur les montagnes',
        price: 145500,
        imageUrl: 'assets/img/the-interior.jpg',
        rating: 5,
        tags: ['nouveau']
      }, {
        id: 3,
        hotelName: 'Teroubi',
        description: 'Séjour complet avec service de voitures',
        price: 120120,
        imageUrl: 'assets/img/indoors.jpg',
        rating: 4,
        tags: ['nouveau']
      }, {
        id: 4,
        hotelName: 'Saly Hotel',
        description: 'Magnifique cadre pour votre séjour',
        price: 135120,
        imageUrl: 'assets/img/window.jpg',
        rating: 2.5,
        tags: ['nouveau']
      }
    ];

    return { hotels };
  }


  genId(hotels: IHotel[]): number {
    return hotels.length > 0 ? Math.max(...hotels.map(hotel => hotel.id)) + 1 : 1;
  }
}
