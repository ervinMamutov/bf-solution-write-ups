# [Remix x](https://www.codewars.com/kata/5715eaedb436cf5606000381)

This solution is interesting.

```js
const solution = (number) => {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 <= 0 || i % 5 <= 0) {
      sum += i;
    }
  }
  return sum;
};
```

## Strategy

You get an array of numbers, return the sum of all of the positives ones.

📓 In this problem all numbers are checked, only positive numbers are selected
and the sum of these numbers is returned, and negative numbers are ignored.

📓 Declare a valuable to which the accumulated numbers are added. Then search
the array and, if th number is positive, add to the variable, otherwise ignore
this number.

## Implementation

First, a variable is declared in which the result will be saved. Second, start
the cycle. In the cycle, take all the numbers between 0 and the given number.
And check for a multiplicity of 3 or 5.

## Possible Refactors

Yes, all the time there is an opportunity for refactoring. Maybe later.

## References
