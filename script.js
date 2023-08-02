const quotes_array = [
    "The fool doth think he is wise, but the wise man knows himself to be a fool.",
    "It is better to remain silent at the risk of being thought a fool, than to talk and …",
    "Whenever you find yourself on the side of the majority, it is time to reform (or",
    "When someone loves you, the way they talk about you is different. You feel safe …",
    "The journey of a thousand miles begins with one step.",
    "Be more concerned with your character than your reputation, because your character is what …",
    "Talent is God given. Be humble. Fame is man-given. Be grateful. Conceit is self-given. Be …",
    "Your Remedy is within you, but you do not sense it. Your Sickness is from you, but you do not …"
];

const quotes_gen = document.getElementById('quotes_gen');
const show_quotes = document.getElementById('show_quotes');

quotes_gen.addEventListener('click', () => {
    show_quotes.textContent = quotes_array[Math.floor(Math.random() * quotes_array.length)];
});