export type Category = {
  name: string;
  slug: string;
};

export type Book = {
  title: string;
  author: string;
  category: string;
  slug: string;
  summary: string;
  detail: string;
  relevance: string;
  commerceQuery?: string;
};

const categoryIntros: Record<string, { summary: string; relevance: string }> = {
  "Special Warfare": {
    summary:
      "A special operations title focused on unconventional missions, elite units, personal endurance, and the tactical demands of small teams.",
    relevance:
      "It sharpens the list's treatment of initiative, selection, mission command, and the human strain of operating with limited margin for error.",
  },
  "Naval/Amphibious": {
    summary:
      "A sea power and amphibious warfare title centered on maritime campaigns, command at sea, and the movement of force across oceans and littorals.",
    relevance:
      "It helps connect strategy to geography by showing how fleets, logistics, weather, and landing operations shape campaigns.",
  },
  Land: {
    summary:
      "A land warfare title about campaigns, raids, battlefield decisions, and the pressure commanders and soldiers face on contested ground.",
    relevance:
      "It gives the collection operational depth, with attention to maneuver, tempo, logistics, morale, and the cost of close combat.",
  },
  Intelligence: {
    summary:
      "An intelligence title about collection, secrecy, analysis, espionage, deception, and the institutions that turn information into advantage.",
    relevance:
      "It widens the study beyond battles by showing how hidden work, imperfect signals, and strategic surprise influence decisions.",
  },
  Air: {
    summary:
      "An airpower title focused on aviation, pilots, combat decision-making, technology, doctrine, and the way control of the air changes war.",
    relevance:
      "It adds a dedicated lens for air combat, fighter culture, tactical innovation, and the intellectual history of modern airpower.",
  },
  Theory: {
    summary:
      "A theory and strategy title concerned with doctrine, decision-making, adaptation, scientific thinking, and the mental models behind conflict.",
    relevance:
      "It supplies the conceptual vocabulary for reading the rest of the shelf with more discipline and sharper questions.",
  },
  Politics: {
    summary:
      "A political and biographical title about public leadership, civil-military decisions, statesmanship, and the personal arc of influential figures.",
    relevance:
      "It keeps war connected to policy, institutions, biography, ambition, compromise, and the consequences of command in public life.",
  },
  Leadership: {
    summary:
      "A leadership title focused on habits, character, responsibility, team culture, and the practical demands of guiding people under pressure.",
    relevance:
      "It makes the list useful beyond military history by turning examples of command into principles for daily leadership and judgment.",
  },
};

const titleAuthors: Record<string, string> = {
  "Rogue Heroes: The History of the SAS, Britain's Secret Special Forces Unit That Sabotaged the Nazis and Changed the Nature of War":
    "Ben Macintyre",
  "Lonely Vigil: Coastwatchers of the Solomons": "Walter Lord",
  "Shadows in the Jungle: The Alamo Scouts Behind Japanese Lines in World War II":
    "Larry Alexander",
  "From Troy to Entebbe: Special Operations in Ancient and Modern Times": "John Arquilla",
  "Escape the Wolf": "Clint Emerson",
  "Rogue Warrior by Richard Marcinko": "Richard Marcinko and John Weisman",
  "Hunting the Jackal: A Special Forces and CIA Soldier's Fifty Years on the Frontlines of the War Against Terrorism":
    "Billy Waugh and Tim Keown",
  "Victory and Deceit: Dirty Tricks at War": "James F. Dunnigan and Albert A. Nofi",
  "Inside Delta Force: The Story of America's Elite Counterterrorist Unit": "Eric L. Haney",
  "The Operator": "Robert O'Neill",
  "The Right Kind of Crazy": "Clint Emerson",
  "Delta Force: The Army's Elite Counterterrorist Unit":
    "Charlie A. Beckwith and Donald Knox",
  "Alone at Dawn": "Dan Schilling and Lori Chapman Longfritz",
  "Sea Stories": "William H. McRaven",
  "Call Sign Chaos": "Jim Mattis and Bing West",
  "All Secure": "Tom Satterly and Steve Jackson",
  "Fearless: The Undaunted Courage and Ultimate Sacrifice of Navy SEAL Team SIX Operator Adam Brown":
    "Eric Blehm",
  "SOG: The Secret Wars of America's Commandos in Vietnam, John L. Plaster":
    "John L. Plaster",
  "Small Unit Tactics Handbook": "Paul D. LeFavor",
  "Ranger Handbook": "Department of the Army",
  "Five Years to Freedom: The True Story of a Vietnam POW": "James N. Rowe",
  "Sir Francis Drake": "John Sugden",
  "Pacific Crucible: War at Sea in the Pacific, 1941-1942": "Ian W. Toll",
  "The Conquering Tide: War in the Pacific Islands, 1942-1944": "Ian W. Toll",
  "Twilight of the Gods: War in the Western Pacific, 1944-1945": "Ian W. Toll",
  "Killer Angels": "Michael Shaara",
  "Ghost Soldiers: The Forgotten Epic Story of World War II's Most Dramatic Mission":
    "Hampton Sides",
  "An Army at Dawn: The War in North Africa, 1942-1943, Volume One of the Liberation Trilogy":
    "Rick Atkinson",
  "The Day of Battle: The War in Sicily and Italy, 1943-1944 (The Liberation Trilogy Book 2)":
    "Rick Atkinson",
  "The Guns at Last Light: The War in Western Europe, 1944-1945 (The Liberation Trilogy Book 3)":
    "Rick Atkinson",
  "Drone Wars": "Peter L. Bergen and Daniel Rothenberg",
  "Double-Edged Secrets: U.S. Naval Intelligence Operations in the Pacific During World War II":
    "W. J. Holmes",
  "Ghost Wars: The Secret History of the CIA, Afghanistan, and bin Laden, from the Soviet Invasion to September 10, 2001":
    "Steve Coll",
  "Silent Warfare: Understanding the World of Intelligence, 3rd Edition":
    "Abram N. Shulsky and Gary J. Schmitt",
  "Deep Black: Space Espionage and National Security": "William E. Burrows",
  "Spy in Moscow Station": "Eric Haseltine",
  "Sun Tzu": "Sun Tzu",
  "Book of Five Rings": "Miyamoto Musashi",
  "Boyd: The Fighter Pilot Who Changed the Art of War": "Robert Coram",
  "The Mind of War: John Boyd and American Security": "Grant Hammond",
  "To Fly and Fight": "Bud Anderson",
  "Warfighting: The US Marine Corps Book of Strategy": "A.M. Gray",
  "There's a War to Be Won: The United States Army in World War II": "Geoffrey Perret",
  "Targeted: Beirut: The 1983 Marine Barracks Bombing and the Untold Origin Story of the War on Terror":
    "Jack Carr and James M. Scott",
  Brute: "Robert Coram",
  "The Structure of Scientific Revolutions": "Thomas S. Kuhn",
  "A Book of Five Rings: The Strategy of Musashi":
    "Miyamoto Musashi, translated by Victor Harris",
  "The Rough Riders": "Theodore Roosevelt",
  Bibi: "Benjamin Netanyahu",
  "My American Journey": "Colin Powell and Joseph E. Persico",
  "It Doesn't Take a Hero: The Autobiography of General H. Norman Schwarzkopf":
    "H. Norman Schwarzkopf and Peter Petre",
  "One Damn Thing After Another": "William P. Barr",
  "The One Minute Manager": "Kenneth H. Blanchard and Spencer Johnson",
  "The 7 Habits of Highly Effective People": "Stephen R. Covey",
  "Principle-Centered Leadership": "Stephen R. Covey",
  "Team of Teams": "Stanley McChrystal, Tantum Collins, David Silverman, and Chris Fussell",
  "The Dichotomy of Leadership": "Jocko Willink and Leif Babin",
  "On Character: Choices That Define a Life": "Stanley McChrystal",
  "One Mission": "Chris Fussell and C. W. Goodyear",
  "Extreme Ownership": "Jocko Willink and Leif Babin",
  "Atomic Habits": "James Clear",
  "Once an Eagle": "Anton Myrer",
  Meditations: "Marcus Aurelius",
  "Invent and Wander": "Jeff Bezos",
  "Kingdom Man": "Tony Evans",
  "The Ranger Way: Living the Code On and Off the Battlefield": "Kris Paronto",
  "The Wisdom of the Bullfrog: Leadership Made Simple (But Not Easy)":
    "William H. McRaven",
  "Make Your Bed: Little Things That Can Change Your Life...And Maybe the World":
    "William H. McRaven",
  "Drownproof: Eight Life Lessons to Keep Your Head Above Water": "Andy Stumpf",
};

type BookNote = Partial<
  Pick<Book, "author" | "summary" | "detail" | "relevance" | "commerceQuery">
>;

const titleNotes: Record<string, BookNote> = {
  "Rogue Heroes: The History of the SAS, Britain's Secret Special Forces Unit That Sabotaged the Nazis and Changed the Nature of War":
    {
      summary:
        "A narrative history of the SAS that follows the unit's desert origins, raids, personalities, and lasting influence on special operations.",
      detail:
        "This summary page frames the book as a study in improvisation: a small organization built around risk, speed, selection, and leaders willing to test new ways of fighting.",
    },
  "Lonely Vigil: Coastwatchers of the Solomons": {
    summary:
      "A history of the coastwatchers whose isolated reporting networks helped Allied forces understand Japanese movements in the Solomons.",
    detail:
      "This summary page treats the book as a reminder that patient observation, local knowledge, and reliable reporting can change the tempo of a campaign.",
  },
  "Inside Delta Force: The Story of America's Elite Counterterrorist Unit": {
    author: "Eric L. Haney",
    commerceQuery: "Inside Delta Force Eric L. Haney",
    summary:
      "Eric L. Haney's memoir about selection, training, and early service in the Army's Delta Force.",
    detail:
      "This summary page treats Haney's book as an inside view of the unit's early culture, standards, selection process, and operational demands.",
  },
  "Delta Force: The Army's Elite Counterterrorist Unit": {
    author: "Charlie A. Beckwith and Donald Knox",
    commerceQuery: "Delta Force Charlie Beckwith Donald Knox",
    summary:
      "Charlie A. Beckwith and Donald Knox's account of the creation, purpose, and early challenges of Delta Force.",
    detail:
      "This summary page frames Beckwith's book as the founder's account: why the unit was needed, how it was built, and what institutional resistance it faced.",
  },
  "Pacific Crucible: War at Sea in the Pacific, 1941-1942": {
    summary:
      "The opening volume of Ian W. Toll's Pacific War trilogy, covering the shock, adaptation, and naval battles of 1941-1942.",
    detail:
      "This summary page focuses on how early defeats, carrier warfare, intelligence, and industrial capacity reshaped the Pacific campaign.",
  },
  "Ghost Soldiers: The Forgotten Epic Story of World War II's Most Dramatic Mission": {
    summary:
      "A narrative of the raid to rescue American prisoners from Cabanatuan during World War II.",
    detail:
      "This summary page treats the book as a compact study in intelligence preparation, daring execution, and moral purpose in combat operations.",
  },
  "Ghost Wars: The Secret History of the CIA, Afghanistan, and bin Laden, from the Soviet Invasion to September 10, 2001":
    {
      summary:
        "A history of CIA activity, Afghanistan, militant networks, and policy decisions leading up to September 11, 2001.",
      detail:
        "This summary page reads the book as a study in unintended consequences, interagency limits, covert action, and strategic warning.",
    },
  "Sun Tzu": {
    summary:
      "A foundational strategic text associated with deception, preparation, economy of force, and winning before battle.",
    detail:
      "This summary page focuses on enduring strategic principles rather than treating the text as a modern field manual.",
  },
  "Warfighting: The US Marine Corps Book of Strategy": {
    commerceQuery: "Warfighting A.M. Gray US Marine Corps Book of Strategy",
    summary:
      "A concise doctrine text on maneuver warfare, uncertainty, tempo, commander's intent, and decentralized action.",
    detail:
      "This summary page treats the book as a compact vocabulary for thinking about friction and initiative.",
  },
  "Team of Teams": {
    summary:
      "A leadership book about adapting organizations for speed, transparency, and shared consciousness in complex environments.",
    detail:
      "This summary page highlights the move from tight control to empowered coordination when conditions change faster than hierarchy can react.",
  },
  "Extreme Ownership": {
    summary:
      "A leadership book arguing that leaders must take responsibility for mission outcomes, team clarity, and execution standards.",
    detail:
      "This summary page centers on ownership, simplicity, prioritization, and disciplined communication under pressure.",
  },
  "Atomic Habits": {
    summary:
      "A practical guide to behavior change through small systems, identity cues, and compounding habits.",
    detail:
      "This summary page treats habit formation as the quiet infrastructure beneath readiness, discipline, and long-term improvement.",
  },
  "Make Your Bed: Little Things That Can Change Your Life...And Maybe the World": {
    summary:
      "A concise leadership book from Admiral William H. McRaven built around small disciplines, resilience, and service-minded action.",
    detail:
      "This summary page frames the book as a practical argument that ordinary habits, standards, courage, and care for others compound into larger forms of influence.",
  },
  "Drownproof: Eight Life Lessons to Keep Your Head Above Water": {
    commerceQuery: "Drownproof Andy Stumpf Eight Life Lessons to Keep Your Head Above Water",
  },
};

const sourceBooks = [
  {
    category: "Special Warfare",
    titles: [
      "Rogue Heroes: The History of the SAS, Britain's Secret Special Forces Unit That Sabotaged the Nazis and Changed the Nature of War",
      "Lonely Vigil: Coastwatchers of the Solomons",
      "Shadows in the Jungle: The Alamo Scouts Behind Japanese Lines in World War II",
      "From Troy to Entebbe: Special Operations in Ancient and Modern Times",
      "Escape the Wolf",
      "Rogue Warrior by Richard Marcinko",
      "Hunting the Jackal: A Special Forces and CIA Soldier's Fifty Years on the Frontlines of the War Against Terrorism",
      "Victory and Deceit: Dirty Tricks at War",
      "Inside Delta Force: The Story of America's Elite Counterterrorist Unit",
      "The Operator",
      "The Right Kind of Crazy",
      "Delta Force: The Army's Elite Counterterrorist Unit",
      "Alone at Dawn",
      "Sea Stories",
      "Call Sign Chaos",
      "All Secure",
      "Fearless: The Undaunted Courage and Ultimate Sacrifice of Navy SEAL Team SIX Operator Adam Brown",
      "SOG: The Secret Wars of America's Commandos in Vietnam, John L. Plaster",
      "Small Unit Tactics Handbook",
      "Ranger Handbook",
      "Five Years to Freedom: The True Story of a Vietnam POW",
    ],
  },
  {
    category: "Naval/Amphibious",
    titles: [
      "Sir Francis Drake",
      "Pacific Crucible: War at Sea in the Pacific, 1941-1942",
      "The Conquering Tide: War in the Pacific Islands, 1942-1944",
      "Twilight of the Gods: War in the Western Pacific, 1944-1945",
    ],
  },
  {
    category: "Land",
    titles: [
      "Killer Angels",
      "Ghost Soldiers: The Forgotten Epic Story of World War II's Most Dramatic Mission",
      "An Army at Dawn: The War in North Africa, 1942-1943, Volume One of the Liberation Trilogy",
      "The Day of Battle: The War in Sicily and Italy, 1943-1944 (The Liberation Trilogy Book 2)",
      "The Guns at Last Light: The War in Western Europe, 1944-1945 (The Liberation Trilogy Book 3)",
      "Drone Wars",
    ],
  },
  {
    category: "Intelligence",
    titles: [
      "Double-Edged Secrets: U.S. Naval Intelligence Operations in the Pacific During World War II",
      "Ghost Wars: The Secret History of the CIA, Afghanistan, and bin Laden, from the Soviet Invasion to September 10, 2001",
      "Silent Warfare: Understanding the World of Intelligence, 3rd Edition",
      "Deep Black: Space Espionage and National Security",
      "Spy in Moscow Station",
    ],
  },
  {
    category: "Air",
    titles: [
      "Boyd: The Fighter Pilot Who Changed the Art of War",
      "The Mind of War: John Boyd and American Security",
      "To Fly and Fight",
    ],
  },
  {
    category: "Theory",
    titles: [
      "Sun Tzu",
      "Book of Five Rings",
      "Warfighting: The US Marine Corps Book of Strategy",
      "There's a War to Be Won: The United States Army in World War II",
      "Targeted: Beirut: The 1983 Marine Barracks Bombing and the Untold Origin Story of the War on Terror",
      "Brute",
      "The Structure of Scientific Revolutions",
      "A Book of Five Rings: The Strategy of Musashi",
    ],
  },
  {
    category: "Politics",
    titles: [
      "The Rough Riders",
      "Bibi",
      "My American Journey",
      "It Doesn't Take a Hero: The Autobiography of General H. Norman Schwarzkopf",
      "One Damn Thing After Another",
    ],
  },
  {
    category: "Leadership",
    titles: [
      "The One Minute Manager",
      "The 7 Habits of Highly Effective People",
      "Principle-Centered Leadership",
      "Team of Teams",
      "The Dichotomy of Leadership",
      "On Character: Choices That Define a Life",
      "One Mission",
      "Extreme Ownership",
      "Atomic Habits",
      "Once an Eagle",
      "Meditations",
      "Invent and Wander",
      "Kingdom Man",
      "The Ranger Way: Living the Code On and Off the Battlefield",
      "The Wisdom of the Bullfrog: Leadership Made Simple (But Not Easy)",
      "Make Your Bed: Little Things That Can Change Your Life...And Maybe the World",
      "Drownproof: Eight Life Lessons to Keep Your Head Above Water",
    ],
  },
] as const;

export const categories: Category[] = sourceBooks.map(({ category }) => ({
  name: category,
  slug: slugify(category),
}));

export const books: Book[] = sourceBooks.flatMap(({ category, titles }) =>
  titles.map((title) => {
    const defaults = categoryIntros[category];
    const note = titleNotes[title] ?? {};
    const author = note.author ?? titleAuthors[title];

    if (!author) {
      throw new Error(`Missing author for "${title}"`);
    }

    return {
      title,
      author,
      category,
      slug: slugify(title),
      summary: note.summary ?? defaults.summary,
      detail:
        note.detail ??
        `${title} is represented here as a ${category.toLowerCase()} reading note. Use this page as the starting point for a fuller synopsis, key lessons, and memorable examples as you work through the book.`,
      relevance: note.relevance ?? defaults.relevance,
      commerceQuery: note.commerceQuery,
    };
  }),
);

export function getBookBySlug(slug: string) {
  return books.find((book) => book.slug === slug);
}

export function commerceLinks(book: Pick<Book, "title" | "author" | "commerceQuery">) {
  const queryText = book.commerceQuery ?? `${book.title} ${book.author ?? ""} book`;
  const query = encodeURIComponent(queryText.trim());

  return {
    amazon: `https://www.amazon.com/s?k=${query}`,
    audible: `https://www.audible.com/search?keywords=${query}`,
  };
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
