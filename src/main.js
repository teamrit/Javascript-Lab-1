import React, {Fragment} from 'react';
import {adjectives, alterEgos, firstNouns, secondNouns, origins, powers} from "./character-data";

export const randomArrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

function generateCharacterName () {
  let adjective = randomArrayElement(adjectives);
  const firstNoun = randomArrayElement(firstNouns);
  const secondNoun = randomArrayElement(secondNouns);
  adjective = adjective === "" ? `the ${adjective}` : `${adjective}`;
  return [adjective, firstNoun, secondNoun].join(" ");
}

export const character = generateCharacterName();

const alterEgo = randomArrayElement(alterEgos);
const power = randomArrayElement(powers);
const characterTypes = ["superhero", "villain", "mercenary", "anti-hero"];
const type = randomArrayElement(characterTypes);
const valueAndLabel = [
    ['Character Name' , character],
    ['Alter Ego' , alterEgo],
    ['Power' , power],
    ['Character Type' , type]
];

export const createTable = () => {
  return (
  <Fragment>
      {valueAndLabel.map(v => {
        const [label, value] = v;
        return (<tr key={label}>
          <td>{label}</td>
          <td className="text-warning">{value}</td>
      </tr>)})}
  </Fragment>)
};

export const makeStory = () => {
    let story = randomArrayElement(origins);
    story = story.replace(":character:", character);
    story = story.replace(":alterego:", alterEgo);
    story = story.replace(":power:", power);
    return story;
};