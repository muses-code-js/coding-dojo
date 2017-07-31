# Scrabble Score
Given a word, compute the scrabble score for that word.

## Letter Values
You'll need these:
```
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
```
E.g. Javascipt should return `24`:
* 8 points for `j`,
* 1 point for `a` twice,
* 4 points for `v`,
* 1 point for `s`,
* 3 points for `c`,
* 1 point for `r`,
* 1 point for `i`,
* 3 points for `p`,
* 1 point for `t`

Which gives us a total of `24`.

Inspired from [rchantley's extreme startup game](https://github.com/rchatley/extreme_startup).
