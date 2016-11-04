import { SmartparkA2Page } from './app.po';

describe('smartpark-a2 App', function() {
  let page: SmartparkA2Page;

  beforeEach(() => {
    page = new SmartparkA2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
