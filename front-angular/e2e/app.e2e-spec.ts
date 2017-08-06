import { FrontAngularPage } from './app.po';

describe('front-angular App', function() {
  let page: FrontAngularPage;

  beforeEach(() => {
    page = new FrontAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
