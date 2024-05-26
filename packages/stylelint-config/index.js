module.exports = {
  defaultSeverity: 'warning',
  plugins: ['stylelint-scss'],
  rules: {
    /**
     * Possible errors
     * @link https://stylelint.io/user-guide/rules/#possible-errors
     */
    'at-rule-no-unknown': null, // 关闭该规则  不允许未知的at-rules
    'scss/at-rule-no-unknown': true, // 启用该规则  不允许未知的at-rules
    'block-no-empty': null, // 不允许空块，关闭
    'color-no-invalid-hex': true, // 不允许无效的十六进制颜色
    'comment-no-empty': true, // 不允许空评论
    // 不允许在声明块内重复属性
    'declaration-block-no-duplicate-properties': [
      true,
      {
        // 忽略具有不同值的连续重复属性。
        ignore: ['consecutive-duplicates-with-different-values']
      }
    ],
    // 不允许重写相关手写体属性的速记属性
    'declaration-block-no-shorthand-property-overrides': true,
    // 不允许字体系列中的名称重复
    'font-family-no-duplicate-names': true,
    // 在calc函数中不允许无效的无空格运算符
    'function-calc-no-unspaced-operator': true,
    // 不允许线性梯度函数的非标准方向值
    'function-linear-gradient-no-nonstandard-direction': true,
    // 不允许keyframe声明中的无效!important
    'keyframe-declaration-no-important': true,
    // 不允许未知的媒体功能名称
    'media-feature-name-no-unknown': true,
    // 不允许较低特异性的选择器在覆盖较高特异性的选择器之后出现， 关闭该规则
    'no-descending-specificity': null, // @reason 实际有很多这样用的，且多数人熟悉 css 优先级
    // 不允许重复的@import规则。
    'no-duplicate-at-import-rules': true,
    // 不允许重复的选择器。
    'no-duplicate-selectors': true,
    // 不允许空源， 关闭该规则
    'no-empty-source': null,
    'no-extra-semicolons': true,
    // 不允许使用无效的双斜杠注释。
    'no-invalid-double-slash-comments': true,
    // 不允许未知属性 
    'property-no-unknown': true,
    // 不允许未知的伪类选择器。
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'local', 'export'],
      },
    ],
    // 不允许未知的伪元素选择器
    'selector-pseudo-element-no-unknown': true,
    // 不允许字符串中出现无效的换行符。
    'string-no-newline': true,
    // 不允许未知单位
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['rpx'],
      },
    ],

    /**
     * Stylistic issues
     * @link https://stylelint.io/user-guide/rules/list#stylistic-issues
     */
    // 缩进2个
    indentation: 2,
    'block-closing-brace-newline-before': 'always-multi-line',
    'block-closing-brace-space-before': 'always-single-line',
    'block-opening-brace-newline-after': 'always-multi-line',
    'block-opening-brace-space-before': 'always',
    'block-opening-brace-space-after': 'always-single-line',
    'color-hex-case': 'lower',
    // 指定十六进制颜色的短或长表示法。
    'color-hex-length': 'short',
    // 要求或禁止在注释标记内部使用空格
    'comment-whitespace-inside': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-colon-space-after': 'always',
    // 限制单行声明块中的声明数量。
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': [
      'always',
      {
        severity: 'error',
      },
    ],
    // 不允许长度为零的单位。
    'length-zero-no-unit': [
      true,
      {
        ignore: ['custom-properties'],
      },
    ],
    // 限制选择器中ID选择器的数量。
    'max-line-length': 100,
    'selector-max-id': 0, // 不要使用 id 选择器
    // 
    'value-list-comma-space-after': 'always-single-line',

    /**
     * stylelint-scss rules
     * @link https://www.npmjs.com/package/stylelint-scss
     */
    'scss/double-slash-comment-whitespace-inside': 'always',
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
}