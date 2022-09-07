/* eslint-disable */
import "bootstrap";
import "./style.css";

let interFlaw = [
  "Apathetic",
  "Argumentative",
  "Cowardly",
  "Impulsive",
  "Self-centered",
  "Dishonest",
  "Unable to empathize",
  "Jealous",
  "Sarcastic",
  "Arrogant"
];
let intelFlaw = [
  "Inattentive",
  "Lazy",
  "Rigid",
  "Irresponsible",
  "Forgetful",
  "Impatient",
  "Indecisive",
  "Inflexible",
  "Weak-willed",
  "Foolish"
];
let appearFlaw = [
  "Unattractive",
  "Disagreeable",
  "Plain-looking",
  "Unpleasant",
  "Ill-favored",
  "Unfit",
  "Unhealthy",
  "Hideous",
  "Out of shape",
  "Weak"
];
let characFlaw = [
  "Rude",
  "Egocentric",
  "Greedy",
  "Biased",
  "Aggressive",
  "Disrespectful",
  "Manipulative"
];
let workFlaw = [
  "Shy",
  "Untimely",
  "Careless",
  "Irresponsible",
  "Narrow-minded",
  "Unfocused",
  "Bossy",
  "Disloyal",
  "Nervous",
  "Unpredictable"
];
let millenFlaw = [
  "Narcissistic",
  "Too certain",
  "Selfish",
  "Perfectionist",
  "Overly independant",
  "Indecisive Impatient",
  "Too ambitious"
];
let genWho = [
  "Man",
  "Woman",
  "Kid",
  "Girl",
  "Old-man",
  "Old-woman",
  "Baby",
  "Non-bynary",
  "Lesbian",
  "Transgender",
  "Gender-fluid",
  "Gay"
];
let proWho = [
  "Academic",
  "Actor",
  "Administrator",
  "Advisor",
  "Alchemist",
  "Architect",
  "Baker",
  "Bodyguard",
  "Businessman",
  "Butcher",
  "Clergy",
  "Clerk",
  "Comedian",
  "Courier",
  "Criminal",
  "Cult leader",
  "Dancer",
  "Detective",
  "Director",
  "Engineer",
  "Explorer",
  "Factory worker",
  "Witch hunter",
  "Firefighter",
  "Flight attendant",
  "Gambler",
  "Government employee",
  "Gymnast",
  "Hacker",
  "Hermit",
  "Historian",
  "Hoboe",
  "Hunter",
  "Hypnotist",
  "Impostor",
  "Tech-worker",
  "Inventor",
  "Janitor",
  "Librarian",
  "Linguist",
  "Magician",
  "Machinist",
  "Mechanic",
  "Journalist",
  "Medic",
  "Mercenary",
  "Soldier",
  "Miner",
  "Musician",
  "Ninja",
  "Astronaut",
  "Personal Trainer",
  "Professor",
  "Psychiatrist",
  "Psychic",
  "Psychologist",
  "Sailor",
  "Salesman",
  "Teacher",
  "Scientist",
  "Scuba diver",
  "Sculptor",
  "Spy",
  "Slave",
  "Social worker",
  "Sportsman",
  "Stuntman",
  "Surgeon",
  "Superhero",
  "Swordsman",
  "Talent agent",
  "Unemployed",
  "Vetenarian",
  "Vigilante",
  "Yogi"
];
let wants = [
  "to survive",
  "to take revenge",
  "to win the battle",
  "to achieve something",
  "to explore the world",
  "to catch a criminal",
  "to find the truth",
  "to gain love",
  "to bring justice and freedom",
  "to save the republic",
  "to save the world"
];
let against = [
  "a corrupted government",
  "a dangerous pychopath",
  "a family member",
  "a wild animal",
  "a force of nature",
  "a supernatural threat",
  "a skillful criminal",
  "fierceful competition",
  "a biological threat",
  "the end of the world",
  "a boss figure",
  "a loved one",
  "the justice system",
  "police enforcement",
  "political enemies",
  "a monster"
];
let toLearn = [
  "what comes around, goes around",
  "experience shape the future",
  "believing isn’t easy—but is it worth doing anyway",
  "to overcome obstacles, we must strengthen the ties to each other",
  "our actions are decided by fate",
  "our actions are decided by free-will",
  "good triumphs over evil",
  "evil triumphs over good",
  "excessive self-confidence sparks terrible decisions",
  "we are collectively responsible for each other’s actions",
  "we are individually responsible for each other’s actions",
  "we can't survive the disconnection from others",
  "nature has its own means of survival",
  "has to overcome their own internal conflicts",
  "society is sick",
  "has to escape society",
  "power corrupts, and absolute power corrupts absolutely",
  "love makes the world go round, but it’s not always easy to find",
  "revenge begets justice",
  "when someone wrongs you or the people you love, revenge is worth it",
  "when you truly love someone, you’re willing to sacrifice everything for them",
  "when survival is at stake, people discover the limits of their own power"
];

const Boring = arr => {
  let num = Math.floor(Math.random() * arr.length);
  return arr[num];
};

document.querySelector("#printIt").addEventListener("click", () => {
  const logEl = document.querySelector("#logline");
  const flawEl = document.querySelector("#inputState");
  const logList = document.querySelector("#logList");

  console.log(flawEl.value);

  if (flawEl.value === "1") {
    logEl.innerHTML = `A ${Boring(interFlaw)} ${Boring(genWho)} ${Boring(
      proWho
    )} wants ${Boring(wants)} and faces opposition from ${Boring(
      against
    )} to learn that ${Boring(toLearn)}.`;
    logList.innerHTML += `<li class="list-group-item">${logEl.innerHTML}</li>`;
  } else if (flawEl.value === "2") {
    logEl.innerHTML = `A ${Boring(intelFlaw)} ${Boring(genWho)} ${Boring(
      proWho
    )} wants ${Boring(wants)} and faces opposition from ${Boring(
      against
    )} to learn that ${Boring(toLearn)}.`;
    logList.innerHTML += `<li class="list-group-item">${logEl.innerHTML}</li>`;
  } else if (flawEl.value === "3") {
    logEl.innerHTML = `A ${Boring(appearFlaw)} ${Boring(genWho)} ${Boring(
      proWho
    )} wants ${Boring(wants)} and faces opposition from ${Boring(
      against
    )} to learn that ${Boring(toLearn)}.`;
    logList.innerHTML += `<li class="list-group-item">${logEl.innerHTML}</li>`;
  } else if (flawEl.value === "4") {
    logEl.innerHTML = `A ${Boring(characFlaw)} ${Boring(genWho)} ${Boring(
      proWho
    )} wants ${Boring(wants)} and faces opposition from ${Boring(
      against
    )} to learn that ${Boring(toLearn)}.`;
    logList.innerHTML += `<li class="list-group-item">${logEl.innerHTML}</li>`;
  } else if (flawEl.value === "5") {
    logEl.innerHTML = `A ${Boring(workFlaw)} ${Boring(genWho)} ${Boring(
      proWho
    )} wants ${Boring(wants)} and faces opposition from ${Boring(
      against
    )} to learn that ${Boring(toLearn)}.`;
    logList.innerHTML += `<li class="list-group-item">${logEl.innerHTML}</li>`;
  } else if (flawEl.value === "6") {
    logEl.innerHTML = `A ${Boring(millenFlaw)} ${Boring(genWho)} ${Boring(
      proWho
    )} wants ${Boring(wants)} and faces opposition from ${Boring(
      against
    )} to learn that ${Boring(toLearn)}.`;
  } else {
    logEl.innerHTML = `Did you choose a Flawtype?`;
  }
});
