import { Greet } from './greet';

describe('Greet', () => {
  const greet = new Greet();
  it('should include the name in the message', () => {
    
    
    expect(greet.greet('nagaveni')).toContain('nagaveni');
  });

  it('should return the supported currencies', () => {
    
    const currencies = greet.getCurrencies();
    expect(currencies).toContain('USD');
    expect(currencies).toContain('AUD');
    expect(currencies).toContain('EUR');
  });
});
