const Paint = require('./objects');

test('creates object', () => {
  expect(wallPaint = new Paint('latex', 'indoor', 'white', 'eggshell', 30.50)).toBe(3);
});