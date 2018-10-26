var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML = "Original Array:<br>" + fruits;

    fruits.splice(3, 1, "Lemon", "Kiwi");
    document.getElementById("demo2").innerHTML = "New Array:<br>" + fruits;