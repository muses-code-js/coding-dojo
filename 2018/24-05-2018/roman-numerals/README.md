# Roman Numerals

## Problem Description

The Romans were a clever bunch. They conquered most of Europe and ruled it for
hundreds of years. They invented concrete and straight roads and even bikinis.
One thing they never discovered though was the number zero. This made writing
and dating extensive histories of their exploits slightly more challenging, but
the system of numbers they came up with is still in use today. For example the
BBC uses Roman numerals to date their programmes.

The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these
letters have lots of straight lines and are hence easy to hack into stone
tablets).

The Kata says you should write a function to convert from normal numbers to
Roman Numerals. E.g.:

   1  -> I
   10 -> X
   7  -> VII

For a full description of how it works, take a look at
https://en.wikipedia.org/wiki/Roman_numerals

There is no need to be able to convert numbers larger than about 3000 (the
Romans themselves didn't tend to go any higher). Note that you can't write
numerals like "IM" for 999. Wikipedia says: Modern Roman numerals (…) are
written by expressing each digit separately starting with the left most digit
and skipping any digit with a value of zero. To see this in practice, consider
the (…) example of 1990. In Roman numerals 1990 is rendered: 1000=M, 900=CM,
90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII.

Here are a few more examples you can use as test cases:

1954 -> MCMLIV
1990 -> MCMXC
2014 -> MMXIV

# Extension:

Write a function to convert in the other direction, i.e. numeral to digit.

From: http://codingdojo.org/kata/RomanNumerals/
