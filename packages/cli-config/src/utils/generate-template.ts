import path from 'path';
import fs from 'fs-extra';
import _ from 'lodash';
import glob from 'glob';
// 嵌入式JS模板引擎
import ejs from 'ejs';
import {
  ESLINT_IGNORE_PATTERN,
  STYLELINT_FILE_EXT,
  STYLELINT_IGNORE_PATTERN,
  MARKDOWN_LINT_IGNORE_PATTERN,
} from './constants';

/**
 * vscode 配置合并
 * @param filepath
 * @param content
 */
const mergeVSCodeConfig = (filepath: string, content: string) => {
  // 不需要 merge
  if (!fs.existsSync(filepath)) return content;

  try {
    const targetData = fs.readJSONSync(filepath);
    const sourceData = JSON.parse(content);
    return JSON.stringify(
      _.mergeWith(targetData, sourceData, (target, source) => {
        if (Array.isArray(target) && Array.isArray(source)) {
          return [...new Set(source.concat(target))];
        }
      }),
      null,
      2,
    );
  } catch (e) {
    return '';
  }
};

/**
 * 实例化模板
 * @param cwd
 * @param data
 * @param vscode
 */
export default (cwd: string, data: Record<string, any>, vscode?: boolean) => {
  console.log('cwd=', cwd, data)
  const templatePath = path.resolve(__dirname, '../config');
  const templates = glob.sync(`${vscode ? '_vscode' : '**'}/*.ejs`, { cwd: templatePath });
  console.log('templates=', templates, templatePath)
  for (const name of templates) {
    const filepath = path.resolve(cwd, name.replace(/\.ejs$/, '').replace(/^_/, '.'));
    console.log('filepath--', fs.readFileSync(path.resolve(templatePath, name), 'utf8'), filepath, '=============')
    let content = ejs.render(fs.readFileSync(path.resolve(templatePath, name), 'utf8'), {
      eslintIgnores: ESLINT_IGNORE_PATTERN,
      stylelintExt: STYLELINT_FILE_EXT,
      stylelintIgnores: STYLELINT_IGNORE_PATTERN,
      markdownLintIgnores: MARKDOWN_LINT_IGNORE_PATTERN,
      ...data,
    });

    console.log('content--', content)

    // 合并 vscode config
    if (/^_vscode/.test(name)) {
      content = mergeVSCodeConfig(filepath, content);
    }

    // 跳过空文件
    if (!content.trim()) continue;

    fs.outputFileSync(filepath, content, 'utf8');
  }
};
