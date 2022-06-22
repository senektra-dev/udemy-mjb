// Value type variables.
// They contain their own unique memory container.
// For lack of better wording.
let color = "blue";
let old_color = color;
color = "yellow";
console.log(old_color);

// Reference type variables.
// They contain a pointer to a value in memory.
let nums = [1, 2, 3];
let notOldNums = nums;
nums.shift();
nums.push(4);
console.log(notOldNums);