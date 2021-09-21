import { foo } from './foo'
import { bar } from './bar'
// tree-shaking
foo()

// webpack -> esm

// rollup  esm -> ast -> 数据结构 -> 生成代码