# [Mohammed](https://www.codewars.com/users/myTerminal)

```js
function positiveSum(arr) {
  return arr.filter((x) => x >= 0).reduce((a, c) => a + c, 0);
}
```

## Strategy

🖊️ You get an array of numbers, return the sum of all of the positives ones.

📓 Filter the array by condition. And if the numbers matches the condition, it
is summed if not ignored.

## Implementation

He used two methods of working with arrays. The first 'filter': split numbers
into positive and negative numbers. The seconde used the 'reduce' method:
accumulate all positive numbers. And return the sum.

## Possible Refactors

This strategy can be implemented using a loop. And perhaps the code will remain
clean.

## References
