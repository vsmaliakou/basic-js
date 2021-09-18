import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  let out = []
  let count = 1
  names.forEach(name => {
    if(out.indexOf(name) === -1){
      out.push(name)
    } else {
      if(out.indexOf(`${name}(${count})`) === -1){
        out.push(`${name}(${count})`)
      } else {
        out.push(`${name}(${count + 1})`)
      }
    }
  });
  return out 
}
