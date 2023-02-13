import type { ConfigEnv, UserConfig } from 'vite';
import { resolve } from 'path';
import React from '@vitejs/plugin-react';
import Pages from 'vite-plugin-pages';
import { createSvgIconsPlugin as Svg } from 'vite-plugin-svg-icons';
import Unocss from 'unocss/vite';
import AutoImport from 'unplugin-auto-import/vite';

const pathResolve = (dir: string) => resolve(process.cwd(), '.', dir);

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();

  const isBuild = command === 'build';
  
  return {
    root,
    resolve: {
      alias: [
        {
          find: /@\//,
          replacement: pathResolve('src') + '/',
        },
        {
          find: /#\//,
          replacement: pathResolve('types') + '/',
        },
      ],
    },
    server: {
      // 监听所有本地ip
      host: '0.0.0.0',
      port: 8080,
    },
    css: {
      preprocessorOptions: {
        sass: {
          javascriptEnabled: true,
        },
      },
    },
    plugins: [
      Unocss(),

      React(),

      Pages({
        exclude: ['**/components/*.tsx'],
      }),

      AutoImport({
        imports: ['react', 'react-router-dom'],
        dts: './types/auto-imports.d.ts',
        dirs: ['./src/utils'],
        eslintrc: {
          enabled: true, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        },
      }),

      Svg({
        iconDirs: [pathResolve('src/assets/icon')],
        svgoOptions: true,
        symbolId: 'icon-[dir]-[name]',
      }),

    ],
    build: {
      target: 'es2020',
      minify: 'terser',
      terserOptions: {
        compress: {
          keep_infinity: true,
          // 去掉console
          drop_console: true,
        },
      },
    },
  };
};
