import { FisicalFitnessPage } from './app.po';

describe('fisical-fitness App', () => {
  let page: FisicalFitnessPage;

  beforeEach(() => {
    page = new FisicalFitnessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fs works!');
  });
});
