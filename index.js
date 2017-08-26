const app = "I don't do much.";

function fatBastard(meal) {
  function whatsForDinner() {
    if (meal === 'Mini-Me') { // whatsForDinner() uses argument provided to the parent function
      console.log('The wee man is in my belly!');
    } else {
      console.log(`I'm eatin' a bit of ${meal}! Burp.`);
    }
  }

  return whatsForDinner;
}

const whatsForDinner = fatBastard('Kobe beef');

const whatsInHisTummy = fatBastard('Mini-Me');

whatsInHisTummy();

whatsForDinner();
