import { CiEmergenciasPage } from './app.po';

describe('ci-emergencias App', function() {
  let page: CiEmergenciasPage;

  beforeEach(() => {
    page = new CiEmergenciasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
