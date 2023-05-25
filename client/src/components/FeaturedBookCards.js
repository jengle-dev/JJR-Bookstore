const data = {
  isNew: true,
  featuredBooks: [
    {
      id: '1',
      imageURL:
        'https://m.media-amazon.com/images/P/6257120896.01._SCLZZZZZZZ_SX500_.jpg',
      name: 'Nineteen-Eighty-Four',
      author: 'George Orwell',
      description: 'Nineteen Eighty-Four: A Novel, often referred to as 1984, is a dystopian social science fiction novel by the English novelist George Orwell (the pen name of Eric Arthur Blair). It was published on 8 June 1949 by Secker & Warburg as Orwell\'s ninth and final book completed in his lifetime. Thematically, Nineteen Eighty-Four centres on the consequences of totalitarianism, mass surveillance, and repressive regimentation of persons and behaviours within society. Orwell, himself a democratic socialist, modelled the authoritarian government in the novel after Stalinist Russia. More broadly, the novel examines the role of truth and facts within politics and the ways in which they are manipulated.',
      price: '$7.50',
      isbn: '1782124209',
      quantity: 20
    },
    {
      id: '2',
      imageURL:
        'https://m.media-amazon.com/images/I/81xvsBo674L._AC_UY218_.jpg',
      name: 'American Prometheus: The Triumph and Tragedy of J. Robert Oppenheimer',
      author: 'Kai Bird & Martin J. Sherwin',
      description: 'In this magisterial, acclaimed biography twenty-five years in the making, Kai Bird and Martin Sherwin capture Oppenheimer’s life and times, from his early career to his central role in the Cold War. This is biography and history at its finest, riveting and deeply informative. <br> \“A masterful account of Oppenheimer\’s rise and fall, set in the context of the turbulent decades of America’s own transformation. It is a tour de force.” —Los Angeles Times Book Review',
      price: '$17.39',
      isbn: '0375726268',
      quantity: 20

    },
    {
      id: '3',
      imageURL:
        'https://m.media-amazon.com/images/I/41fxsXxLq9L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
      name: 'The Curious Incident of the Dog in the Night-Time',
      author: 'Mark Haddon',
      description: 'This is Christopher\'s murder mystery story. There are no lies in this story because Christopher can\'t tell lies. christopher does not like strangers or the colours yellow or brown or being touched. On the other hand, he knows all the countries in the world and their capital cities and every prime number up to 7507. When Christohper decides to find out who killed the neighbour\'s dog, his mystery story becomes more complicated than he could ever have predicted.',
      price: '$8.39',
      isbn: '9781400032716',
      quantity: 20
    },
    {
      id: '4',
      imageURL: 'https://m.media-amazon.com/images/I/91uqIP3IJYL._AC_UY218_.jpg',
      name: 'The Everlasting Meal Cookbook: Leftovers A-Z',
      author: 'Tamar Adler(Author) & Caitlin Winner(Illustrator) ',
      description: 'Food waste is a serious issue today—nearly forty percent of the food we buy gets tossed out. Most of us look around the kitchen and struggle to use up everything we buy, and then when it comes to leftovers we\’re stuck. That\’s where Tamar Adler can help—her area of culinary expertise is finding delicious destinies for leftovers. Whether it\’s extra potatoes or meat, citrus peels or cold rice, a few final olives in a jar or the end of a piece of cheese, she has an appetizing solution. <br> Here, in An Everlasting Meal Cookbook, she offers more than 1,500 easy and creative ideas to use up nearly every kind of leftover—and helpfully explains how long each recipe takes. Now you can easily transform a leftover burrito into a lunch of fried rice, or stale breakfast donuts into bread pudding. These inspiring and tasty recipes don\’t require any precise measurements, making this cookbook a go-to resource for when your kitchen seems full of meal endings with no clear meal beginnings in sight.',
      price: '$22.10' ,
      isbn: '1476799660',
      quantity: 20
    },
    {
      id: '5',
      imageURL: 'https://m.media-amazon.com/images/I/71uyfT7RfFL._AC_UY218_.jpg',
      name: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description: 'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway\'s interactions with mysterious millionaire Jay Gatsby and Gatsby\'s obsession to reunite with his former lover, Daisy Buchanan.',
      price: '$3.95',
      isbn: '9798745274824',
      quantity: 20
    },
    {
      id: '6',
      imageURL: 'https://m.media-amazon.com/images/I/710ESoXqVPL._AC_UY218_.jpg',
      name: 'Harry Potter and the Philosopher\'s Stone',
      author: 'J.K. Rowling',
      description: 'Turning the envelope over, his hand trembling, Harry saw a purple wax seal bearing a coat of arms; a lion, an eagle, a badger and a snake surrounding a large letter \'H\'. <br>   Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry\'s eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!',
      price: '$10.99',
      isbn: '9780590353427',
      quantity: 20
    },
    {
      id: '7',
      imageURL: 'https://m.media-amazon.com/images/I/71mK6W2wMrL._AC_UY218_.jpg',
      name: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      description: 'Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely traveling any farther than his pantry or cellar. But his contentment is disturbed when the wizard Gandalf and a company of dwarves arrive on his doorstep one day to whisk him away on an adventure. They have launched a plot to raid the treasure hoard guarded by Smaug the Magnificent, a large and very dangerous dragon. Bilbo reluctantly joins their quest, unaware that on his journey to the Lonely Mountain he will encounter both a magic ring and a frightening creature known as Gollum.',
      price: '$26.99',
      isbn: '9780044403371',
      quantity: 20
    },
    {
      id: '8',
      imageURL: 'https://m.media-amazon.com/images/I/91Mi4rZJUEL._AC_UY218_.jpg',
      name: 'The Kingdom of Prep: The Inside Story of the Rise and (Near) Fall of J.Crew',
      author: 'Maggie Bullock',
      description: 'A quintessentially American fashion narrative about the rise and fall of the first lifestyle brand, J.Crew, and what the company\’s fate means for the shifting landscape of the retail industry. <br> Once upon a time, a no-frills J.Crew rollneck sweater held an almost mystical power—or at least it felt that way. The story of J.Crew is the story of the original “lifestyle brand,” whose evolution charts a sea change in the way we dress, the way we shop, and who we aspire to be over the past four decades—all told through iconic clothes and the most riveting characters imaginable.',
      price: '$14.99',
      isbn: '9780063042667',
      quantity: 20
    },
    {
      id: '9',
      imageURL: 'https://m.media-amazon.com/images/I/91sLAjFhvAL._AC_UY218_.jpg',
      name: 'Spare',
      author: 'Prince Harry, The Duke of Sussex',
      description: 'It was one of the most searing images of the twentieth century: two young boys, two princes, walking behind their mother\’s coffin as the world watched in sorrow—and horror. As Princess Diana was laid to rest, billions wondered what Prince William and Prince Harry must be thinking and feeling—and how their lives would play out from that point on. <br> For Harry, this is that story at last.',
      price: '$24.95',
      isbn: '9780593677865',
      quantity: 20
    },
    {
      id: '10',
      imageURL: 'https://m.media-amazon.com/images/I/71AMcL+CaEL._AC_UL400_.jpg',
      name: 'The Survivalists: A Novel',
      author: 'Kashana Cauley',
      description: 'A single Black lawyer puts her career and personal moral code at risk when she moves in with her coffee entrepreneur boyfriend and his doomsday-prepping roommates in a novel that\'s packed with tension, curiosity, humor, and wit from a writer with serious comedy credentials. <br> In the wake of her parents’ death, Aretha, a habitually single Black lawyer, has had only one obsession in life—success—until she falls for Aaron, a coffee entrepreneur. Moving into his Brooklyn brownstone to live along with his Hurricane Sandy-traumatized, illegal-gun-stockpiling, optimized-soy-protein-eating, bunker-building roommates, Aretha finds that her dreams of making partner are slipping away, replaced by an underground world, one of selling guns and training for a doomsday that’s maybe just around the corner. ',
      price: 27.99,
      isbn: '1593767277',
      quantity: 20
    },
    {
      id: '11',
      imageURL: 'https://m.media-amazon.com/images/I/211ifAVNuML._AC_UY218_.jpg',
      name: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      description: 'The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it, To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.',
      price: 16.99,
      isbn: '1455538965',
      quantity: 20
    },
    {
      id: '12',
      imageURL: 'https://m.media-amazon.com/images/I/51ZnpIZcanL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
      name: 'Where the Sidewalk Ends: Poems and Drawings',
      author: 'Shel Silverstein',
      description: 'You\'ll meet a boy who turns into a TV set, and a girl who eats a whale. The Unicorn and the Bloath live there, and so does Sarah Cynthia Sylvia Stout who will not take the garbage out. It is a place where you wash your shadow and plant diamond gardens, a place where shoes fly, sisters are auctioned off, and crocodiles go to the dentist.',
      price: 19.99,
      isbn: '0060256672',
      quantity: 20
    }
  ]
}

export default data;