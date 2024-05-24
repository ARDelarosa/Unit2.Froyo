const userFlavor = prompt(
    "What are some of your favorite flavors? Enter flavors with commas in between please."
)

const response = userFlavor.split(',');
console.log(response)

const froyoFlavors = {}

for (i = 0; i < response.length; i++) {
    const flavor = userFlavor[i];
    if (froyoFlavors[flavor]) {
        froyoFlavors[flavor] += 1;
    } else {
        froyoFlavors[flavor] = 1;
    }
}

console.log(froyoFlavors)