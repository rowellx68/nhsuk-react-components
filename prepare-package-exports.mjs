import fs from 'node:fs';
import fg from 'fast-glob';
import { deleteSync } from 'del';

const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

const files = fg.globSync([
  'dist/**/*.mjs',
  '!dist/internal/**/*',
  '!dist/**/*.context.mjs',
  '!dist/**/resources/**/*.mjs',
  '!dist/**/_virtual/*',
]);

const exports = files.reduce((acc, file) => {
  let exportKey =
    file === 'dist/index.mjs'
      ? '.'
      : file.includes('/internal')
        ? file.replace('dist/', './').replace('.mjs', '')
        : file
            .split('/')
            .slice(0, -1)
            .join('/')
            .replace('dist/', './')
            .replace('.mjs', '');

  const basePath = `./${file}`.replace('.mjs', '');

  const exportKeyLastPart = exportKey.split('/')
    .pop();

  const basePathLastPart = basePath
    .split('/')
    .pop()
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .replace(/([a-z\d])([A-Z])/g, '$1-$2')
    .toLowerCase();

  if (exportKeyLastPart !== basePathLastPart && !basePathLastPart.startsWith('index')) {
    const key = basePathLastPart.replace(`${exportKeyLastPart}-`, '');

    exportKey = `${exportKey}/${key}`;
  }

  return {
    ...acc,
    [exportKey]: {
      import: `${basePath}.mjs`,
      require: `${basePath}.js`,
    },
  };
}, {});

pkg['exports'] = exports;

fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 2) + '\n');

deleteSync('dist/**/*.d.ts');
