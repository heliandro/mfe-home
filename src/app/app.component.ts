import { Component, ComponentRef, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import { MicroFrontendService } from './micro-frontend.service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'MFE-Home';

  @ViewChild('mfeProdutos', { read: ViewContainerRef, static: true }) mfeProdutosContainer!: ViewContainerRef;

  private mfeProdutosComponentRef: ComponentRef<any> | null = null;

  constructor(private microFrontendService: MicroFrontendService, private router: Router) { }

  async ngOnInit() {
    try {
      // const mfeProdutosModule = await this.microFrontendService.loadRemoteComponent(4201, 'mfe-produtos')
      // this.mfeProdutosContainer.clear();
      // this.mfeProdutosComponentRef = this.mfeProdutosContainer.createComponent(mfeProdutosModule.AppComponent);
      // this.mfeProdutosComponentRef.changeDetectorRef.detectChanges();

      // Registre o módulo de produtos dinamicamente
      // const produtosModule = await this.microFrontendService.loadRemoteModule(4201, 'mfe-produtos');

      // this.router.config.push({
      //   path: 'produtos',
      //   loadChildren: () => Promise.resolve(produtosModule)
      // });
      
    } catch (error) {
      console.error('Error during initialization:', error);
    }
  }

  ngOnDestroy(): void {
    // Clean up the component reference if it exists
    this.mfeProdutosComponentRef?.destroy();
  }
}
