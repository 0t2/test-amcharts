import { TestAmchartsPage } from './app.po';

describe('test-amcharts App', () => {
  let page: TestAmchartsPage;

  beforeEach(() => {
    page = new TestAmchartsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
