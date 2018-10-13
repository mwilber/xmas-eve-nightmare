import { FluxEditorModule } from './flux-editor.module';

describe('FluxEditorModule', () => {
  let fluxEditorModule: FluxEditorModule;

  beforeEach(() => {
    fluxEditorModule = new FluxEditorModule();
  });

  it('should create an instance', () => {
    expect(fluxEditorModule).toBeTruthy();
  });
});
