import {
  NoopAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { AutocompleteComponent } from './autocomplete.component';
import { EventEmitter } from '@angular/core';
import '@testing-library/cypress/add-commands';

const options = ['Steak sandwhich', 'BBQ ribs', 'Hamburger', 'French fries'];

// Extend Cypress namespace
declare global {
  namespace Cypress {
    interface Chainable {
      findByRole(role: string, options?: any): Chainable<JQuery<HTMLElement>>;
    }
  }
}

describe('AutocompleteComponent', () => {
  const selectedOption = `Steak sandwhich`;
  const bbqRibsRegEx = /BBQ ribs/i;

  // TODO: Type "steak sa", select option, check that setOption has been called with the right value
  // TODO: Delete text, type "bbq", select option, check that setOption has been called with the right value

  beforeEach(() => {
    // mount the component and spy on the setOption event
  });

  it('should call setOption with the selected option value after the option is selected', () => {});

  it('should delete the text and check if bbq is also an option', () => {});
});
