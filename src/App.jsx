/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
const App = () => {
  const quoteList = [
    {
      quote:
        "Life is like a box of chocolates. You never know what you're gonna get.",
      author: "Dr. Seuss",
    },
    {
      quote:
        "You only try, no matter how hard you push. You're gonna get there.",
      author: "Romeo and Juliet",
    },
    {
      quote: "The journey of a thousand miles begins with a single step.",
      author: "Walt Disney",
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Steve Jobs",
    },
    {
      quote:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      quote: "You can lead a horse to water, but ou can't make it drink.",
      author: "mhmdhmdghrini",
    },
    {
      quote: "You must be the change you wish to see in the world.",
      author: "Mahatma Gandhi",
    },
    {
      quote: "Believe in yourself, you're a genius!",
      author: "Stephen King",
    },
    {
      quote: "Strive always to excel in virtue and in truth.",
      author: "Prophet Muhammad SAW",
    },
    {
      quote:
        "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
      author: "Mark Twain",
    },
    {
      quote:
        "Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.",
      author: "John Wooden",
    },
    {
      quote: "Don’t let yesterday take up too much of today.",
      author: "Will Rogers",
    },
    {
      quote:
        "Experience is a hard teacher because she gives the test first, the lesson afterward.",
      author: "Vernon Sanders Law",
    },
    {
      quote:
        "Concentrate all your thoughts upon the work in hand. The sun’s rays do not burn until brought to a focus.",
      author: "Alexander Graham Bell",
    },
    {
      quote:
        "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
      author: "David Brinkley",
    },
    {
      quote:
        "You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.",
      author: "George Lorimer",
    },
    {
      quote: "Keep your eyes on the stars, and your feet on the ground.",
      author: "Theodore Roosevelt",
    },
    {
      quote:
        "Just one small positive thought in the morning can change your whole day.",
      author: "Dalai Lama",
    },
    {
      quote: "You cute",
      author: "mhdhmdghrini",
    },
    {
      quote: "Don’t let someone else’s opinion of you become your reality.",
      author: "Les Brown",
    },
    {
      quote: "I ain't supermarket",
      author: "Raaya Naseem",
    },
    {
      quote:
        "Life is like riding a bicycle. To keep your balance, you must keep moving.",
      author: "Albert Einstein",
    },
    {
      quote: "What you do speaks so loudly that I cannot hear what you say.",
      author: "Ralph Waldo Emerson",
    },
    {
      quote:
        "If you can’t yet do great things, do small things in a great way.",
      author: "Napoleon Hill",
    },
    {
      quote: "A year from now you will wish you had started today.",
      author: "Unknown",
    },
    {
      quote:
        "Failure is simply the opportunity to begin again, this time more intelligently.",
      author: "Henry Ford",
    },
    {
      quote: "The future is simply a string of todays.",
      author: "A certain eggy",
    },
    {
      quote:
        "We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes—understanding that failure is not the opposite of success, it’s part of success.",
      author: "Ariana Huffington",
    },
    {
      quote: "Hustle beats talent when talent doesn’t hustle.",
      author: "Ross Simmonds",
    },
    {
      quote: "Happiness is not something you find, but something you make.",
      author: "Unknown",
    },
    {
      quote: "Compare yourself only to who you were yesterday.",
      author: "mhmdhmdghrini",
    },
  ];
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-pink-500",
    "bg-purple-500",
    "bg-indigo-500",
    "bg-teal-500",
    "bg-orange-500",
    "bg-pink-400",
    "bg-blue-400",
    "bg-green-400",
    "bg-yellow-400",
    "bg-emerald-700",
    "bg-purple-700",
    "bg-indigo-700",
    "bg-teal-700",
    "bg-emerald-700",
    "bg-sky-700",
    "bg-fuchsia-700",
    "bg-lime-700",
  ];
  // useState hook to manage quotes state
  const [quotes, setQuotes] = useState({
    quote: "Quote",
    author: "Person",
    color: colors[0],
  });
  const handleClick = () => {
    let newQuote, newColor;
    do {
      newQuote = getRandomQuote();
      newColor = getRandomColor();
    } while (
      quotes.quote === newQuote.quote &&
      quotes.author === newQuote.author &&
      quotes.color === newColor
    );

    setQuotes({
      quote: newQuote.quote,
      author: newQuote.author,
      color: newColor,
    });
  };

  // Function to get random quote from the quoteList array
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quoteList.length);
    return quoteList[randomIndex];
  };
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const style = `opacity-80 m-0 flex flex-col justify-start items-center min-h-screen ${quotes.color} fade-in-out transition delay-150 duration-1000 ease-in-out`;

  // Render the App component with the generated quote and handleClick function
  return (
    <div id="main" className={style}>
      <button
        onClick={handleClick}
        className="rounded-md px-4 text-black h-12 my-10 mx-auto bg-slate-50 hover:bg-slate-200"
      >
        Generate
      </button>
      <figure className="transition-all bg-slate-50  w-1/2 mt-5 rounded-xl pb-5 pt-8 px-8">
        <blockquote className="relative">
          <p
            className="p-5 text-xl before:content-['\201C'] 
            before:absolute before:-top-7 before:-left-3
            before:font-serif before:text-9xl before:opacity-25 after:content-['\201D']
            after:absolute after:-right-3 after:-bottom-24
          after:font-serif after:text-9xl after:opacity-25 text-black"
          >
            {quotes.quote}
          </p>
        </blockquote>
        <figcaption className="italic text-sm pt-8 text-gray-600 text-right">
          {quotes.author}
        </figcaption>
      </figure>
    </div>
  );
};

export default App;
