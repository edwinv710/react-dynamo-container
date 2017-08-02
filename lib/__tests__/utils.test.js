import Util from '../utils.js';

describe('Util', () => {
  describe('stringifiedWidth', () => {
    it('should return a stringified percentage based on the amount of columns set', () => {
      const stringifiedWidth = Util.stringifiedWidth(4);
      expect(stringifiedWidth).toEqual('25%');
    });
  });
});
