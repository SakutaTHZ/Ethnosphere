import { type Ethnicity } from '../types';

export const ETHNICITIES: Ethnicity[] = [
  {
    id: "kachin",
    name: "Kachin",
    region: "Northern Myanmar",
    origin: "The Kachin people are a group of ethnic groups who inhabit the Kachin Hills in northern Myanmar's Kachin State and neighboring Yunnan Province, China, and Arunachal Pradesh, India. They are known for their fierce independence and complex clan system.",
    clothingImages: [
      "https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1000&auto=format&fit=crop"
    ],
    habitatImage: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1000&auto=format&fit=crop",
    languageName: "Jingpho",
    languageSample: "Kaja wa ai! (Hello in Jingpho)",
    bestPlaces: [
      {
        name: "Myitkyina",
        description: "The capital city of Kachin State, situated on the west bank of the Ayeyarwady River. It is the northernmost river port in Myanmar.",
        image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1000&auto=format&fit=crop"
      },
      {
        name: "Indawgyi Lake",
        description: "One of the largest inland lakes in Southeast Asia, a haven for migratory birds and a UNESCO Biosphere Reserve.",
        image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    description: "The Kachin are famous for the Manau festival, a grand celebration of dance and culture that can last for several days.",
    habitatDescription: "Traditional Kachin houses are longhouses built on stilts, often made of bamboo and thatch, designed to accommodate extended families and provide protection from the elements.",
    clothingDescription: "Kachin traditional dress is famous for its intricate silver ornaments and hand-woven patterns. Women wear black jackets with silver discs and red wrap-around skirts with geometric designs.",
    festivals: "The Manau Festival is the most significant event, featuring massive totem-like poles and synchronized group dancing to traditional drums.",
    cuisine: "Kachin food is known for being spicy and herbal. 'Kachin Pounded Beef' and 'Shat Jam' (a mixed rice dish) are popular staples.",
    interestingFact: "The Kachin people have a traditional belief system that includes 'Nats' (spirits), which they honor alongside their predominantly Christian faith.",
    quizQuestions: [
      {
        question: "What is the most famous festival of the Kachin people?",
        options: ["Thingyan", "Manau", "Thadingyut", "Kasone"],
        correctAnswer: 1,
        explanation: "The Manau festival is the grandest celebration of Kachin culture, featuring traditional dances and silver-ornamented costumes."
      },
      {
        question: "What material is prominently used in Kachin women's traditional jackets?",
        options: ["Gold", "Bronze", "Silver", "Copper"],
        correctAnswer: 2,
        explanation: "Kachin women's jackets are iconic for their numerous silver discs and ornaments."
      }
    ]
  },
  {
    id: "kayah",
    name: "Kayah",
    region: "Eastern Myanmar",
    origin: "The Kayah, also known as Karenni, are a Sino-Tibetan people native to Kayah State of Myanmar. They have a rich history of resisting external influence to preserve their unique identity.",
    clothingImages: [
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523805081446-ed9a7bb83973?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?q=80&w=1000&auto=format&fit=crop"
    ],
    habitatImage: "https://images.unsplash.com/photo-1501705388883-4ed8a543392c?q=80&w=1000&auto=format&fit=crop",
    languageName: "Kayah",
    languageSample: "Deedaw! (Hello in Kayah)",
    bestPlaces: [
      {
        name: "Loikaw",
        description: "The capital of Kayah State, famous for the Taung Kwe Zedi pagoda perched on a limestone outcrop, offering a stunning view of the city.",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000&auto=format&fit=crop"
      },
      {
        name: "Pan Pet Village",
        description: "A traditional Kayan village where women still wear brass neck coils, preserving ancient customs and providing a glimpse into their heritage.",
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    description: "The Kayah people are renowned for their unique traditions, including the use of brass rings by Kayan women and the annual Kay Htoe Boe festival.",
    habitatDescription: "Kayah houses are typically built on stilts with wooden frames and bamboo walls, often featuring a central hearth for cooking and warmth during the cool mountain nights.",
    clothingDescription: "Traditional Kayah dress features red and black colors. Women wear short skirts, silver leg rings, and distinctive headcloths. The Kayan subgroup is famous for brass neck coils.",
    festivals: "The Kay Htoe Boe (Pole Planting) festival is the most important, held annually to pray for good weather and a bountiful harvest.",
    cuisine: "Kayah sausage is a famous local delicacy, often enjoyed with locally brewed millet wine.",
    interestingFact: "The brass coils worn by Kayan women can weigh up to 10 kilograms and are added gradually from a young age.",
    quizQuestions: [
      {
        question: "Which subgroup of the Kayah is famous for wearing brass neck coils?",
        options: ["Padaung (Kayan)", "Geko", "Bre", "Manu"],
        correctAnswer: 0,
        explanation: "The Kayan (Padaung) women are internationally recognized for their tradition of wearing brass neck rings."
      },
      {
        question: "What is a famous food item from Kayah State?",
        options: ["Mohinga", "Shan Noodles", "Kayah Sausage", "Tea Leaf Salad"],
        correctAnswer: 2,
        explanation: "Kayah sausage is a well-known traditional food from the region, often paired with local millet wine."
      }
    ]
  },
  {
    id: "kayin",
    name: "Kayin",
    region: "Southern & Eastern Myanmar",
    origin: "The Kayin, or Karen, are an ethnolinguistic group of Sino-Tibetan peoples. They have a long history of agricultural expertise and a deep connection to the land.",
    clothingImages: [
      "https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505832018823-50331d70d237?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?q=80&w=1000&auto=format&fit=crop"
    ],
    habitatImage: "https://images.unsplash.com/photo-1469474099711-4239078bb38e?q=80&w=1000&auto=format&fit=crop",
    languageName: "S'gaw Karen",
    languageSample: "Ghaw ler a ghaw! (Good morning in Karen)",
    bestPlaces: [
      {
        name: "Hpa-An",
        description: "The capital of Kayin State, surrounded by dramatic limestone mountains and sacred caves like Sadan Cave, which houses thousands of Buddha images.",
        image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=80&w=1000&auto=format&fit=crop"
      },
      {
        name: "Mount Zwegabin",
        description: "A prominent limestone mountain offering panoramic views and home to thousands of Buddha statues at its base, a symbol of Kayin spiritual devotion.",
        image: "https://images.unsplash.com/photo-1440445638591-28730fca5b2a?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    description: "The Kayin are one of the largest ethnic groups in Myanmar, known for their rich musical heritage, particularly the bronze drum, and their traditional wrestling.",
    habitatDescription: "Kayin villages are often located in valleys or on hillsides. Houses are built on stilts with bamboo or wood, featuring large open verandas for social gatherings.",
    clothingDescription: "Kayin dress is characterized by simple yet elegant tunics. Unmarried women wear long white dresses, while married women wear shorter red tunics and black skirts.",
    festivals: "The Kayin New Year is celebrated with traditional dances, including the famous 'Don Dance' and bamboo pole dances.",
    cuisine: "Talabaw is a traditional Kayin bamboo shoot soup, known for its unique earthy flavor and nutritional value.",
    interestingFact: "The Kayin bronze drum is considered a sacred object and is often used in traditional ceremonies to summon rain or ward off evil spirits.",
    quizQuestions: [
      {
        question: "What color dress do unmarried Kayin women traditionally wear?",
        options: ["Red", "Black", "White", "Blue"],
        correctAnswer: 2,
        explanation: "In Kayin culture, unmarried women traditionally wear long white tunics, while married women wear red and black."
      },
      {
        question: "Which musical instrument is a symbol of Kayin cultural identity?",
        options: ["Harp", "Bronze Drum", "Flute", "Xylophone"],
        correctAnswer: 1,
        explanation: "The bronze drum is a highly revered instrument in Kayin culture, used in many traditional ceremonies."
      }
    ]
  },
  {
    id: "chin",
    name: "Chin",
    region: "Western Myanmar",
    origin: "The Chin people are a Tibeto-Burman ethnic group native to the Chin State. They are known for their resilience in the rugged mountain terrain and their diverse tribal languages.",
    clothingImages: [
      "https://images.unsplash.com/photo-1580619305218-8423a7f19a8a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1523805081446-ed9a7bb83973?q=80&w=1000&auto=format&fit=crop"
    ],
    habitatImage: "https://images.unsplash.com/photo-1528493366414-23144153d88d?q=80&w=1000&auto=format&fit=crop",
    languageName: "Chin",
    languageSample: "Dam te in! (Hello in Chin)",
    bestPlaces: [
      {
        name: "Mount Victoria (Nat Ma Taung)",
        description: "The highest peak in Chin State, famous for its unique flora, fauna, and the traditional facial tattoos of local women, a practice now fading.",
        image: "https://images.unsplash.com/photo-1528493366414-23144153d88d?q=80&w=1000&auto=format&fit=crop"
      },
      {
        name: "Kennedy Peak",
        description: "A historic peak offering stunning views of the surrounding mountains and valleys, reflecting the rugged beauty of Chin State.",
        image: "https://images.unsplash.com/photo-1528493366414-23144153d88d?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    description: "The Chin are known for their diverse sub-groups, intricate weaving, and the historical practice of facial tattooing among women, which varies by tribe.",
    habitatDescription: "Chin houses are built on steep slopes using wood and stone, often featuring intricate carvings and trophies from past hunts, reflecting their warrior heritage.",
    clothingDescription: "Chin traditional dress is highly diverse. It often features hand-woven blankets used as shawls, vibrant colors, and elaborate beadwork and silver jewelry.",
    festivals: "Khuado is a traditional harvest festival celebrated with community feasts, traditional songs, and dances to thank the spirits for a good crop.",
    cuisine: "Sabuti is a hearty Chin corn soup, often served with beef or pork, providing warmth and energy in the cold mountain climate.",
    interestingFact: "There are over 50 different dialects spoken by the Chin people, making it one of the most linguistically diverse states in Myanmar.",
    quizQuestions: [
      {
        question: "What was a unique traditional practice among Chin women in the past?",
        options: ["Neck rings", "Facial tattoos", "Foot binding", "Ear stretching"],
        correctAnswer: 1,
        explanation: "Chin women from various tribes historically practiced facial tattooing, with patterns unique to each group."
      },
      {
        question: "What is the highest peak in Chin State?",
        options: ["Mount Zwegabin", "Mount Victoria", "Kennedy Peak", "Hkakabo Razi"],
        correctAnswer: 1,
        explanation: "Mount Victoria (Nat Ma Taung) is the highest peak in Chin State and a major tourist attraction."
      }
    ]
  },
  {
    id: "bamar",
    name: "Bamar (Burma)",
    region: "Central Myanmar",
    origin: "The Bamar are the dominant ethnic group in Myanmar. Their history is marked by powerful kingdoms like Bagan, which unified much of the region under Theravada Buddhism.",
    clothingImages: [
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528164344705-47542687990d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=1000&auto=format&fit=crop"
    ],
    habitatImage: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000&auto=format&fit=crop",
    languageName: "Burmese",
    languageSample: "Mingalaba! (Auspicious hello in Burmese)",
    bestPlaces: [
      {
        name: "Bagan",
        description: "An ancient city and a UNESCO World Heritage Site, home to thousands of Buddhist temples, pagodas, and monasteries dating from the 9th to 13th centuries.",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000&auto=format&fit=crop"
      },
      {
        name: "Shwedagon Pagoda",
        description: "The most sacred Buddhist pagoda in Myanmar, located in Yangon, covered in hundreds of gold plates and topped with a 76-carat diamond.",
        image: "https://images.unsplash.com/photo-1528164344705-47542687990d?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    description: "The Bamar culture is deeply rooted in Theravada Buddhism, influencing their art, architecture, and daily life, including the widespread use of Thanaka.",
    habitatDescription: "Traditional Bamar houses are made of wood or bamboo, built on stilts to avoid flooding during the monsoon, with thatched or corrugated iron roofs.",
    clothingDescription: "The national dress is the 'Longyi', a cylindrical cloth worn around the waist. Men wear a 'Paso' and women wear a 'Htamein', often paired with a silk jacket.",
    festivals: "Thingyan, the Burmese New Year Water Festival, is the most celebrated event, involving water-throwing to wash away the sins of the previous year.",
    cuisine: "Mohinga, a rice noodle and fish soup, is the unofficial national dish of Myanmar, typically eaten for breakfast.",
    interestingFact: "Bamar people traditionally use 'Thanaka', a yellowish-white cosmetic paste made from ground bark, as a natural sunscreen and skin conditioner.",
    quizQuestions: [
      {
        question: "What is the name of the cylindrical cloth worn as national dress in Myanmar?",
        options: ["Sari", "Longyi", "Kimono", "Hanbok"],
        correctAnswer: 1,
        explanation: "The Longyi is the traditional and national dress of Myanmar, worn by both men and women."
      },
      {
        question: "What is the most famous ancient city in Bamar history, known for its thousands of temples?",
        options: ["Mandalay", "Yangon", "Bagan", "Bago"],
        correctAnswer: 2,
        explanation: "Bagan was the capital of the first Burmese empire and remains one of the world's greatest archaeological sites."
      }
    ]
  },
  {
    id: "mon",
    name: "Mon",
    region: "Southern Myanmar",
    origin: "The Mon are one of the earliest peoples to inhabit Southeast Asia. They were instrumental in introducing Theravada Buddhism and Indian culture to the region.",
    clothingImages: [
      "https://images.unsplash.com/photo-1523438097201-512ae7d59c44?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1444491741275-3747c53c99b4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505832018823-50331d70d237?q=80&w=1000&auto=format&fit=crop"
    ],
    habitatImage: "https://images.unsplash.com/photo-1523438097201-512ae7d59c44?q=80&w=1000&auto=format&fit=crop",
    languageName: "Mon",
    languageSample: "Mageun ra! (Hello in Mon)",
    bestPlaces: [
      {
        name: "Mawlamyine",
        description: "The capital of Mon State, a charming colonial-era port city with beautiful pagodas and sunset views, once the capital of British Burma.",
        image: "https://images.unsplash.com/photo-1523438097201-512ae7d59c44?q=80&w=1000&auto=format&fit=crop"
      },
      {
        name: "Kyaiktiyo Pagoda (Golden Rock)",
        description: "A well-known Buddhist pilgrimage site featuring a small pagoda built on top of a granite boulder covered with gold leaves, seemingly defying gravity.",
        image: "https://images.unsplash.com/photo-1523438097201-512ae7d59c44?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    description: "The Mon are known for their ancient kingdoms, sophisticated art, and their role as cultural bridges between India and Southeast Asia.",
    habitatDescription: "Mon houses are traditionally built on stilts, similar to Bamar houses, but often with distinct architectural flourishes reflecting their ancient heritage.",
    clothingDescription: "Mon traditional dress is similar to Bamar but often features distinct patterns and colors. Red is a significant color in Mon textiles.",
    festivals: "Mon National Day is a major celebration of Mon identity, featuring traditional music, dance, and literature competitions.",
    cuisine: "Thingyan Rice (rice served in cool water with fried fish) is a famous Mon dish traditionally served during the water festival.",
    interestingFact: "The Mon script is the basis for several other Southeast Asian scripts, including the Burmese and Thai scripts.",
    quizQuestions: [
      {
        question: "Which famous gravity-defying pagoda is located in Mon State?",
        options: ["Shwedagon", "Bagan", "Golden Rock (Kyaiktiyo)", "Sule"],
        correctAnswer: 2,
        explanation: "The Golden Rock (Kyaiktiyo Pagoda) is a world-famous pilgrimage site located in Mon State."
      },
      {
        question: "The Mon people are credited with introducing which religion to Myanmar?",
        options: ["Hinduism", "Islam", "Theravada Buddhism", "Christianity"],
        correctAnswer: 2,
        explanation: "The Mon were among the first to adopt and spread Theravada Buddhism throughout the region."
      }
    ]
  },
  {
    id: "rakhine",
    name: "Rakhine",
    region: "Western Myanmar",
    origin: "The Rakhine people have a rich history as a maritime kingdom. Their ancient capital, Mrauk U, was once a major trading hub in the Bay of Bengal.",
    clothingImages: [
      "https://images.unsplash.com/photo-1501705388883-4ed8a543392c?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1444491741275-3747c53c99b4?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1000&auto=format&fit=crop"
    ],
    habitatImage: "https://images.unsplash.com/photo-1501705388883-4ed8a543392c?q=80&w=1000&auto=format&fit=crop",
    languageName: "Rakhine",
    languageSample: "Nay kaung lar! (How are you in Rakhine)",
    bestPlaces: [
      {
        name: "Mrauk U",
        description: "An archaeologically important town, once the capital of a powerful Rakhine kingdom, filled with stone temples and fortifications.",
        image: "https://images.unsplash.com/photo-1501705388883-4ed8a543392c?q=80&w=1000&auto=format&fit=crop"
      },
      {
        name: "Ngapali Beach",
        description: "Myanmar's premier beach destination, with white sands and palm-lined shores along the Bay of Bengal, reflecting the coastal beauty of Rakhine.",
        image: "https://images.unsplash.com/photo-1501705388883-4ed8a543392c?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    description: "The Rakhine have distinct Buddhist traditions and are known for their stone architecture, which differs from the brick structures of Bagan.",
    habitatDescription: "Rakhine houses are built on stilts, often using durable hardwoods to withstand the coastal environment and heavy monsoon rains.",
    clothingDescription: "Rakhine traditional dress is similar to Bamar but with unique weaving patterns. Women's 'Htamein' often features horizontal stripes and intricate borders.",
    festivals: "The Rakhine Water Festival is unique for its use of large wooden boats and traditional wrestling competitions.",
    cuisine: "Rakhine food is famous for being very spicy and sour, with 'Rakhine Mote Ti' (spicy rice noodle soup) being a popular dish.",
    interestingFact: "The Mahamuni Buddha Image, one of the most sacred in Myanmar, is believed to have originated from the ancient Rakhine kingdom of Dhanyawaddy.",
    quizQuestions: [
      {
        question: "What is the ancient capital of the Rakhine kingdom, known for its stone temples?",
        options: ["Bagan", "Mandalay", "Mrauk U", "Inwa"],
        correctAnswer: 2,
        explanation: "Mrauk U was the powerful capital of the Rakhine kingdom and is now a major archaeological site."
      },
      {
        question: "Rakhine cuisine is particularly known for being:",
        options: ["Sweet", "Salty", "Spicy and Sour", "Bland"],
        correctAnswer: 2,
        explanation: "Rakhine food is famous across Myanmar for its bold, spicy, and sour flavors."
      }
    ]
  },
  {
    id: "shan",
    name: "Shan",
    region: "Eastern Myanmar",
    origin: "The Shan are a Tai ethnic group. They established several powerful principalities in the Shan Hills, maintaining a high degree of autonomy throughout history.",
    clothingImages: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?q=80&w=1000&auto=format&fit=crop"
    ],
    habitatImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop",
    languageName: "Shan",
    languageSample: "Mai sung kha! (Hello in Shan)",
    bestPlaces: [
      {
        name: "Inle Lake",
        description: "A freshwater lake famous for its floating gardens, leg-rowing fishermen, and stilt villages, a unique ecosystem in the Shan Hills.",
        image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1000&auto=format&fit=crop"
      },
      {
        name: "Taunggyi",
        description: "The capital of Shan State, famous for its annual Fire Balloon Festival and vibrant multi-ethnic markets reflecting the diversity of the region.",
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1000&auto=format&fit=crop"
      }
    ],
    description: "The Shan are known for their vibrant festivals, delicious cuisine, and their history of skilled diplomacy and trade.",
    habitatDescription: "Shan houses are traditionally built on stilts with wooden frames and bamboo walls, often featuring large open areas for community gatherings and ceremonies.",
    clothingDescription: "Shan men are famous for their baggy trousers and turbans. Women wear colorful wrap-around skirts and jackets, often with silver buttons and embroidery.",
    festivals: "The Tazaungdaing Fire Balloon Festival in Taunggyi is a spectacular event where massive paper balloons are launched into the night sky.",
    cuisine: "Shan Noodles (rice noodles with chicken or pork sauce) and Shan Tofu (made from chickpeas) are popular throughout Southeast Asia.",
    interestingFact: "The Shan language is closely related to Thai and Lao, reflecting their shared Tai-Kadai linguistic roots.",
    quizQuestions: [
      {
        question: "Which famous lake in Shan State is known for its leg-rowing fishermen?",
        options: ["Indawgyi Lake", "Inle Lake", "Kandawgyi Lake", "Inya Lake"],
        correctAnswer: 1,
        explanation: "Inle Lake is world-famous for its unique leg-rowing technique used by the local Intha people."
      },
      {
        question: "What is a popular Shan dish made from chickpeas?",
        options: ["Mohinga", "Shan Tofu", "Tea Leaf Salad", "Samosa"],
        correctAnswer: 1,
        explanation: "Shan Tofu is a unique and popular dish made from chickpea flour, distinct from soy-based tofu."
      }
    ]
  }
];
