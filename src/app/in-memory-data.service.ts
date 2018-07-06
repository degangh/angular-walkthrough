import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const launchpads = [
      {id: 0, name: 'Introduction'},
      {id: 1, name: 'sales'},
      {id: 2, name: 'leads'},
      {id: 3, name: 'compliance'},
      {id: 4, name: 'Analytics'},
      {id: 5, name: 'Car Care'},
      {id: 6, name: 'Manage'},
      {id: 7, name: 'Training'},
      {id: 8, name: 'Feedback'}

    ];

    return {launchpads}
  }
}
