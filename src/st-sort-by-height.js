import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let newArr = [...arr].sort(function compareNumbers (a, b){
    return a - b
  }).filter(c => c !== -1)
  let out = []
  arr.forEach(a => a === -1 ? out.push(a) : out.push(newArr.shift()))
  return out
}
