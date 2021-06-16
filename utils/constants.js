const process = require('process');
const path = require('path');

exports.BASE_PATH = path.resolve(process.cwd());
exports.CONFIG_FILE_NAME = 'gentypes.json';
exports.CONFIG_PATH = `${this.BASE_PATH}/${this.CONFIG_FILE_NAME}`;

// 生成/修改配置
exports.PROMPTS_CONFIG_OPTIONS = [
  {
    type: 'checkbox',
    name: 'options',
    message: '请选择需要配置的选项: ',
    choices: ['outputPath'],
  },
];
exports.PROMPTS_CONFIG = [
  {
    type: 'input',
    name: 'outputPath',
    message: '请输入声明文件的输出路径: ',
  },
];

// data
exports.PROMPTS_DATA = [
  {
    type: 'input',
    name: 'name',
    message: '请输入声明文件名称',
  },
  {
    type: 'editor',
    name: 'data',
    message: '请输入data',
  },
]

// cURL
exports.PROMPTS_CURL = [
  {
    type: 'input',
    name: 'name',
    message: '请输入声明文件名称',
  },
  {
    type: 'editor',
    name: 'cURL',
    message: '请输入cURL',
  },
];
