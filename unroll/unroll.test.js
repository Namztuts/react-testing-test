const unroll = require('./unroll');

const array1 = [[1]];

const array2 = [
   [1, 2],
   [3, 4],
];

const array3 = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9],
];

const array4 = [
   [1, 2, 3, 4],
   [5, 6, 7, 8],
   [9, 10, 11, 12],
   [13, 14, 15, 16],
];

const array5 = [
   [1, 2, 3, 4, 5],
   [6, 7, 8, 9, 10],
   [11, 12, 13, 14, 15],
   [16, 17, 18, 19, 20],
   [21, 22, 23, 24, 25],
];

describe('#unroll', function () {
   it('00 is a function', function () {
      expect(typeof unroll).toEqual('function');
   });

   it('01 works with an array of only 1 num', function () {
      expect(unroll(array1)).toEqual([1]);
   });

   it('02 works with a 2x2', function () {
      expect(unroll(array2)).toEqual([1, 2, 4, 3]);
   });

   it('03 works with a 3x3', function () {
      expect(unroll(array3)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
   });

   it('04 works with a 4x4', function () {
      expect(unroll(array4)).toEqual([
         1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10,
      ]);
   });

   it('05 works with a 5x5', function () {
      expect(unroll(array5)).toEqual([
         1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14,
         19, 18, 17, 12, 13,
      ]);
   });

   it('06 empty array', function () {
      expect(unroll([])).toEqual([]);
   });
});
