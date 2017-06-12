import { BensCataloguePage } from './app.po';

describe('bens-catalogue App', () => {
  let page: BensCataloguePage;

  beforeEach(() => {
    page = new BensCataloguePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
