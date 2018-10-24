const colors = require('colors')

let program = [
  '',
  '                                    1024程序员节日快乐                                ',
  '',
  '    1111111             000000000           2222222222222222             444444444   ',
  '    1      1          00         00        2                2           4        4   ',
  '   1       1        00             00      2      222222     2         4         4   ',
  '   111     1       0       000       0      222222     2     2        4    44    4   ',
  '      1    1       0      0   0      0                 2     2       4    4 4    4   ',
  '      1    1       0     0     0     0                 2     2      4    4  4    4   ',
  '      1    1       0     0     0     0              2222    2      4    4   4    4   ',
  '      1    l       0     0 000 0     0         22222      22      4    444444    444 ',
  '      1    l       0     0 000 0     0       22        222       4                 4 ',
  '      1    l       0     0     0     0      2     22222          444444444444    444 ',
  '      1    l       0     0     0     0     2     2                          4    4   ',
  '      1    l       0      0   0      0     2     2                          4    4   ',
  '   111      111    0       000       0     2     2       222222             4    4   ',
  '   1          1     00             00      2      2222222     2            44    44   ',
  '   1          1       00         00        2                  2            4      4  ',
  '   111111111111         000000000          22222222222222222222            44444444 ',
  '',
  '--------------------------------------------------------------------------------------',
  '',
  '   111111111111         000000000          22222222222222222222            44444444 ',
  '   1          1       00         00        2                  2            4      4  ',
  '   1          1     00             00      2      2222222     2            44    44   ',
  '   111      111    0       000       0     2     2       222222             4    4   ',
  '      1    l       0      0   0      0     2     2                          4    4   ',
  '      1    l       0     0     0     0     2     2                          4    4   ',
  '      1    l       0     0     0     0      2     22222          444444444444    444 ',
  '      1    l       0     0 000 0     0       22        222       4                 4 ',
  '      1    l       0     0 000 0     0         22222      22      4    444444    444 ',
  '      1    1       0     0     0     0              2222    2      4    4   4    4   ',
  '      1    1       0     0     0     0                 2     2      4    4  4    4   ',
  '      1    1       0      0   0      0                 2     2       4    4 4    4   ',
  '   111     1       0       000       0      222222     2     2        4    44    4   ',
  '   1       1        00             00      2      222222     2         4         4   ',
  '    1      1          00         00        2                2           4        4   ',
  '    1111111             000000000           2222222222222222             444444444   ',
  ''
]

let length = program.length
for (let i = 0; i < length; i++) {
  if (i < length / 2) {
    console.log(colors.rainbow(program[i]))
  } else {
    console.log(colors.blue(program[i]))
  }
}
