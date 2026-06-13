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
  extraLinks?: BookLink[];
};

export type BookLink = {
  label: string;
  url: string;
};

const categoryIntros: Record<string, { relevance: string }> = {
  "Special Warfare": {
    relevance:
      "It sharpens the list's treatment of initiative, selection, mission command, and the human strain of operating with limited margin for error.",
  },
  "Naval/Amphibious": {
    relevance:
      "It helps connect strategy to geography by showing how fleets, logistics, weather, and landing operations shape campaigns.",
  },
  Land: {
    relevance:
      "It gives the collection operational depth, with attention to maneuver, tempo, logistics, morale, and the cost of close combat.",
  },
  Intelligence: {
    relevance:
      "It widens the study beyond battles by showing how hidden work, imperfect signals, and strategic surprise influence decisions.",
  },
  Air: {
    relevance:
      "It adds a dedicated lens for air combat, fighter culture, tactical innovation, and the intellectual history of modern airpower.",
  },
  Theory: {
    relevance:
      "It supplies the conceptual vocabulary for reading the rest of the shelf with more discipline and sharper questions.",
  },
  Politics: {
    relevance:
      "It keeps war connected to policy, institutions, biography, ambition, compromise, and the consequences of command in public life.",
  },
  Leadership: {
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
  "Call Sign Chaos: Learning to Lead": "Jim Mattis and Bing West",
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
  Pick<
    Book,
    "author" | "summary" | "detail" | "relevance" | "commerceQuery" | "extraLinks"
  >
>;

const boydBooksLink: BookLink = {
  label: "Boyd Books",
  url: "https://boydsbooks.online/",
};

const boydPapersLink: BookLink = {
  label: "Boyd Papers",
  url: "https://www.coljohnboyd.com/#pdf-personal-papers-part-ii",
};

const boydResourceLinks = [boydBooksLink, boydPapersLink];

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
  "Shadows in the Jungle: The Alamo Scouts Behind Japanese Lines in World War II": {
    summary:
      "A World War II account of the Alamo Scouts, the Sixth Army reconnaissance unit that operated deep behind Japanese lines in the Pacific.",
    detail:
      "The book follows training, patrols, intelligence gathering, prisoner rescues, and the discipline required to move quietly in jungle terrain before larger operations began.",
  },
  "From Troy to Entebbe: Special Operations in Ancient and Modern Times": {
    summary:
      "A comparative history of special operations, connecting ancient raids, deception, and rescue missions to modern commando operations.",
    detail:
      "Arquilla uses episodes from antiquity through Entebbe to show recurring patterns: surprise, speed, intelligence, political risk, and the difficulty of turning tactical daring into strategic effect.",
  },
  "Escape the Wolf": {
    summary:
      "A practical personal-security guide from Clint Emerson about recognizing danger, avoiding traps, and surviving predatory situations.",
    detail:
      "The book is less battlefield history than applied survival thinking, translating special operations habits into civilian awareness, evasion, and emergency decision-making.",
  },
  "Rogue Warrior by Richard Marcinko": {
    summary:
      "Richard Marcinko's memoir of Navy SEAL service, the creation of SEAL Team Six, and the abrasive culture of elite counterterrorism units.",
    detail:
      "The book mixes combat recollection, institutional conflict, and larger-than-life personality, making it useful as a portrait of unconventional leadership and its costs.",
  },
  "Hunting the Jackal: A Special Forces and CIA Soldier's Fifty Years on the Frontlines of the War Against Terrorism": {
    summary:
      "Billy Waugh's memoir of a career spanning Special Forces service, covert work, and the pursuit of terrorist networks.",
    detail:
      "The book traces a long arc from Vietnam-era operations to counterterrorism, emphasizing persistence, fieldcraft, and the human continuity between military and intelligence work.",
  },
  "Victory and Deceit: Dirty Tricks at War": {
    summary:
      "A survey of deception, trickery, misinformation, and psychological ploys used in war.",
    detail:
      "Dunnigan and Nofi collect examples of battlefield deception to show how commanders exploit assumptions, false signals, surprise, and the enemy's own expectations.",
  },
  "Inside Delta Force: The Story of America's Elite Counterterrorist Unit": {
    author: "Eric L. Haney",
    commerceQuery: "Inside Delta Force Eric L. Haney",
    summary:
      "Eric L. Haney's memoir about selection, training, and early service in the Army's Delta Force.",
    detail:
      "This summary page treats Haney's book as an inside view of the unit's early culture, standards, selection process, and operational demands.",
  },
  "The Operator": {
    summary:
      "Robert O'Neill's memoir of SEAL training, deployments, and the mission that killed Osama bin Laden.",
    detail:
      "The book presents a first-person view of selection, combat, family strain, and the pressure of participating in historically significant special operations.",
  },
  "The Right Kind of Crazy": {
    summary:
      "Clint Emerson's memoir and leadership reflection on Navy SEAL service, risk, failure, and judgment under pressure.",
    detail:
      "The book uses Emerson's career to explore how boldness has to be paired with preparation, accountability, and the willingness to learn from hard consequences.",
  },
  "Delta Force: The Army's Elite Counterterrorist Unit": {
    author: "Charlie A. Beckwith and Donald Knox",
    commerceQuery: "Delta Force Charlie Beckwith Donald Knox",
    summary:
      "Charlie A. Beckwith and Donald Knox's account of the creation, purpose, and early challenges of Delta Force.",
    detail:
      "This summary page frames Beckwith's book as the founder's account: why the unit was needed, how it was built, and what institutional resistance it faced.",
  },
  "Alone at Dawn": {
    summary:
      "The story of Air Force Combat Controller John Chapman and the Battle of Takur Ghar in Afghanistan.",
    detail:
      "The book reconstructs a Medal of Honor action while explaining the Combat Controller role, battlefield communications, air-ground integration, and the burden of reconstructing events after combat.",
  },
  "Sea Stories": {
    summary:
      "William H. McRaven's memoir of naval special operations, command, and senior leadership across a long military career.",
    detail:
      "The book moves from SEAL training and special missions to strategic command, using personal stories to show how preparation, humility, and steady execution compound over time.",
  },
  "All Secure": {
    summary:
      "Tom Satterly's account of Delta Force service, combat trauma, and recovery after years in special operations.",
    detail:
      "The book is valuable for its honest treatment of the aftereffects of elite service: marriage strain, post-traumatic stress, identity, and the long work of healing.",
  },
  "Fearless: The Undaunted Courage and Ultimate Sacrifice of Navy SEAL Team SIX Operator Adam Brown": {
    summary:
      "A biography of Adam Brown, following his struggles, faith, SEAL career, and death in Afghanistan.",
    detail:
      "Blehm presents Brown as a story of redemption and grit, emphasizing family, addiction recovery, faith, team loyalty, and the personal cost of special operations service.",
  },
  "SOG: The Secret Wars of America's Commandos in Vietnam, John L. Plaster": {
    extraLinks: [
      {
        label: "SOG Site",
        url: "https://sogsite.com/",
      },
    ],
    summary:
      "A history of MACV-SOG reconnaissance teams and covert cross-border operations during the Vietnam War.",
    detail:
      "Plaster details patrols into Laos, Cambodia, and North Vietnam, showing how small teams combined stealth, air support, deception, and endurance under extreme odds.",
  },
  "Small Unit Tactics Handbook": {
    summary:
      "A field-oriented manual on infantry and small-team tactics, formations, movement, and battle drills.",
    detail:
      "The handbook is a practical reference for fire and maneuver, patrol planning, security, react-to-contact actions, and the mechanics of leading small units.",
  },
  "Ranger Handbook": {
    summary:
      "The U.S. Army Ranger reference for patrolling, troop leading procedures, battle drills, and small-unit operations.",
    detail:
      "It is a compact doctrinal tool focused on how leaders plan missions, issue orders, move teams, conduct raids and ambushes, and maintain discipline in the field.",
  },
  "Five Years to Freedom: The True Story of a Vietnam POW": {
    summary:
      "James N. Rowe's account of capture, resistance, survival, and escape after years as a prisoner during the Vietnam War.",
    detail:
      "The book is a sustained study in mental resilience, duty, deception under captivity, and the discipline required to preserve identity when freedom disappears.",
  },
  "Sir Francis Drake": {
    summary:
      "A biography of Francis Drake that follows his privateering, naval campaigns, circumnavigation, and role in Elizabethan sea power.",
    detail:
      "Sugden portrays Drake as sailor, raider, courtier, and national instrument, linking personal daring to commerce, empire, religion, and maritime strategy.",
  },
  "Pacific Crucible: War at Sea in the Pacific, 1941-1942": {
    summary:
      "The opening volume of Ian W. Toll's Pacific War trilogy, covering the shock, adaptation, and naval battles of 1941-1942.",
    detail:
      "This summary page focuses on how early defeats, carrier warfare, intelligence, and industrial capacity reshaped the Pacific campaign.",
  },
  "The Conquering Tide: War in the Pacific Islands, 1942-1944": {
    summary:
      "The middle volume of Ian W. Toll's Pacific trilogy, covering the Allied advance through the Central and South Pacific.",
    detail:
      "The book emphasizes carrier warfare, amphibious operations, island logistics, submarine pressure, and the accelerating American capacity to turn operational lessons into momentum.",
  },
  "Twilight of the Gods: War in the Western Pacific, 1944-1945": {
    summary:
      "The concluding volume of Toll's Pacific War trilogy, following the brutal final campaigns against Japan.",
    detail:
      "It covers the late-war naval and amphibious campaign, kamikaze attacks, strategic bombing, blockade, and the moral and operational pressures of forcing surrender.",
  },
  "Killer Angels": {
    summary:
      "Michael Shaara's historical novel of Gettysburg, told through the perspectives of commanders and soldiers on both sides.",
    detail:
      "The novel is useful for studying leadership because it dramatizes uncertainty, command friction, conviction, exhaustion, and the irreversible consequences of battlefield decisions.",
  },
  "Ghost Soldiers: The Forgotten Epic Story of World War II's Most Dramatic Mission": {
    summary:
      "A narrative of the raid to rescue American prisoners from Cabanatuan during World War II.",
    detail:
      "This summary page treats the book as a compact study in intelligence preparation, daring execution, and moral purpose in combat operations.",
  },
  "An Army at Dawn: The War in North Africa, 1942-1943, Volume One of the Liberation Trilogy": {
    summary:
      "The first volume of Rick Atkinson's Liberation Trilogy, covering the U.S. Army's difficult emergence in North Africa.",
    detail:
      "Atkinson shows an army learning through failure, coalition friction, logistics, command turnover, and the hard transition from mobilized force to combat-effective institution.",
  },
  "The Day of Battle: The War in Sicily and Italy, 1943-1944 (The Liberation Trilogy Book 2)": {
    summary:
      "The second Liberation Trilogy volume, following Allied campaigns in Sicily and Italy.",
    detail:
      "The book focuses on mountainous terrain, amphibious landings, coalition politics, costly attrition, and the strategic ambiguity of fighting through the Italian peninsula.",
  },
  "The Guns at Last Light: The War in Western Europe, 1944-1945 (The Liberation Trilogy Book 3)": {
    summary:
      "The final Liberation Trilogy volume, covering the Allied campaign from Normandy to Germany.",
    detail:
      "Atkinson links grand strategy to mud, supply, command disputes, battlefield adaptation, and the grinding final defeat of Nazi Germany.",
  },
  "Drone Wars": {
    summary:
      "An edited collection on the rise of drone warfare and its strategic, legal, ethical, and operational consequences.",
    detail:
      "The book examines how remotely piloted systems changed targeting, surveillance, counterterrorism, accountability, and the relationship between political risk and military force.",
  },
  "Double-Edged Secrets: U.S. Naval Intelligence Operations in the Pacific During World War II": {
    summary:
      "A history of U.S. naval intelligence in the Pacific, written from the perspective of wartime intelligence operations.",
    detail:
      "Holmes explains codebreaking, traffic analysis, operational security, and the delicate problem of using secret information without revealing that it has been compromised.",
  },
  "Ghost Wars: The Secret History of the CIA, Afghanistan, and bin Laden, from the Soviet Invasion to September 10, 2001":
    {
      summary:
        "A history of CIA activity, Afghanistan, militant networks, and policy decisions leading up to September 11, 2001.",
      detail:
        "This summary page reads the book as a study in unintended consequences, interagency limits, covert action, and strategic warning.",
    },
  "Silent Warfare: Understanding the World of Intelligence, 3rd Edition": {
    summary:
      "A primer on intelligence institutions, collection disciplines, analysis, counterintelligence, covert action, and oversight.",
    detail:
      "The book gives vocabulary and structure for understanding how intelligence organizations gather information, judge uncertainty, protect secrets, and support policy.",
  },
  "Deep Black: Space Espionage and National Security": {
    summary:
      "A history of satellite reconnaissance, space-based intelligence, and the national security systems built around them.",
    detail:
      "Burrows traces how space collection transformed strategic warning, arms control, targeting, secrecy, and the technical infrastructure of modern intelligence.",
  },
  "Spy in Moscow Station": {
    summary:
      "Eric Haseltine's account of the technical espionage fight around the U.S. embassy in Moscow during the Cold War.",
    detail:
      "The book centers on surveillance, signals, engineering ingenuity, and the cat-and-mouse struggle between American communications security and Soviet intelligence collection.",
  },
  "Boyd: The Fighter Pilot Who Changed the Art of War": {
    extraLinks: boydResourceLinks,
    summary:
      "A biography of John Boyd, the fighter pilot and military thinker associated with energy-maneuverability theory and the OODA loop.",
    detail:
      "Coram follows Boyd's air combat career, intellectual battles, Pentagon reform fights, and influence on maneuver warfare and decision-cycle thinking.",
  },
  "The Mind of War: John Boyd and American Security": {
    extraLinks: boydResourceLinks,
    summary:
      "A study of John Boyd's ideas and their implications for American military strategy and security policy.",
    detail:
      "Hammond focuses less on biography and more on Boyd's conceptual system: conflict as adaptation, orientation, tempo, moral forces, and institutional learning.",
  },
  "To Fly and Fight": {
    summary:
      "Bud Anderson's memoir of fighter combat, especially his World War II service as a P-51 Mustang ace.",
    detail:
      "The book offers a pilot's view of training, aerial combat, squadron life, risk, and the craft of fighter aviation from one of the U.S. Army Air Forces' notable aces.",
  },
  "Sun Tzu": {
    summary:
      "A foundational strategic text associated with deception, preparation, economy of force, and winning before battle.",
    detail:
      "This summary page focuses on enduring strategic principles rather than treating the text as a modern field manual.",
  },
  "Book of Five Rings": {
    summary:
      "Miyamoto Musashi's martial strategy text on timing, perception, rhythm, and mastery.",
    detail:
      "The work uses swordsmanship to explore broader principles of conflict: initiative, discipline, observation, adaptability, and directness under pressure.",
  },
  "Warfighting: The US Marine Corps Book of Strategy": {
    commerceQuery: "Warfighting A.M. Gray US Marine Corps Book of Strategy",
    extraLinks: boydResourceLinks,
    summary:
      "A concise doctrine text on maneuver warfare, uncertainty, tempo, commander's intent, and decentralized action.",
    detail:
      "This summary page treats the book as a compact vocabulary for thinking about friction and initiative.",
  },
  "There's a War to Be Won: The United States Army in World War II": {
    summary:
      "A broad history of the U.S. Army's expansion, campaigns, leaders, and institutional performance in World War II.",
    detail:
      "Perret examines how the Army grew from a small prewar force into a global instrument, balancing mobilization, doctrine, personalities, logistics, and battlefield adaptation.",
  },
  "Targeted: Beirut: The 1983 Marine Barracks Bombing and the Untold Origin Story of the War on Terror": {
    summary:
      "A history of the 1983 Beirut Marine barracks bombing and its place in the origins of modern terrorism and U.S. counterterrorism policy.",
    detail:
      "The book connects the attack to Lebanon's civil war, Iranian influence, American policy choices, intelligence warnings, and the long shadow cast over later conflicts.",
  },
  Brute: {
    summary:
      "A biography of Marine General Victor Krulak, one of the Corps' most influential and combative twentieth-century leaders.",
    detail:
      "Coram examines Krulak's role in amphibious warfare, Marine institutional survival, Vietnam debates, and the forceful personality behind both innovation and conflict.",
  },
  "The Structure of Scientific Revolutions": {
    summary:
      "Thomas Kuhn's influential study of paradigms, normal science, anomalies, and revolutionary shifts in knowledge.",
    detail:
      "On this shelf, the book helps explain why institutions resist new frameworks and why real adaptation often requires a change in the questions people are willing to ask.",
  },
  "A Book of Five Rings: The Strategy of Musashi": {
    summary:
      "Victor Harris's translation and presentation of Musashi's classic strategy text.",
    detail:
      "This edition gives another route into Musashi's ideas about rhythm, perception, initiative, and the disciplined practice required to act decisively.",
  },
  "The Rough Riders": {
    summary:
      "Theodore Roosevelt's account of the volunteer cavalry regiment he helped lead during the Spanish-American War.",
    detail:
      "The book is part memoir, part campaign narrative, showing Roosevelt's view of martial citizenship, volunteer leadership, public ambition, and combat in Cuba.",
  },
  Bibi: {
    summary:
      "Benjamin Netanyahu's memoir of family, military service, diplomacy, politics, and Israel's security challenges.",
    detail:
      "The book presents Netanyahu's own account of formative events, strategic beliefs, and political battles, especially around terrorism, Iran, and Israeli national security.",
  },
  "My American Journey": {
    summary:
      "Colin Powell's autobiography, following his rise from the Bronx through Vietnam, the Pentagon, and senior national leadership.",
    detail:
      "Powell reflects on military professionalism, command responsibility, public service, race, ambition, and the habits that shaped his approach to leadership.",
  },
  "It Doesn't Take a Hero: The Autobiography of General H. Norman Schwarzkopf": {
    summary:
      "Norman Schwarzkopf's autobiography, covering his upbringing, Vietnam service, and command during the Gulf War.",
    detail:
      "The book shows a theater commander thinking through personality, discipline, coalition warfare, public expectations, and the translation of operational planning into combat power.",
  },
  "One Damn Thing After Another": {
    summary:
      "William Barr's memoir of public service, law, politics, and his two periods as U.S. attorney general.",
    detail:
      "In this list, the book functions as a political memoir about executive decision-making, institutional pressure, controversy, and the personal logic of public office.",
  },
  "The One Minute Manager": {
    summary:
      "A short management parable about clear goals, immediate feedback, and simple habits for leading people.",
    detail:
      "The book distills management into three practices: set expectations clearly, recognize good work quickly, and correct problems while preserving responsibility.",
  },
  "The 7 Habits of Highly Effective People": {
    summary:
      "Stephen Covey's personal leadership framework built around character, priorities, responsibility, and interdependence.",
    detail:
      "The book moves from private victory to public victory, arguing that durable effectiveness begins with self-command and grows into trust-based relationships.",
  },
  "Principle-Centered Leadership": {
    summary:
      "Stephen Covey's leadership book on building trust, alignment, and organizations around durable principles rather than personality or control.",
    detail:
      "It extends Covey's habits into teams and institutions, emphasizing character, empowerment, stewardship, and the long-term credibility leaders need.",
  },
  "Team of Teams": {
    summary:
      "A leadership book about adapting organizations for speed, transparency, and shared consciousness in complex environments.",
    detail:
      "This summary page highlights the move from tight control to empowered coordination when conditions change faster than hierarchy can react.",
  },
  "Call Sign Chaos: Learning to Lead": {
    commerceQuery: "Call Sign Chaos Learning to Lead Jim Mattis Bing West",
    summary:
      "A leadership memoir from Jim Mattis and Bing West about command, study, trust, and decision-making across a Marine Corps career.",
    detail:
      "This summary page frames the book as a leadership study in preparation, disciplined reading, commander intent, and the habits that let teams operate under pressure.",
  },
  "The Dichotomy of Leadership": {
    summary:
      "Jocko Willink and Leif Babin's follow-up to Extreme Ownership, focused on balancing competing leadership demands.",
    detail:
      "The book argues that leaders must hold tensions: lead but follow, plan but adapt, be aggressive but prudent, care for people while enforcing standards.",
  },
  "On Character: Choices That Define a Life": {
    summary:
      "Stanley McChrystal's reflections on character, illustrated through historical and contemporary examples.",
    detail:
      "The book treats character as a pattern of choices under pressure, emphasizing consistency, accountability, humility, and the way reputations are built over time.",
  },
  "One Mission": {
    summary:
      "Chris Fussell's guide to building aligned, fast-moving organizations using lessons from the Team of Teams model.",
    detail:
      "The book focuses on shared purpose, communication rhythms, empowered execution, and practical ways leaders can break down silos without losing coherence.",
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
  "Once an Eagle": {
    summary:
      "Anton Myrer's military novel contrasting two officers and two models of ambition, duty, and command.",
    detail:
      "The book follows Sam Damon and Courtney Massengale to explore moral leadership, careerism, sacrifice, and the difference between serving soldiers and using them.",
  },
  Meditations: {
    summary:
      "Marcus Aurelius's private Stoic reflections on duty, mortality, restraint, and governing one's own reactions.",
    detail:
      "The book is valuable as a commander's notebook: a reminder that judgment, humility, discipline, and perspective are daily practices rather than slogans.",
  },
  "Invent and Wander": {
    summary:
      "A collection of Jeff Bezos's shareholder letters, speeches, and interviews about Amazon, invention, and long-term thinking.",
    detail:
      "The book highlights customer obsession, high standards, experimentation, decision velocity, and the leadership logic behind durable innovation.",
  },
  "Kingdom Man": {
    summary:
      "Tony Evans's Christian leadership book about purpose, responsibility, family, and spiritual maturity.",
    detail:
      "The book frames manhood as stewardship under God, emphasizing character, service, responsibility, and influence in home, church, and community life.",
  },
  "The Ranger Way: Living the Code On and Off the Battlefield": {
    summary:
      "Kris Paronto's leadership book applying Ranger values and combat lessons to civilian life.",
    detail:
      "The book draws on military experience to discuss discipline, perseverance, accountability, team loyalty, and the challenge of living by a code beyond the battlefield.",
  },
  "The Wisdom of the Bullfrog: Leadership Made Simple (But Not Easy)": {
    summary:
      "William H. McRaven's short leadership book built around lessons from command, special operations, and public service.",
    detail:
      "McRaven offers compact leadership principles on standards, optimism, integrity, communication, and calm execution when the stakes are high.",
  },
  "Make Your Bed: Little Things That Can Change Your Life...And Maybe the World": {
    summary:
      "A concise leadership book from Admiral William H. McRaven built around small disciplines, resilience, and service-minded action.",
    detail:
      "This summary page frames the book as a practical argument that ordinary habits, standards, courage, and care for others compound into larger forms of influence.",
  },
  "Drownproof: Eight Life Lessons to Keep Your Head Above Water": {
    commerceQuery: "Drownproof Andy Stumpf Eight Life Lessons to Keep Your Head Above Water",
    summary:
      "Andy Stumpf's leadership and resilience book built around staying calm, capable, and useful when life feels overwhelming.",
    detail:
      "The book uses water-survival imagery and special operations experience to discuss pressure, discipline, recovery, and the habits that keep people from being pulled under.",
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
      "Call Sign Chaos: Learning to Lead",
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

    if (!note.summary || !note.detail) {
      throw new Error(`Missing specific summary for "${title}"`);
    }

    return {
      title,
      author,
      category,
      slug: slugify(title),
      summary: note.summary,
      detail: note.detail,
      relevance: note.relevance ?? defaults.relevance,
      commerceQuery: note.commerceQuery,
      extraLinks: note.extraLinks,
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
