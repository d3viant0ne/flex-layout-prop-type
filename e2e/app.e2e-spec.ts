import { FlexLayoutPropTypePage } from './app.po';

describe('flex-layout-prop-type App', function() {
  let page: FlexLayoutPropTypePage;

  beforeEach(() => {
    page = new FlexLayoutPropTypePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
