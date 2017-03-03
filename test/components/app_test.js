import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shows list of developers', () => {
    expect(component.find('.shop-list')).to.exist;
  });
});
