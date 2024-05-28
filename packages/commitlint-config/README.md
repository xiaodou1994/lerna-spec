# `spec-commitlint-config`

> Git 规范

用于对 `git commit message` 进行校验。

## 安装

使用时，需要安装[@commitlint/cli](https://www.npmjs.com/package/@commitlint/cli):
```bash
npm install spec-commitlint-config @commitlint/cli --save-dev
```

## 使用`commitlint.config.js`中集成本包：

```js
module.exports = {
  extends: ['spec-commitlint-config'],
};
```

## 设置 git hook

可通过[husky](https://www.npmjs.com/package/husky)设置在`git commit`时触发`commitlint`

首先安装 husky:

```bash
npm install husky --save-dev
```

然后执行添加`commit-msg`:

```bash
npx husky add .husky/commit-msg 'npx commitlint --edit $1'
```

更多信息可参考 [commitlint 文档](https://commitlint.js.org/guides/local-setup.html#using-a-git-hooks-manager)
