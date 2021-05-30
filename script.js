const names = ["Bob", "Phil", "James", "Kim", "Noel", "William", "John", "Sharon", "Kelly", "Larry", "Susie", "Margaret", "Sally", "Esther"];

const compliment = ["awesome", "lovely", "brilliant", "excellent", "amazing", "wonderful", "the best", "fantastic", "superb"];

const message = ["have a great day", "have an excellent day", "are having the best day", "get the best out of today", "are really happy", "get plenty of fresh air", "realize how special you are", "get a nice surprise today"];

function newMessage(){
    const nameNum = Math.floor(Math.random() * names.length);
    const complimentNum = Math.floor(Math.random() * compliment.length);
    const messageNum = Math.floor(Math.random() * message.length);

    document.getElementById("message").innerHTML = `${names[nameNum]} said: You are ${compliment[complimentNum]}. I hope you ${message[messageNum]}.`;
};