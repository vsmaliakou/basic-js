import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  const arr = str.split('')
  let count = 1
  let out = ''
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === arr[i + 1]){
      count++
    } else {
      count > 1 ? out += count + arr[i] : out += arr[i]
      count = 1
    }
  }
  return out
}
