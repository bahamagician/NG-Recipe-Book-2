import { RecipeBook2Page } from './app.po';

describe('recipe-book-2 App', function() {
  let page: RecipeBook2Page;

  beforeEach(() => {
    page = new RecipeBook2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rb works!');
  });
});
