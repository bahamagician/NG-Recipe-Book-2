import { browser, element, by } from 'protractor';

export class RecipeBook2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rb-root h1')).getText();
  }
}
