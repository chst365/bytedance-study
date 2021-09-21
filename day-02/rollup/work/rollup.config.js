import json from '@rollup/plugin-json'
// 代码压缩
import { terser } from 'rollup-plugin-terser'
// 支持node_modules 依赖的解析
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
export default {
    input: './index.js',
    output: [
        {
            file: 'dist/bundle.esm.js',
            format: 'esm',
            plugins: [terser()]
        },
        {
            file: 'dist/bundle.cjs.js',
            format: 'cjs'
        }
    ],
    plugins: [json(), nodeResolve(), commonjs()],
    external: ['vue']
}