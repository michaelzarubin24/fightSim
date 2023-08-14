"use strict";
// ----------------------------------------------------------------
alert("Welcome!");
let isArray = Array.isArray;
const extractData = (people, tag) => {
  if (isArray(people)) {
    let sum = 0;
    for (const person of people) {
      const value = person[tag];
      sum += value;
    }
    console.log(sum);
    return sum;
  }
};
const BUDGET_BY_DEFAULT = 20000;

const IT_STEP_ACADEMY = {
  budget: BUDGET_BY_DEFAULT,
  teachers: [
    {
      id: "000001",
      name: "Albert",
      surname: "Einstein",
      income: 3000,
    },
    {
      id: "000002",
      name: "Nicola",
      surname: "Tesla",
      income: 4000,
    },
    {
      id: "000003",
      name: "Steve",
      surname: "Jobs",
      income: 2000,
    },
    {
      id: "000004",
      name: "Robert",
      surname: "Oppenheimer",
      income: 8000,
    },
  ],

  students: [
    {
      id: "100001",
      name: "Michael",
      surname: "Zarubin",
      outcome: 3000,
    },
    {
      id: "100002",
      name: "Vlad",
      surname: "Pitt",
      outcome: 2000,
    },
    {
      id: "100003",
      name: "Bread",
      surname: "Hleb",
      outcome: 4000,
    },
    {
      id: "100004",
      name: "Harry",
      surname: "Potter",
      outcome: 5000,
    },
  ],
};

for (const key in IT_STEP_ACADEMY) {
  const value = IT_STEP_ACADEMY[key];

  switch (key) {
    case "students":
      extractData(value, "outcome");
      break;
    case "teachers":
      extractData(value, "income");
      break;

    case "budget":
      const outcome = extractData(IT_STEP_ACADEMY.students, "outcome");
      const income = extractData(IT_STEP_ACADEMY.teachers, "income");
      const prev_budget = IT_STEP_ACADEMY[key];

      IT_STEP_ACADEMY.budget = outcome - income;
      console.log(outcome - income);
      console.log("[prev_budget]", prev_budget);
      console.log("[actual_budget]", IT_STEP_ACADEMY.budget);
      break;

    default:
      break;
  }
}
