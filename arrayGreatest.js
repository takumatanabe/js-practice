let array = [1 , 2, 4, 6, 15];
let largest = array[0];
function largestNumber() {
    for (let i = 1; i < array.length; i++) {
        if (array[i] > largest)
        largest = array[i];
    }
    document.getElementById("demo").innerHTML = "The largest number of the array is: " + largest;
}
largestNumber();

