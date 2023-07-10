# [Mohammed](https://www.codewars.com/users/myTerminal)

```js
function positiveSum(arr) {
  return arr.filter((x) => x >= 0).reduce((a, c) => a + c, 0);
}
```

## Strategy

🖊️ You get an array of numbers, return the sum of all of the positives ones.

📓 In this problem all numbers are checked, only positive numbers are selected
and the sum of these numbers is returned, and negative numbers are ignored.

📓 Declare a valuable to which the accumulated numbers are added. Then search
the array and, if th number is positive, add to the variable, otherwise ignore
this number.

## Implementation

He used two methods of working with arrays. The first 'filter': split numbers
into positive and negative numbers. The seconde used the 'reduce' method:
accumulate all positive numbers. And return the sum.

## Possible Refactors

This strategy can be implemented using a loop. And perhaps the code will remain
clean.

## References

It's good way.
