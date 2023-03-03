import fabric = require("@umijs/fabric");

module.exports = {
  ...fabric.prettier,
  semi: true, // 句末加分号
  singleQuote: false, // 用单引号
  bracketSpacing: true, // 对象，数组加空格
  jsxBracketSameLine: false, // jsx > 是否另起一行
  arrowParens: "avoid", // (x) => {} 是否要有小括号
  requirePragma: false, // 是否要注释来决定是否格式化代码
  proseWrap: "preserve", // 是否要换行
};
