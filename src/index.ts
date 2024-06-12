#!/usr/bin/env node
// fs 复制teamplate中所有内容 到新的目录 template-demo
import prompts from 'prompts';

(async () => {
  const response = await prompts([
    {
      type: 'text',
      name: 'project-name',
      message: `please input project name?`,
    },
    {
      type: 'select',
      name: 'css frame',
      message: 'choose css frame',
      choices: [
        {
          title: 'unocss',
          value: 'unocss',
          description: 'UnoCSS Instant On-demand Atomic CSS Engine',
        },
        {
          title: 'tailwindcss',
          value: 'tailwindcss',
          description:
            'Rapidly build modern websites without ever leaving your HTML.',
        },
      ],
    },
    {
      type: 'multiselect',
      name: 'config',
      message: 'pick your need',
      choices: [
        { title: 'router', value: 'router', description: 'react-router' },
        { title: 'mock', value: 'mock', description: 'mockjs' },
        { title: 'arco desgin', value: 'arco', description: 'a ui framework' },
      ],
      hint: '- Space to select. Return to submit',
    },
    {
      type: 'toggle',
      name: 'layout',
      message: 'need layout?',
      initial: false,
      active: 'yes',
      inactive: 'no',
    },
  ]);

  console.log(response); // => { value: 24 }
})();

// import fse from 'fs-extra';
// import path from 'path';

// const cwd = process.cwd();
// const destDir = path.join(cwd, './templates-demo');

// function copyFile() {
//   const sourceDir = path.join(__dirname, '../templates/base');

//   try {
//     fse.copySync(sourceDir, destDir);
//     console.log('复制成功 :>> ');
//   } catch (error) {
//     console.log('复制失败', error);
//   }
// }
// copyFile();
// 读取cdn目录中的package.json合并到devDependencies & dependencies到
// template-demo 中的package.json

// 读取cdn目录中的vite.config.data.ts
