import { loadRemoteModule } from '@angular-architects/native-federation';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MicroFrontendService {

  constructor() { }

  async loadRemoteComponent(port: number, remoteName: string): Promise<any> {
    try {
      return await loadRemoteModule({
        remoteEntry: `http://localhost:${port}/remoteEntry.json`,
        remoteName: remoteName,
        exposedModule: './Component',
        fallback: 'unavailable'
      })
    } catch (error) {
      console.error(`Error loading micro frontend | ${remoteName} component: `, error);
      throw error;
    }
  }

  async loadRemoteModule(port: number, name: string) {
    try {
      return await loadRemoteModule({
        remoteEntry: `http://localhost:${port}/remoteEntry.json`,
        remoteName: name,
        exposedModule: './ProdutosModule',
      })
    } catch (error) {
      console.error('Error loading remote module:', error);
      throw error;
    }
  }
}
