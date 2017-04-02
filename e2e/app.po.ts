import { browser, element, by } from 'protractor';

export class FisicalFitnessPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fs-root h1')).getText();
  }
}
