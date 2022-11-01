let story =
  'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(" ");
let unnecessaryWord = "literally";
let misspelledWord = "beautifull";
let badWord = "freaking";

// console.log(storyWords); // step 1

let count = 0;
storyWords.forEach((word) => {
  return count++;
});

storyWords = storyWords.filter((word) => {
  if (word !== unnecessaryWord) {
    return true;
  }
});

storyWords = storyWords.map((word) => {
  if (word === misspelledWord) {
    return "beautiful";
  } else return word;
});

const badWordIndex = storyWords.findIndex((word) => {
  return word === badWord;
});
// console.log(badWordIndex); // step 8
// console.log(storyWords[78]);

storyWords[78] = "really"; // step 9

let lengthCheck = storyWords.every((word) => {
  if (storyWords.length < 10) {
    return true;
  }
});

// console.log(lengthCheck); // step 10 - false

let findLongWord = storyWords.forEach((word) =>{
  if (word.length > 10) {
    // console.log(word);
  }
}) // step 11 - 'breathtaking' is longer than 10 characters

let breathTakingIndex = storyWords.findIndex((word) => {
  return word === 'breathtaking';
})
// console.log(breathTakingIndex); // index 111

storyWords[111] = 'glorious'; 

console.log(storyWords.join(" ")); // step 2
// console.log(count); // step 4 - 181 words
