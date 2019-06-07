import { GerenciamentoIgrejaPage } from './app.po';

describe('gerenciamento-igreja App', () => {
  let page: GerenciamentoIgrejaPage;

  beforeEach(() => {
    page = new GerenciamentoIgrejaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
