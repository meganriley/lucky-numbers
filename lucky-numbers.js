/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let array1String = array1.join("")
  let array1Int = parseInt(array1String)
  let array2String = array2.join("")
  let array2Int = parseInt(array2String)
  return array1Int + array2Int
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let reversed = value.toString().split("").reverse().join("");
  // @ts-ignore
  //did not use strict equality to save time converting str to int
  if (reversed == value) {
    return true
  }
  return false
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  // eslint-disable-next-line valid-typeof
  if (!(input)) {
    return 'Required field'
  // eslint-disable-next-line use-isnan
  } else if (isNaN(input) || input == '0') {
    return 'Must be a number besides 0'
  } else {
    return ''
  }

}

