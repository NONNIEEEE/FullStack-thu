const message = "Hello World";
const vowels = "aeiouAEIOU"; 

for (const char of message) {
    if (vowels.includes(char)) {
        console.log(char);
    }
}