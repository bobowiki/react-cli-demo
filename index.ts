// fs 复制teamplate中所有内容 到新的目录 template-demo

import fse from 'fs-extra';
import path from 'path';

function copyFile() {
  const sourceDir = path.join(__dirname, 'templates');
  const destDir = path.join(__dirname, 'templates-demo');
  try {
    fse.copySync(sourceDir, destDir);
    console.log('复制成功 :>> ');
  } catch (error) {
    console.log('复制失败', error);
  }
}
copyFile();
// 读取cdn目录中的package.json合并到devDependencies & dependencies到
// template-demo 中的package.json

// 读取cdn目录中的vite.config.data.ts
