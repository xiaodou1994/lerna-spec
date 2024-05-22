module.exports = {
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'body-leading-blank': [1, 'always'], // body开始于空白行
    'body-max-line-length': [2, 'always', 100], // 正文限制100字符串
    'footer-leading-blank': [1, 'always'], // footer开始于空白行
    'footer-max-line-length': [2, 'always', 100], 
    'header-max-length': [2, 'always', 100], // 简述限制100字符长度
    'scope-case': [2, 'always', 'lower-case'], // scope小写
    'subject-case': [0], // 
    'subject-empty': [2, 'never'], // subject不为空
    'subject-full-stop': [2, 'never', '.'], // subject结尾不加“.”
    'type-case': [2, 'always', 'lower-case'], // type小写
    'type-empty': [2, 'never'], // type不为空
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'style', 'test', 'refactor', 'chore', 'revert']],
  }
}