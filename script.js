"use strict";

// Create your own resume data in JSON format
var resume = {
  my_Name: "Vignesh",
  Email: "viki18596@gmail.com",
  Date_of_birth: "18.05.1996",
  Gender: "Male",
  Nationality: "Indian",
  Marital_Status: "Single",
  Languages_known: ["English", "Tamil"],
  Age: 26,
  Marks: { "B.E": "CGPA 7.35", "Higher secondary": "87%", SSLC: "85%" },
  Qualification: "B.E Mechanical",
  Years_of_Experience: 4,
  Software_proficiency: [
    "Autocad",
    "Solidoworks",
    "javascript",
    "python",
    "HTML",
    "css",
    "Ms office",
  ],
  Key_strength: ["short leaning curve", "creative", "apdaptive"],
  Personal_hobbies: ["Gaming", "Binge watching"],
};

var resume_JSON_Format = JSON.stringify(resume);
console.log(resume_JSON_Format);

// For the given JSON iterate over all for loops (for, for in, for of, forEach)
var json_data = {
  my_Name: "Vignesh",
  Email: "viki18596@gmail.com",
  Date_of_birth: "18.05.1996",
  Gender: "Male",
  Nationality: "Indian",
  Marital_Status: "Single",
  Languages_known: ["English", "Tamil"],
  Age: 26,
  Marks: { "B.E": "CGPA 7.35", "Higher secondary": "87%", SSLC: "85%" },
};
const count = Object.keys(json_data);

// for loop
for (let i = 0; i < count.length; i++) {
  console.log(json_data[count[i]]);
}

// for in
for (let keys in json_data) {
  console.log(json_data[keys]);
}

// for Of
for (let i of count) {
  console.log(json_data[i]);
}

// for each
count.forEach(values);
function values(item) {
  console.log(json_data[item]);
}
