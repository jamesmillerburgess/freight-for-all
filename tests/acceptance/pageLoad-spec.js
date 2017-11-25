describe('Page Load', function() {
  let b;
  beforeEach(() => {
    b = browser;
    b.url('http://localhost:3000');
  });
  it('should be Freight For All', function() {
    expect(b.getTitle()).toBe('Freight For All');
  });
});
