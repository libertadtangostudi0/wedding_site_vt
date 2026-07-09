// src/test/pageObjects/NavbarPage.ts
// Page Object Model wrapping Navbar interactions so tests read like
// user behaviour ("open home", "switch language") instead of raw queries.
import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export class NavbarPage {
  /**
   * Finds the navbar's "Home" link by its href rather than its visible
   * label, because the label is translated ("Home" / "Trang chu") and
   * we don't want the test itself to depend on the current language.
   */
  private getHomeLink(): HTMLElement {
    const links = screen.getAllByRole('link');
    const homeLink = links.find((link) => (link.getAttribute('href') ?? '').includes('home'));

    if (!homeLink) {
      throw new Error('NavbarPage: could not find a "Home" link in the rendered tree.');
    }

    return homeLink;
  }


  async clickHome(): Promise<void> {
    const user = userEvent.setup();
    await user.click(this.getHomeLink());
  }


  getLanguageSwitcher(): HTMLElement {
    return screen.getByRole('combobox');
  }


  async switchLanguageTo(lang: 'en' | 'vi'): Promise<void> {
    const user = userEvent.setup();
    await user.selectOptions(this.getLanguageSwitcher(), lang);
  }
}


export class HomePagePO {
  /** The main hero heading, rendered via SafeHtml as an <h1>. */
  getHeroHeading(): HTMLElement {
    return within(document.body).getByRole('heading', { level: 1 });
  }
}
