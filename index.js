// node  实现文件夹分类

// node 要求 16.7.0 ！！

// 模糊分类 文件夹名包含字段 进行分类

// 思路
// 1. 获取文件夹下的所有文件夹。
// 2。 进行遍历。模糊匹配文件名 进行归类。
// 3. 创建 分类文件夹，开始复制分类文件夹
const fs = require('fs');
const path = require('path');

/** 主要版本 */
let major = process.version.match(/v([0-9]*).([0-9]*)/)[1]
/** 特性版本 */
let minor = process.version.match(/v([0-9]*).([0-9]*)/)[2]


let targetPath = null   // 源文件根目录
let destPath = null     // 目标根目录
let categoryDirPath = './category'

function categoryDir(dir, dirNameList) {

    if (Number(major) < 16 || Number(major) == 16 && Number(minor) < 7) { 
        console.log('请使用 node 16.7.0 版本~~');
        return
    }
    targetPath = path.join(__dirname, dir);
    const dirList = fs.readdirSync(targetPath);
    if (dirList) createCategoryDir(dirNameListFilter(dirNameList, dirList))
}

// 构建分类信息
function dirNameListFilter(dirNameList, dirList = []) {
    const map = new Map();
    for (let index = 0; index < dirNameList.length; index++) {
        const e = dirNameList[index];
        const list = dirList.filter(item => ~item.indexOf(e))
        map.set(e, list)
    }
    return map;
}

// 创建分类根目录
function createCategoryDir(dirMap) {

    // 分类根目录
    destPath = path.join(__dirname, categoryDirPath)
    // 判断分类文件夹是否存在
    if (!fs.existsSync(destPath)) fs.mkdirSync(destPath);
    for (let [key, dirList] of dirMap.entries()) { 
        fs.mkdirSync( path.join(destPath, key), { recursive: true });
        dirList.forEach(d => cpSyncDir(path.join(targetPath, d), path.join(path.join(destPath, key), d)))
    }
}


// 复制
/**
 * 
 * @param {*} sourcePath 源文件
 * @param {*} destPathDir 目标文件
 */
function cpSyncDir(sourcePath, destPathDir) {

      fs.mkdirSync(destPathDir, {recursive: true});
      fs.cpSync(sourcePath, destPathDir, { force: true, recursive: true })
      console.log(sourcePath, '=====>>>>>>', destPathDir, '；复制成功');

}


// 移动文件夹
/** string 需要分类的源目录
 * Array [] 分类文件名（包含该字符）
 */
categoryDir('questions', ['easy', 'medium', 'hard', 'extreme'])
