import dataSet from './data/rickandmorty/rickandmorty.js';


// ********** Filter species **********
const humans = dataSet.results.filter((human) => human.species === 'Human');
const aliens = dataSet.results.filter((alien) => alien.species === 'Alien');
const humanoids = dataSet.results.filter((humanoid) => humanoid.species === 'Humanoid');
const unknowns = dataSet.results.filter((unkno) => unkno.species === 'unknown');
const poopybuttholes = dataSet.results.filter((poopybutthole) => poopybutthole.species === 'Poopybutthole');
const mythologs = dataSet.results.filter((mytholog) => mytholog.species === 'Mytholog');
const animals = dataSet.results.filter((animal) => animal.species === 'Animal');
const vampires = dataSet.results.filter((vampire) => vampire.species === 'Vampire');
const robots = dataSet.results.filter((robot) => robot.species === 'Robot');
const cronenbergs = dataSet.results.filter((cronenberg) => cronenberg.species === 'Cronenberg');
const diseases = dataSet.results.filter((disease) => disease.species === 'Disease');
const parasites = dataSet.results.filter((parasite) => parasite.species === 'Parasite');
const episodes = dataSet.results.filter((episode) => episode.species === 'Episode');

const sortAnythingByName = (array) => {
  return array.sort((a, b) => ((a.name < b.name) ? -1 : 1));
};

export {
  humans,
  aliens,
  humanoids,
  unknowns,
  poopybuttholes,
  mythologs,
  animals,
  vampires,
  robots,
  cronenbergs,
  diseases,
  parasites,
  sortAnythingByName,
};


