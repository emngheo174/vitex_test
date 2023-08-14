function generateArrays(array, k) {
    let subarrays = [];
    function generateHelper(array, k, current = []) {
        if (current.length === k) {
            subarrays.push([...current]);
            return;
        }
    
        for (let i = 0; i < array.length; i++) {
            current.push(array[i]);
            generateHelper(array.slice(i + 1), k, current);
            current.pop();
        }
    }
    
    generateHelper(array, k);
    
    return subarrays;
    }

const array = [1,2,3,4,5,6,7,8,9,10];
const k = 3;

const subarrays = generateArrays(array, k);
console.log(subarrays);