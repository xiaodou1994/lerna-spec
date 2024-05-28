const assert = require('assert');
const stylelint = require('stylelint');
const path = require('path');

describe('__tests__/stylelint-config.test.js', () => {
  it('Validate default', async () => {
    const filePaths = [path.join(__dirname, './fixtures/index.css')];

    const result = await stylelint.lint({
      configFile: path.join(__dirname, '../index.js'),
      files: filePaths,
      fix: false
    })

    console.log('result---', result)
    if (result && result.errored) {
      const filesResult = JSON.parse(result.output || '[]') || [];
      filesResult.forEach((fileResult) => {
        console.log('----------------', filePaths);
        console.log(fileResult.warnings);
      })

      assert.ok(filesResult.length !== 0);
    }
  })
})