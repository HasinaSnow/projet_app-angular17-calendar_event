import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { TypeGateway } from './core/ports/type.gateways';
import { TypeGatewayInMemory } from './core/adapters/inmemory/typeGateway.inmemory';
import { TypeModel } from './core/models/type.model';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    { provide: TypeGateway, useFactory: () => new TypeGatewayInMemory().withTypes([] as TypeModel[])}
  ]
};
