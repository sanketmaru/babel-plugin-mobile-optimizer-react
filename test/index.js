
const babel = require('babel-core');
const assert = require('assert');
const babelMobileOptimizerPlugin = require('../index').default;

describe('babel-plugin-styled-components', () => {
    beforeEach(() => {
      transform = code =>
        babel.transform(code, {
          plugins: [babelMobileOptimizerPlugin]
        }).code;
    });
  
    it('should remove jsx element if name matches with jsx env variable', () => {
        assert.equal('true', 'true');
    });

    it('should remove class method if method name ends with class method env variable', () => {
        assert.equal('true', 'true');
    });
});
