import { FluxEngineModule } from './flux-engine.module';

describe('FluxEngineModule', () => {
  let fluxEngineModule: FluxEngineModule;

  beforeEach(() => {
    fluxEngineModule = new FluxEngineModule();
  });

  it('should create an instance', () => {
    expect(fluxEngineModule).toBeTruthy();
  });
});
