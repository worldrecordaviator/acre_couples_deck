
const questions = [
  "What pain in me would you most like to heal?",
  "How would you describe me to a total stranger?",
  "If for some reason I lost my memory, what's the first thing you'd tell me about us?",
  "What's one of your favorite memories from when we were first dating?",
  "When did you realize that you were in love with me?",
  "What do you think our younger selves would admire about us now?",
  "What habit of mine makes you feel most loved?",
  "What do you think is our greatest strength as a couple?",
  "If we could relive one day together, which would it be and why?",
  "What’s something I do that always makes you smile?",
  "What’s one goal we haven’t tackled yet that excites you?",
  "When do you feel closest to me?",
  "What do you think is my love language?",
  "How do you define 'home' and how do I fit into that?",
  "What do you wish we did more often?",
  "If we were in a long-distance relationship, what would you miss most?",
  "What’s something I’ve done that you’re really proud of?",
  "What’s your favorite way to spend a lazy day with me?",
  "If our relationship were a movie, what genre would it be?",
  "What’s a small gesture I do that you secretly love?",
  "What’s something you hope we’ll still do when we’re old?",
  "How has our relationship changed you?",
  "What’s one thing you’ve never told me but always wanted to?",
  "What moment in our relationship felt like a turning point?",
  "What’s something we overcame together that made us stronger?",
  "If we could live anywhere in the world together, where would it be?",
  "What do you think our best adventure has been so far?",
  "What song reminds you of us and why?",
  "What do you think our biggest challenge has been?",
  "What’s one thing you admire about how I handle conflict?",
  "How do I make you feel safe?",
  "What’s a tradition you’d like to start together?",
  "If we had met at a different time in life, how do you think it would have gone?",
  "What’s something I do that makes you feel appreciated?",
  "What’s one dream you have for our future?",
  "What does intimacy mean to you in our relationship?",
  "What’s one way you’ve seen me grow since we met?",
  "What do you think keeps our relationship strong?",
  "When was a time you felt deeply understood by me?",
  "What scares you most about the future—and how can I help ease that fear?",
  "What do you love most about how we handle tough times?",
  "What’s something you think we’re really good at together?",
  "What’s your favorite thing we’ve built together (tangible or not)?",
  "If you could freeze one memory of us, what would it be?",
  "What’s something I do that makes you feel more confident?",
  "What’s a small disagreement we always seem to have, and how could we laugh about it instead?",
  "When do you feel most desired by me?",
  "What’s something I used to do that you miss?",
  "What’s one thing you hope never changes between us?",
  "What does forgiveness look like in our relationship?",
  "How do I make you feel seen?",
  "What are you most grateful for in our relationship?",
  "What’s one thing we could do better as a couple?",
  "What do you think makes our love story unique?",
  "What’s a fear you have about us that you don’t often share?",
  "What’s a milestone we haven’t hit yet that you look forward to?",
  "If we had a motto as a couple, what would it be?",
  "How do we complement each other?",
  "What’s something you want us to try for the first time together?",
  "When do you feel most like a team with me?",
  "What’s something you wish we talked about more?",
  "What do you think is the most romantic thing I’ve ever done?",
  "What do you love most about how we communicate?",
  "What was your first impression of me—and what surprised you later?",
  "What’s something I do that brings out the best in you?",
  "How do you know I love you without me saying it?",
  "What’s your favorite quiet moment we’ve shared?",
  "If we could go on any trip together tomorrow, where would we go?",
  "What’s something about me that still surprises you?",
  "How would you describe the way we’ve grown together?",
  "What do you hope I never change about myself?",
  "How do you think our love has evolved over time?",
  "What’s one thing you’re excited to do with me this year?",
  "What’s your favorite compliment I’ve given you?",
  "What’s a time we made a really great team?",
  "What’s something silly we do that makes you feel connected?",
  "What’s something you’d like to do differently in our next chapter?",
  "What’s one thing you wish you could relive from our early days?",
  "What’s something I’ve said that stuck with you?",
  "How do you think we’ve influenced each other’s lives?",
  "What’s one lesson we’ve learned together that you value?",
  "When do you feel most supported by me?",
  "What’s your favorite thing about the way I look at you?",
  "What do you love most about how we resolve conflict?",
  "What do you think I’ve taught you about love?",
  "What’s a moment you realized we were in this for the long haul?",
  "How do I make your everyday life better?",
  "What’s something we’ve created together that you’re proud of?",
  "What do you think our relationship brings out in others?",
  "What’s one promise you hope we always keep to each other?",
  "What’s one word that describes how I love you?",
  "If our relationship had a theme song, what would it be?",
  "What’s one thing you want us to remember during hard times?",
  "What’s something we’ve mastered together?",
  "What’s a small act of kindness you still remember from me?",
  "What’s something I’ve done that made you fall deeper in love?",
  "What do you think makes our bond unbreakable?",
  "How do you feel when we’re apart—and what helps with that?",
  "What’s something new we could learn together?",
  "What do you think our future selves would thank us for doing now?",
  "What’s something about our love story you’d tell your kids or grandkids?"
];

let index = parseInt(localStorage.getItem('cardIndex')) || 0;
const card = document.getElementById("card");

function updateCard() {
  card.textContent = questions[index];
  localStorage.setItem('cardIndex', index);
}

function nextCard() {
  index = (index + 1) % questions.length;
  updateCard();
}

function previousCard() {
  index = (index - 1 + questions.length) % questions.length;
  updateCard();
}

function randomCard() {
  index = Math.floor(Math.random() * questions.length);
  updateCard();
}

updateCard();
