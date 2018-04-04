# Ceaser Shift Cipher

## Problem Description

Cryptography is one of most interesting branches of programming. Studying its algorithms usually begins with the simple method named after famous Roman emperor Julius Caesar who used it for communicating his military secrets (and perhaps for love letters to Cleopatra).

Let us Deciphere encrypted Messages 

The idea of the algorithm is simple. Each letter of the original text is substituted by another, by the following rule:

find the letter (which should be encrypted) in the alphabet;
move ```K ``` positions further (down the alphabet), where K is the Shift value
take the new letter from here;
if "shifting" encountered the end of the algorithm, continue from its start.

For example, if K = 3 (shift value used by Caesar himself), then A becomes D, B becomes E, W becomes Z and Z becomes C and so on, according to the following table:

so when K is 3, 
YHQL YLGL YLFL should return VENI VIDI VICI.


Note:
The value of K can either be pre-determined or got as an input from the user

From: http://www.codeabbey.com/
