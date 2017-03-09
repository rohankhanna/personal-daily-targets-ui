import { PersonalDailyTargetsUiPage } from './app.po';

describe('personal-daily-targets-ui App', function() {
  let page: PersonalDailyTargetsUiPage;

  beforeEach(() => {
    page = new PersonalDailyTargetsUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
