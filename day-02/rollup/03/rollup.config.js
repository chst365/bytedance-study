import json from '@rollup/plugin-json'
import terser from 'rollup-plugin-terser'
export default {
    input: './index.js',
    output: [{
        file: 'dist/bundle.js',
        format: 'esm',
        plugins: [terser()]
    }, {
        file: 'dist/bundle.cjs.js',
        format: 'cjs'
    }],
    plugins: [json()]
}