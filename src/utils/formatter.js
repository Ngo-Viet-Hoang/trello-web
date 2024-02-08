export const capitalizeFirstLetter = (val) => {
  if (!val) return "";
  return `${val.charAt(0).toUpperCase()}${val.slice(1)}`;
};

const stringTest = "trungquandev";
const capString = capitalizeFirstLetter(stringTest);

console.log("stringTest:", stringTest);
console.log("capString:", capString);
