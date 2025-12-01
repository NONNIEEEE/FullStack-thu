const fullName = " Anirach Mingkhwan ";

const cleanedName = fullName.trim();
console.log(`First Name, ${fullName}!`);

const nameParts = cleanedName.split(' ');
console.log(`First Name, ${cleanedName}!`);

const finalParts = nameParts.filter(Boolean);
console.log(`First Name, ${nameParts}!`);

const firstName = finalParts[0];
console.log(`First Name, ${firstName}!`);