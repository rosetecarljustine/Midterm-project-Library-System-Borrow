import H1 from "./assets/A Peoples History of the United States.png";
import H2 from "./assets/guns-germs-and-steel-the-fates-of-human-societies.jpg";
import H3 from "./assets/diary.jpg";
import H4 from "./assets/Team of Rivals.jpg";
import H5 from "./assets/SPQR.jpg";
import H6 from "./assets/The Wright Brothers.jpg";
import H7 from "./assets/Alexander Hamilton.jpg";
import H8 from "./assets/A Little History of the World.jpg";
import H9 from "./assets/The Silk Roads.jpg";
import H10 from "./assets/Women in Science and History.jpg";
import H11 from "./assets/Sapiens.png";
import H12 from "./assets/The History of the Ancient World.jpg";

// SCIENCE BOOKS
import S1 from "./assets/image.png";
import S2 from "./assets/cosmos.jpg";
import S3 from "./assets/The_Immortal_Life_Henrietta_Lacks_(cover).jpg";
import S4 from "./assets/TheDoubleHelix.jpg";
import S5 from "./assets/Astrophysics.jpg";
import S6 from "./assets/The Gene.jpg";
import S7 from "./assets/Physics of the Impossible.jpg";
import S8 from "./assets/SilentSpring.jpg";
import S9 from "./assets/the-origin-of-species-44.jpg";
import S10 from "./assets/Stuff Matters.jpg";
import S11 from "./assets/BriefAnswersToTheBigQuestions-BookCover.png";
import S12 from "./assets/The Selfish Gene.jpg";

// TECHNOLOGY BOOKS
import T1 from "./assets/Code.jpg";
import T2 from "./assets/Hello World.jpg";
import T3 from "./assets/Innovators_book_cover.jpg";
import T4 from "./assets/python-crash-course-3rd-edition.jpg";
import T5 from "./assets/Artificial Intelligence.jpg";
import T6 from "./assets/The Pragmatic Programmer.jpg";
import T7 from "./assets/Clean Code.jpg";
import T8 from "./assets/Introduction to Algorithms.jpg";
import T9 from "./assets/Superintelligence.jpg";
import T10 from "./assets/How to Build Habit-Forming Products.jpg";
import T11 from "./assets/Algorithms to Live By.jpg";
import T12 from "./assets/You Dont Know JS.jpg";

// LITERATURE BOOKS
import L1 from "./assets/Mocking bird.jpg";
import L2 from "./assets/1984.jpg";
import L3 from "./assets/Pride and Prejudice.jpg";
import L4 from "./assets/The Great Gatsby.jpg";
import L5 from "./assets/Lord of the Flies.jpg";
import L6 from "./assets/The Chronicles of Narnia.jpg";
import L7 from "./assets/Harry Potter and the Sorcerers Stone.jpg";
import L8 from "./assets/Romeo and Juliet.jpg";
import L9 from "./assets/The Odyssey.jpg";
import L10 from "./assets/The Alchemist.jpg";
import L11 from "./assets/Moby-Dick.jpg";
import L12 from "./assets/The Catcher in the Rye.jpg";

// ------------------- HISTORY BOOKS -------------------
const historyBooks = [
{
  title: "A People's History of the United States",
  img: H1,
  author: "Howard Zinn",
  type: "Nonfiction",
  genres: ["Social Justice", "Inequality", "Activism", "Class Struggle", "Human Rights", "Political Critique"],
  reads: "32.4K",
  votes: "1.2K",
  time: "1h 20m",
  description: "This book presents American history through the perspective of ordinary citizens rather than political leaders. It highlights the struggles of workers, minorities, and marginalized communities across different time periods. The author challenges traditional narratives taught in schools by focusing on inequality and resistance. It examines major events such as wars, labor movements, and civil rights activism in a critical light. The book emphasizes how power structures shape society and influence historical outcomes. It encourages readers to question dominant viewpoints and think independently. Overall, it provides a deeper and more human-centered understanding of the past."
},
{
  title: "Guns, Germs, and Steel",
  img: H2,
  author: "Jared Diamond",
  type: "Nonfiction",
  genres: ["Geography", "Human Development", "Civilization", "Environment", "Cultural Evolution", "Global Studies"],
  reads: "28.7K",
  votes: "980",
  time: "1h 10m",
  description: "This book explores why some civilizations developed faster than others throughout history. It connects environmental factors such as geography, climate, and available resources to societal progress. The author explains how agriculture, technology, and disease shaped human dominance across continents. It avoids racial explanations and instead focuses on structural advantages. The narrative combines multiple disciplines including anthropology and ecology. It provides a global perspective on how civilizations rose and interacted. Readers gain insight into the long-term forces that shaped the modern world."
},
{
  title: "The Diary of a Young Girl",
  img: H3,
  author: "Anne Frank",
  type: "Memoir",
  genres: ["War", "Survival", "Identity", "Coming-of-Age", "Hope", "Human Emotion"],
  reads: "41.2K",
  votes: "2.3K",
  time: "45m",
  description: "This diary captures the life of a young girl hiding during a time of war and persecution. It reflects her personal thoughts, fears, and dreams while living in isolation. The writing reveals both the innocence and maturity of a teenager under extreme conditions. It provides a deeply emotional look at resilience and hope. The diary also explores themes of identity, family, and growing up. It reminds readers of the human cost of conflict and discrimination. The story continues to inspire empathy and awareness across generations."
},
{
  title: "Team of Rivals",
  img: H4,
  author: "Doris Kearns Goodwin",
  type: "Political Analysis",
  genres: ["Leadership", "Strategy", "Conflict", "Governance", "Decision-Making", "Power"],
  reads: "19.5K",
  votes: "760",
  time: "1h 30m",
  description: "This book examines leadership through the story of a president and his political rivals. It focuses on how strong personalities were brought together to achieve common goals. The narrative highlights negotiation, compromise, and strategic thinking. It shows how conflict can be turned into collaboration. The author explores the emotional intelligence required in leadership roles. It also reflects on political challenges during times of crisis. Readers gain valuable lessons about teamwork and effective governance."
},
{
  title: "SPQR: A History of Ancient Rome",
  img: H5,
  author: "Mary Beard",
  type: "Historical Narrative",
  genres: ["Empire", "Politics", "Society", "Power", "Culture", "Citizenship"],
  reads: "22.1K",
  votes: "840",
  time: "1h 15m",
  description: "This book explores the rise and development of one of the greatest civilizations in history. It focuses on both political leaders and ordinary citizens. The narrative examines how Rome shaped ideas of governance and society. It highlights the complexities of power, citizenship, and expansion. The author presents history in an engaging and accessible way. It connects ancient ideas to modern systems. Readers gain a deeper appreciation of Rome’s long-lasting influence."
},
{
  title: "The Wright Brothers",
  img: H6,
  author: "David McCullough",
  type: "Biography",
  genres: ["Innovation", "Engineering", "Adventure", "Persistence", "Teamwork", "Aviation"],
  reads: "32.1K",
  votes: "860",
  time: "1h 20m",
  description: "This biography explores the lives of Orville and Wilbur Wright in remarkable detail. It follows their journey to invent the first successful airplane and the obstacles they overcame. The book highlights their perseverance, careful experimentation, and ingenuity. Readers gain insight into the curiosity and teamwork that fueled their breakthroughs. The narrative also explores the social and technological context of the early 20th century. It emphasizes the impact of their invention on transportation and society. Overall, it is an inspiring story of human innovation and determination."
},
{
  title: "Alexander Hamilton",
  img: H7,
  author: "Ron Chernow",
  type: "Biography",
  genres: ["Politics", "Finance", "Leadership", "Strategy", "Ambition", "Government"],
  reads: "28.5K",
  votes: "920",
  time: "2h 5m",
  description: "Chernow’s biography delves into the life of Alexander Hamilton, a founding father and financial innovator. The book explores his pivotal role in shaping the U.S. economy and government structure. It details his political rivalries, personal relationships, and remarkable intellect. Hamilton’s ambition and leadership skills are central themes throughout the narrative. Readers also see the social and historical context of his time. The book provides a thorough account of both his achievements and controversies. It is an engaging, comprehensive portrait of a complex historical figure."
},
{
  title: "A Little History of the World",
  img: H8,
  author: "E.H. Gombrich",
  type: "Educational",
  genres: ["Civilization", "Culture", "Society", "Storytelling", "Global Development", "Human Progress"],
  reads: "35.4K",
  votes: "780",
  time: "1h 40m",
  description: "Gombrich presents a concise and engaging history of the world for general readers. The book explains major civilizations, cultures, and societal developments. Its simple narrative style makes complex events easy to understand. It emphasizes connections between past events and human development today. The book explores political, economic, and cultural milestones across history. Readers are introduced to important inventions, discoveries, and achievements. Overall, it provides a sweeping overview of humanity from ancient times to the modern era."
},
{
  title: "The Silk Roads",
  img: H9,
  author: "Peter Frankopan",
  type: "Historical Narrative",
  genres: ["Trade", "Culture", "Geopolitics", "Exploration", "Civilization", "Global Connections"],
  reads: "22.7K",
  votes: "650",
  time: "1h 55m",
  description: "This book explores the far-reaching impact of the Silk Roads on global development. It examines trade, cultural exchange, and political influence spanning centuries. Frankopan emphasizes the deep connections between East and West. The narrative highlights the flow of goods, ideas, and religions across continents. Readers gain insight into the geopolitical consequences of these exchanges. The book explores historical figures, empires, and social transformations along these routes. It demonstrates how commerce and culture shaped the modern world in profound ways."
},
{
  title: "Women in Science and History",
  img: H10,
  author: "Hannah Wills et al.",
  type: "Educational",
  genres: ["Sociology", "Gender Studies", "Empowerment", "Innovation", "Perseverance", "Achievement"],
  reads: "31.2K",
  votes: "710",
  time: "1h 10m",
  description: "This book highlights the often-overlooked contributions of women in science and historical events. It documents their achievements and the challenges they faced in male-dominated fields. Stories showcase resilience, creativity, and perseverance in various disciplines. The narrative challenges traditional perspectives while celebrating female accomplishment. Readers learn how these women influenced society, science, and culture. The book emphasizes the importance of representation and inclusion. Overall, it is an inspiring tribute to women’s roles in shaping knowledge and history."
},
{
  title: "Sapiens: A Brief History of Humankind",
  img: H11,
  author: "Yuval Noah Harari",
  type: "Nonfiction",
  genres: ["Anthropology", "Sociology", "Culture", "Human Evolution", "Social Structures", "Civilization"],
  reads: "40.1K",
  votes: "1.1K",
  time: "2h 30m",
  description: "Harari explores human evolution from hunter-gatherer societies to the complex structures of modern civilization. The book examines culture, cognition, and the organization of social structures. It highlights how humans innovate, adapt, and dominate their environments. Interdisciplinary insights include history, sociology, and biology. The narrative provokes reflection on human behavior, ethics, and societal development. Readers gain a deeper understanding of what it means to be human. Overall, it offers a thought-provoking account of humanity’s past, present, and potential future."
},
{
  title: "The History of the Ancient World",
  img: H12,
  author: "Susan Wise Bauer",
  type: "Historical Narrative",
  genres: ["Civilization", "Culture", "Politics", "Society", "Governance", "Empires"],
  reads: "26.9K",
  votes: "590",
  time: "1h 45m",
  description: "Bauer traces civilizations from early societies through classical empires. The book explores governance, culture, and human achievements. It emphasizes lessons from ancient societies that remain relevant today. The narrative is chronological and detailed, offering a comprehensive overview. Readers gain insight into social structures, wars, and innovations of the past. The book highlights the interplay between power, culture, and progress. Overall, it is a foundational guide to understanding early world civilizations."
}
];

const technologyBooks = [
{
  title: "Code: The Hidden Language of Computer Hardware and Software",
  img: T1,
  author: "Charles Petzold",
  type: "Programming Guide",
  genres: ["Computer Architecture", "Software", "Logic", "Engineering", "Education", "Coding Fundamentals"],
  reads: "25.8K",
  votes: "1.1K",
  time: "1h 25m",
  description: "This book breaks down how computers operate in a clear and understandable way. It covers binary systems, circuit design, and programming logic. Petzold guides readers from hardware basics to complex computing concepts. The narrative connects theory with practical applications. It explains how machines process information and perform tasks. The author uses real-world examples to illustrate concepts. This is a foundational text for anyone seeking deep understanding of computer systems."
},
{
  title: "Hello World: Being Human in the Age of Algorithms",
  img: T2,
  author: "Hannah Fry",
  type: "Nonfiction",
  genres: ["Algorithms", "Society", "Data Science", "Ethics", "Decision Making", "Technology Impact"],
  reads: "29.4K",
  votes: "1.3K",
  time: "1h 10m",
  description: "This book examines how algorithms shape our daily lives in ways we rarely notice. It explains the benefits and risks of automation in areas like healthcare, law, and business. Fry highlights ethical dilemmas arising from algorithmic decision-making. The narrative demonstrates both practical and philosophical aspects of AI. Readers learn to critically assess technological influence. The book combines anecdotes, research, and case studies for clarity. It is essential for understanding the human side of digital innovation."
},
{
  title: "The Innovators",
  img: T3,
  author: "Walter Isaacson",
  type: "Innovation",
  genres: ["Biographies", "Computing", "Creativity", "Technology", "Collaboration", "History"],
  reads: "23.6K",
  votes: "980",
  time: "1h 40m",
  description: "Isaacson narrates the stories of individuals who propelled the digital revolution. It emphasizes collaboration, persistence, and creativity. The book traces the development of computers, software, and the internet. The narrative blends technical detail with engaging storytelling. Readers see how personal vision can shape global technology. It covers pioneers from Ada Lovelace to modern innovators. Overall, it inspires aspiring technologists to innovate responsibly."
},
{
  title: "Python Crash Course",
  img: T4,
  author: "Eric Matthes",
  type: "Programming Guide",
  genres: ["Python", "Coding", "Education", "Projects", "Software Development", "Problem Solving"],
  reads: "31.2K",
  votes: "1.5K",
  time: "50m",
  description: "This book is a hands-on introduction to programming with Python. It explains concepts gradually and reinforces learning through projects. Readers develop real applications while understanding the fundamentals. It covers variables, loops, functions, and object-oriented programming. The narrative encourages problem-solving and experimentation. It is ideal for beginners seeking practical experience. Python Crash Course builds both skills and confidence in coding."
},
{
  title: "Artificial Intelligence: A Guide for Thinking Humans",
  img: T5,
  author: "Melanie Mitchell",
  type: "Nonfiction",
  genres: ["AI Ethics", "Cognition", "Psychology", "Innovation", "Critical Thinking", "Futurism"],
  reads: "33.4K",
  votes: "910",
  time: "1h 15m",
  description: "This book explains artificial intelligence in a way that is accessible to general readers. Mitchell explores how machines learn, reason, and process information. The narrative delves into the current limitations of AI and its real-world applications. It discusses philosophical and ethical questions surrounding AI decision-making. The book examines social and economic impacts of intelligent systems. Readers are encouraged to consider both the benefits and risks of AI in society. Overall, it offers a balanced perspective on the future of AI and human interaction with technology."
},
{
  title: "The Pragmatic Programmer",
  img: T6,
  author: "Andrew Hunt & David Thomas",
  type: "Educational",
  genres: ["Programming Practices", "Problem Solving", "Self-Development", "Adaptability", "Mentorship", "Innovation"],
  reads: "29.8K",
  votes: "860",
  time: "1h 5m",
  description: "This classic guide offers practical advice for software developers of all experience levels. The authors emphasize continuous learning and adaptability in a rapidly changing field. The book provides real-world examples that illustrate key programming concepts. It teaches strategies for writing clean, maintainable, and efficient code. Readers learn how to manage projects, debug effectively, and collaborate with teams. The narrative encourages critical thinking and professional growth. Overall, it is a timeless resource for building both technical skills and mindset in software development."
},
{
  title: "Clean Code",
  img: T7,
  author: "Robert C. Martin",
  type: "Educational",
  genres: ["Programming Practices", "Software Quality", "Best Practices", "Readability", "Teamwork", "Problem Solving"],
  reads: "36.2K",
  votes: "1.0K",
  time: "1h 25m",
  description: "This book teaches developers how to write code that is clean, readable, and maintainable. Martin highlights common coding mistakes and provides practical examples. The narrative emphasizes the importance of structure, naming conventions, and simplicity. Readers are shown both good and bad coding styles for comparison. The book also explores teamwork and collaboration in software projects. By following its guidance, programmers can improve software quality and reduce technical debt. It is considered essential reading for anyone serious about professional programming."
},
{
  title: "Introduction to Algorithms",
  img: T8,
  author: "Cormen et al.",
  type: "Educational",
  genres: ["Logic", "Mathematics", "Problem Solving", "Data Analysis", "Optimization", "Computational Thinking"],
  reads: "42.1K",
  votes: "1.2K",
  time: "2h 10m",
  description: "This book provides a comprehensive study of algorithms, covering fundamental and advanced topics. It details sorting, searching, graph algorithms, and optimization techniques. The content is mathematically rigorous yet structured for learners at multiple levels. Readers gain insight into algorithmic thinking and problem-solving strategies. The book explores real-world applications and computational efficiency. It includes exercises and examples to reinforce understanding. Overall, it is an indispensable resource for computer science students and professionals."
},
{
  title: "Superintelligence",
  img: T9,
  author: "Nick Bostrom",
  type: "Philosophical Work",
  genres: ["AI Ethics", "Existential Risk", "Futurism", "Innovation", "Decision-Making", "Critical Thinking"],
  reads: "38.7K",
  votes: "980",
  time: "2h 0m",
  description: "Bostrom explores the potential future of artificial intelligence surpassing human intelligence. The book examines risks associated with superintelligent systems. It addresses ethical, societal, and existential implications of advanced AI. The narrative considers scenarios for AI development and governance. Readers are challenged to think about humanity's role and responsibilities in shaping the future. The book integrates philosophical reasoning with scientific insights. Overall, it provokes critical reflection on the promises and dangers of emerging technology."
},
{
  title: "Hooked: How to Build Habit-Forming Products",
  img: T10,
  author: "Nir Eyal",
  type: "Nonfiction",
  genres: ["Psychology", "Business", "Behavior Design", "Marketing", "Product Development", "Consumer Engagement"],
  reads: "27.6K",
  votes: "720",
  time: "1h 0m",
  description: "This book explains how companies design products that engage users and form habits. Eyal introduces the Hook Model, a framework for creating repeated behavior. The narrative combines psychological principles with practical design techniques. Readers learn how attention, motivation, and rewards shape user behavior. The book provides case studies from popular apps and platforms. It is both informative for product designers and thought-provoking for anyone studying human behavior. Overall, it offers actionable insights into creating meaningful and engaging products."
},
{
  title: "Algorithms to Live By",
  img: T11,
  author: "Hannah Fry",
  type: "Nonfiction",
  genres: ["Decision-Making", "Logic", "Problem Solving", "Psychology", "Optimization", "Productivity"],
  reads: "30.9K",
  votes: "810",
  time: "1h 20m",
  description: "This book applies the principles of algorithms to everyday human decision-making. Fry explores how computational thinking can improve efficiency in daily life. The book connects ideas from computer science to human behavior and problem-solving. Topics include scheduling, prioritization, and resource allocation. Readers are encouraged to apply logic and structured thinking to personal and professional choices. The narrative blends theory with practical examples for easy comprehension. Overall, it shows how algorithms can enhance reasoning and productivity in everyday decisions."
},
{
  title: "You Don’t Know JS",
  img: T12,
  author: "Kyle Simpson",
  type: "Educational",
  genres: ["Programming", "JavaScript", "Deep Dive", "Problem Solving", "Web Development", "Software Practices"],
  reads: "34.5K",
  votes: "940",
  time: "1h 50m",
  description: "This series dives deep into JavaScript, covering core concepts in detail. Simpson emphasizes understanding over memorization. The books explore the mechanics of functions, objects, closures, and asynchronous programming. Readers gain practical knowledge applicable to real-world coding challenges. The narrative includes examples, exercises, and explanations to reinforce learning. It highlights best practices and coding patterns for maintainability. Overall, it is a must-read for developers seeking mastery of JavaScript and modern web development."
},
];

const literatureBooks = [
{
  title: "To Kill a Mockingbird",
  img: L1,
  author: "Harper Lee",
  type: "Fiction",
  genres: ["Racism", "Morality", "Justice", "Empathy", "Coming-of-Age", "Family", "Society"],
  reads: "45.6K",
  votes: "2.5K",
  time: "1h 10m",
  description: "This classic novel explores racial injustice in a small Southern town. Told through the eyes of a young girl, it addresses themes of morality and compassion. The narrative highlights both prejudice and personal growth. Characters confront complex social issues and ethical dilemmas. The story emphasizes courage and standing up for what is right. It offers insight into human behavior and societal norms. Its impact continues across generations for its universal message."
},
{
  title: "1984",
  img: L2,
  author: "George Orwell",
  type: "Fiction",
  genres: ["Dystopia", "Totalitarianism", "Surveillance", "Propaganda", "Freedom", "Society", "Politics"],
  reads: "38.2K",
  votes: "1.9K",
  time: "1h 5m",
  description: "Orwell’s novel depicts a dystopian society controlled by constant surveillance and propaganda. The protagonist navigates oppressive political structures while seeking truth. The book warns of loss of freedom and individuality. Themes of loyalty, manipulation, and resistance run throughout. Orwell presents a society stripped of privacy and human dignity. It challenges readers to consider the value of liberty. The narrative remains highly relevant in discussions of power and control."
},
{
  title: "Pride and Prejudice",
  img: L3,
  author: "Jane Austen",
  type: "Fiction",
  genres: ["Romance", "Classics", "Social Commentary", "Drama", "Satire", "Personal Growth"],
  reads: "41.2K",
  votes: "1.1K",
  time: "1h 10m",
  description: "This novel focuses on love, class, and relationships in 19th-century England. Elizabeth Bennet navigates societal expectations while developing her personal values. The story explores manners, family dynamics, and social hierarchies. Austen cleverly blends romance with social critique and satire. Readers witness the challenges of navigating prejudice and misunderstandings. The narrative emphasizes growth, morality, and wit. Overall, it remains a timeless classic that examines human behavior and societal pressures."
},
{
  title: "The Great Gatsby",
  img: L4,
  author: "F. Scott Fitzgerald",
  type: "Fiction",
  genres: ["Drama", "Romance", "Social Critique", "Tragedy", "Wealth", "Ambition"],
  reads: "37.8K",
  votes: "980",
  time: "1h 5m",
  description: "This novel portrays wealth, ambition, and love during the Jazz Age. Jay Gatsby pursues both romance and social status with intense passion. The story examines the illusion of the American Dream and societal excess. Fitzgerald critiques materialism, moral decay, and the pursuit of pleasure. The narrative also explores longing, identity, and disillusionment. Themes of obsession and the passage of time pervade the story. Overall, it is a defining work that captures the complexities of desire and society."
},
{
  title: "Lord of the Flies",
  img: L5,
  author: "William Golding",
  type: "Fiction",
  genres: ["Psychology", "Adventure", "Survival", "Human Nature", "Drama", "Society"],
  reads: "32.5K",
  votes: "890",
  time: "1h 20m",
  description: "A group of boys stranded on a deserted island struggle to survive without adult supervision. The story examines human nature, morality, and the fragile nature of civilization. Order gradually collapses into chaos, revealing the darker instincts of humanity. Golding explores fear, power, and the consequences of societal breakdown. Relationships and leadership dynamics are tested throughout. The narrative reflects on both innocence and corruption. Overall, it is a powerful exploration of society, psychology, and the human condition."
},
{
  title: "The Chronicles of Narnia",
  img: L6,
  author: "C.S. Lewis",
  type: "Fantasy",
  genres: ["Adventure", "Magic", "Allegory", "Courage", "Good vs Evil", "Family"],
  reads: "45.7K",
  votes: "1.2K",
  time: "1h 45m",
  description: "This series follows children who discover a magical world called Narnia. Narnia is populated with mythical creatures, talking animals, and epic adventures. The story explores themes of courage, sacrifice, and the battle between good and evil. Lewis weaves Christian allegory and moral lessons into a fantasy narrative. Characters grow, face challenges, and learn responsibility. Each story emphasizes imagination, loyalty, and friendship. Overall, it is a timeless tale that appeals to readers of all ages."
},
{
  title: "Harry Potter and the Sorcerer’s Stone",
  img: L7,
  author: "J.K. Rowling",
  type: "Fantasy",
  genres: ["Magic", "Adventure", "Friendship", "Courage", "Coming-of-Age", "Mystery"],
  reads: "52.3K",
  votes: "1.5K",
  time: "2h 0m",
  description: "Harry discovers he is a wizard and attends the Hogwarts School of Witchcraft and Wizardry. He learns magic, forms friendships, and uncovers hidden truths about his past. The story introduces a magical world full of mystery, adventure, and challenges. Themes of bravery, loyalty, and belonging are central to the narrative. Harry and his friends navigate both academic and personal trials. The story explores the power of choices, courage, and love. It begins an iconic series that has captivated readers globally."
},
{
  title: "Romeo and Juliet",
  img: L8,
  author: "William Shakespeare",
  type: "Drama",
  genres: ["Tragedy", "Romance", "Family Conflict", "Fate", "Passion", "Society"],
  reads: "38.9K",
  votes: "1.0K",
  time: "1h 15m",
  description: "This tragedy tells the story of two young lovers from feuding families. Their love faces immense social obstacles and miscommunication. Shakespeare explores passion, conflict, and the consequences of impulsive decisions. Themes of fate, loyalty, and societal pressure permeate the narrative. The story highlights the intensity of youthful emotion and the destructive nature of hate. Characters are vivid, morally complex, and deeply human. Overall, it is one of the most famous and enduring plays in literary history."
},
{
  title: "The Odyssey",
  img: L9,
  author: "Homer",
  type: "Epic",
  genres: ["Adventure", "Heroism", "Mythology", "Perseverance", "Identity", "Loyalty"],
  reads: "47.1K",
  votes: "1.3K",
  time: "2h 20m",
  description: "This epic poem follows Odysseus’ long journey home after the Trojan War. He faces gods, monsters, and countless challenges along the way. The narrative highlights perseverance, intelligence, and resourcefulness. Themes of loyalty, identity, and fate are central to the story. Odysseus’ journey tests both physical and moral strength. The poem reflects cultural values, heroism, and the human spirit. Overall, it is a cornerstone of classical literature and enduring storytelling."
},
{
  title: "The Alchemist",
  img: L10,
  author: "Paulo Coelho",
  type: "Philosophical Work",
  genres: ["Adventure", "Spirituality", "Personal Growth", "Dreams", "Destiny", "Self-Discovery"],
  reads: "39.4K",
  votes: "1.0K",
  time: "1h 30m",
  description: "This novel follows Santiago’s journey to discover a hidden treasure. Along the way, he learns valuable life lessons about purpose, dreams, and destiny. Coelho blends spirituality, philosophy, and storytelling seamlessly. The narrative emphasizes listening to one's heart and embracing opportunities. Readers encounter challenges, mentors, and self-reflection. Themes of courage, perseverance, and wisdom pervade the story. Overall, it inspires readers to pursue their personal legends and embrace the journey of life."
},
{
  title: "Moby-Dick",
  img: L11,
  author: "Herman Melville",
  type: "Adventure",
  genres: ["Obsession", "Adventure", "Revenge", "Philosophy", "Symbolism", "Drama"],
  reads: "35.8K",
  votes: "970",
  time: "2h 10m",
  description: "This novel follows Captain Ahab’s obsessive pursuit of the white whale, Moby Dick. It explores themes of revenge, fate, and human obsession. The narrative includes philosophical reflections on existence, morality, and nature. Melville blends adventure, symbolism, and character study. Readers witness complex psychological dynamics and moral dilemmas. The story examines humanity’s struggle against forces beyond control. Overall, it is a rich, enduring classic that combines action with deep thematic exploration."
},
{
  title: "The Catcher in the Rye",
  img: L12,
  author: "J.D. Salinger",
  type: "Fiction",
  genres: ["Coming-of-Age", "Identity", "Psychology", "Alienation", "Teenage Struggles", "Society"],
  reads: "40.6K",
  votes: "1.1K",
  time: "1h 25m",
  description: "This novel follows Holden Caulfield’s journey through New York City after being expelled from school. He struggles with identity, belonging, and understanding the adult world. The story explores teenage alienation, rebellion, and self-discovery. Holden’s voice is candid, emotional, and deeply reflective. The narrative captures the struggles of adolescence and societal pressures. Themes of innocence, morality, and isolation are central to the book. Overall, it remains a defining coming-of-age novel with universal appeal."
},
];

// ------------------- SCIENCE BOOKS -------------------
const scienceBooks = [
{
  title: "A Short History of Nearly Everything",
  img: S1,
  author: "Bill Bryson",
  type: "Science Popular",
  genres: ["Physics", "Chemistry", "Biology", "Earth Science", "Discovery", "Curiosity", "History of Science"],
  reads: "27.8K",
  votes: "1.1K",
  time: "1h 30m",
  description: "This book explains how the universe and life developed over time. Bryson introduces major scientific discoveries in an accessible way. The narrative highlights both the scientists and their findings. It blends multiple disciplines to provide a broad perspective. Readers learn about atoms, molecules, species, and planets. The book uses humor and storytelling to engage audiences. It is ideal for those wanting a sweeping understanding of science."
},
{
  title: "Cosmos",
  img: S2,
  author: "Carl Sagan",
  type: "Science Popular",
  genres: ["Astronomy", "Universe", "Space Exploration", "Philosophy", "Cosmology", "Humanity", "Observation"],
  reads: "33.5K",
  votes: "1.6K",
  time: "1h 25m",
  description: "Carl Sagan explores the vastness of the universe, revealing its wonders and mysteries. The book covers galaxies, stars, planets, and the origin of life. It combines scientific facts with philosophical reflections. Sagan’s narrative inspires curiosity about humanity’s place in the cosmos. It emphasizes critical thinking and understanding through observation. The writing is poetic and accessible. Cosmos continues to inspire generations of scientists and dreamers."
},
{
  title: "The Immortal Life of Henrietta Lacks",
  img: S3,
  author: "Rebecca Skloot",
  type: "Biography",
  genres: ["Medical Ethics", "Human Rights", "Innovation", "Society", "Personal Story", "Inspiration"],
  reads: "33.5K",
  votes: "1.2K",
  time: "1h 20m",
  description: "This book tells the story of Henrietta Lacks, whose cells became essential to medical research. It explores the scientific breakthroughs made possible by her immortal cells. Skloot examines ethical questions surrounding consent and human rights. The narrative blends medical history with personal storytelling about Henrietta's family. Readers learn how her story intersects with race, class, and social justice. It highlights the impact of individual contributions to science. Overall, it presents a compelling portrait of human resilience and scientific progress."
},
{
  title: "The Double Helix",
  img: S4,
  author: "James D. Watson",
  type: "Memoir",
  genres: ["Discovery", "Collaboration", "Competition", "Scientific Innovation", "Biography", "Ethics"],
  reads: "29.8K",
  votes: "980",
  time: "1h 10m",
  description: "Watson’s memoir recounts the discovery of DNA’s double helix structure. He gives a personal perspective on the scientists and their interactions. The story shows how competition and collaboration drive scientific innovation. It reveals the human side of discovery, including rivalries and ambition. The narrative explains key scientific breakthroughs in a compelling way. Readers gain insight into the ethical and professional challenges in research. Overall, it remains a classic that combines science with personal narrative."
},
{
  title: "Astrophysics for Young People",
  img: S5,
  author: "Neil deGrasse Tyson",
  type: "Educational",
  genres: ["Space", "Cosmology", "Exploration", "Curiosity", "Learning", "Adventure"],
  reads: "36.2K",
  votes: "1.1K",
  time: "1h 15m",
  description: "This book introduces astrophysics in an accessible and fun way for young readers. Tyson explains complex concepts like black holes, stars, and galaxies simply. The narrative encourages curiosity and critical thinking about the universe. It combines storytelling with scientific facts to keep readers engaged. Readers are introduced to the wonders of space exploration and discovery. It inspires interest in astronomy, physics, and observation. Overall, it motivates young readers to explore and question the cosmos."
},
{
  title: "The Gene: An Intimate History",
  img: S6,
  author: "Siddhartha Mukherjee",
  type: "Philosophical Work",
  genres: ["Genetics", "Ethics", "Medicine", "Human Identity", "Innovation", "Society"],
  reads: "40.5K",
  votes: "1.3K",
  time: "1h 50m",
  description: "This book explores the history and science of genetics, from Mendel to modern DNA research. Mukherjee examines how genes influence human traits, disease, and identity. The narrative combines scientific discovery with personal stories and ethical dilemmas. Readers are introduced to groundbreaking experiments and their societal impact. The book delves into moral questions about genetic engineering and experimentation. It provides a deep understanding of how genetics shapes life. Overall, it is a thought-provoking and richly detailed exploration of humanity and science."
},
{
  title: "Physics of the Impossible",
  img: S7,
  author: "Michio Kaku",
  type: "Science Popular",
  genres: ["Physics", "Speculative Science", "Innovation", "Futurism", "Technology Concepts", "Exploration"],
  reads: "27.9K",
  votes: "900",
  time: "1h 5m",
  description: "Michio Kaku explores technologies that seem impossible today, like time travel, invisibility, and teleportation. He explains the scientific principles behind these concepts in a readable way. The book shows what could become possible as physics advances. It connects theoretical ideas with imagination and creativity. Readers learn how science predicts future technologies and their implications. The narrative encourages wonder and curiosity about the universe. Overall, it makes physics exciting, inspiring, and accessible to all."
},
{
  title: "Silent Spring",
  img: S8,
  author: "Rachel Carson",
  type: "Environmental Study",
  genres: ["Ecology", "Conservation", "Activism", "Ethics", "Nature", "Policy"],
  reads: "35.7K",
  votes: "1.0K",
  time: "1h 30m",
  description: "This book highlights the environmental dangers caused by pesticides and chemicals. Carson explains how these substances damage ecosystems and human health. She raises awareness of ecological balance and the importance of conservation. The narrative helped inspire the modern environmental movement. It combines scientific evidence with compelling storytelling. Readers gain insight into the consequences of human activity on nature. Overall, it is a landmark work advocating responsibility and stewardship of the planet."
},
{
  title: "The Origin of Species",
  img: S9,
  author: "Charles Darwin",
  type: "Philosophical Work",
  genres: ["Evolution", "Natural Selection", "Observation", "Species", "Ethics", "Biology Studies"],
  reads: "42.1K",
  votes: "1.4K",
  time: "2h 0m",
  description: "Darwin’s seminal work introduces the theory of evolution by natural selection. The book examines adaptation, survival, and the diversity of life. Darwin presents meticulous observations and evidence from the natural world. It challenges previous beliefs and reshapes understanding of biology. The narrative explores the relationship between organisms and their environment. Readers gain insight into the scientific process and philosophical implications. Overall, it remains foundational to modern science and evolutionary theory."
},
{
  title: "Stuff Matters",
  img: S10,
  author: "Mark Miodownik",
  type: "Science Popular",
  genres: ["Materials", "Chemistry", "Physics", "Innovation", "Engineering", "Everyday Science"],
  reads: "31.8K",
  votes: "1.1K",
  time: "1h 25m",
  description: "This book explores the fascinating properties of everyday materials. Miodownik explains why materials behave as they do and their practical applications. The narrative connects chemistry, physics, and daily life. Readers learn how materials shape technology, culture, and society. The book makes science accessible and engaging. It combines storytelling with hands-on examples and experiments. Overall, it inspires curiosity and appreciation for the material world around us."
},
{
  title: "Brief Answers to the Big Questions",
  img: S11,
  author: "Stephen Hawking",
  type: "Philosophical Work",
  genres: ["Cosmology", "Astronomy", "Existence", "Future Studies", "Science Philosophy", "Exploration"],
  reads: "46.3K",
  votes: "1.6K",
  time: "2h 10m",
  description: "Hawking tackles some of the universe’s biggest questions, from black holes to the nature of time. He presents complex concepts in a clear and engaging style. The book explores humanity’s place in the cosmos and our future possibilities. Ethical, philosophical, and scientific reflections are woven throughout. Readers are encouraged to think critically about space, technology, and life. Hawking inspires curiosity and wonder about the universe. Overall, it is a profound, accessible, and thought-provoking work on science and philosophy."
},
{
  title: "The Selfish Gene",
  img: S12,
  author: "Richard Dawkins",
  type: "Philosophical Work",
  genres: ["Evolution", "Genetics", "Behavior", "Survival", "Ethics", "Biology Studies"],
  reads: "38.7K",
  votes: "1.2K",
  time: "1h 45m",
  description: "This book explains evolution from the perspective of genes rather than individuals. Dawkins introduces the concept of selfish genes and their role in natural selection. The narrative examines behavior, reproduction, and survival strategies. Ethical questions about life, evolution, and morality are discussed. The book presents a paradigm shift in understanding biology. Readers gain insight into genetics, evolution, and natural phenomena. Overall, it is a key work in modern biology and evolutionary thought."
}
];

export {
  historyBooks,
  scienceBooks,
  technologyBooks,
  literatureBooks
};