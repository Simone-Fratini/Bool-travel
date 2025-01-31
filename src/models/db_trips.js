// mockDatabase.js

// ===========================
// TRIPS (10 total)
// ===========================
const trips = [
  {
    id: 1,
    tripName: "European Discovery",
    location: "Paris, France",
    startDate: "2025-05-10",
    endDate: "2025-05-20"
  },
  {
    id: 2,
    tripName: "Safari Adventure",
    location: "Nairobi, Kenya",
    startDate: "2025-06-01",
    endDate: "2025-06-15"
  },
  {
    id: 3,
    tripName: "Tropical Escape",
    location: "Bali, Indonesia",
    startDate: "2025-07-05",
    endDate: "2025-07-15"
  },
  {
    id: 4,
    tripName: "Alaskan Cruise",
    location: "Juneau, USA",
    startDate: "2025-08-10",
    endDate: "2025-08-20"
  },
  {
    id: 5,
    tripName: "Ancient Ruins",
    location: "Athens, Greece",
    startDate: "2025-09-01",
    endDate: "2025-09-10"
  },
  {
    id: 6,
    tripName: "Rainforest Expedition",
    location: "Manaus, Brazil",
    startDate: "2025-10-05",
    endDate: "2025-10-15"
  },
  {
    id: 7,
    tripName: "Desert Trek",
    location: "Dubai, UAE",
    startDate: "2025-11-02",
    endDate: "2025-11-12"
  },
  {
    id: 8,
    tripName: "Australian Outback",
    location: "Alice Springs, Australia",
    startDate: "2025-12-01",
    endDate: "2025-12-12"
  },
  {
    id: 9,
    tripName: "Great Wall Tour",
    location: "Beijing, China",
    startDate: "2025-04-05",
    endDate: "2025-04-15"
  },
  {
    id: 10,
    tripName: "Northern Lights",
    location: "Reykjavik, Iceland",
    startDate: "2025-03-10",
    endDate: "2025-03-20"
  }
];

// ===========================
// GUIDES (10 total)
// ===========================
const guides = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    phoneNumber: "+1-202-555-0147",
    email: "john.doe@example.com",
    tripId: 1
  },
  {
    id: 2,
    firstName: "Emily",
    lastName: "Brown",
    phoneNumber: "+44-131-555-0192",
    email: "emily.brown@example.co.uk",
    tripId: 2
  },
  {
    id: 3,
    firstName: "Armand",
    lastName: "Dubois",
    phoneNumber: "+33-1-555-0123",
    email: "armand.dubois@example.fr",
    tripId: 3
  },
  {
    id: 4,
    firstName: "Sarah",
    lastName: "Lee",
    phoneNumber: "+1-907-555-0188",
    email: "sarah.lee@example.com",
    tripId: 4
  },
  {
    id: 5,
    firstName: "Nikos",
    lastName: "Papadopoulos",
    phoneNumber: "+30-21-555-0777",
    email: "nikos.papadopoulos@example.gr",
    tripId: 5
  },
  {
    id: 6,
    firstName: "Rafael",
    lastName: "Silva",
    phoneNumber: "+55-92-555-0231",
    email: "rafael.silva@example.br",
    tripId: 6
  },
  {
    id: 7,
    firstName: "Mariam",
    lastName: "Ali",
    phoneNumber: "+971-4-555-0354",
    email: "mariam.ali@example.ae",
    tripId: 7
  },
  {
    id: 8,
    firstName: "Craig",
    lastName: "Martin",
    phoneNumber: "+61-8-555-0412",
    email: "craig.martin@example.au",
    tripId: 8
  },
  {
    id: 9,
    firstName: "Hui",
    lastName: "Zhang",
    phoneNumber: "+86-10-555-0998",
    email: "hui.zhang@example.cn",
    tripId: 9
  },
  {
    id: 10,
    firstName: "Elin",
    lastName: "Jonsson",
    phoneNumber: "+354-555-1234",
    email: "elin.jonsson@example.is",
    tripId: 10
  }
];

// ===========================
// CLIENTS (100 total)
// Each trip has a variable number of clients but at least 7.
// Distribution of clients per trip (total 100):
// Trip 1: 7   | Trip 2: 8  | Trip 3: 9
// Trip 4: 10  | Trip 5: 11 | Trip 6: 10
// Trip 7: 9   | Trip 8: 11 | Trip 9: 13
// Trip 10: 12
// ===========================

const clients = [
  // =============== Trip 1 (id: 1) - 7 clients ===============
  {
    id: 1,
    firstName: "Alice",
    lastName: "Smith",
    phoneNumber: "+1-202-555-0001",
    email: "alice.smith@example.com",
    tripId: 1
  },
  {
    id: 2,
    firstName: "Brian",
    lastName: "Wood",
    phoneNumber: "+1-202-555-0002",
    email: "brian.wood@example.com",
    tripId: 1
  },
  {
    id: 3,
    firstName: "Carol",
    lastName: "Adams",
    phoneNumber: "+1-202-555-0003",
    email: "carol.adams@example.com",
    tripId: 1
  },
  {
    id: 4,
    firstName: "David",
    lastName: "Moore",
    phoneNumber: "+1-202-555-0004",
    email: "david.moore@example.com",
    tripId: 1
  },
  {
    id: 5,
    firstName: "Emma",
    lastName: "Miller",
    phoneNumber: "+1-202-555-0005",
    email: "emma.miller@example.com",
    tripId: 1
  },
  {
    id: 6,
    firstName: "Frank",
    lastName: "Jones",
    phoneNumber: "+1-202-555-0006",
    email: "frank.jones@example.com",
    tripId: 1
  },
  {
    id: 7,
    firstName: "Grace",
    lastName: "Wilson",
    phoneNumber: "+1-202-555-0007",
    email: "grace.wilson@example.com",
    tripId: 1
  },

  // =============== Trip 2 (id: 2) - 8 clients ===============
  {
    id: 8,
    firstName: "Helen",
    lastName: "White",
    phoneNumber: "+1-202-555-0008",
    email: "helen.white@example.com",
    tripId: 2
  },
  {
    id: 9,
    firstName: "Isaac",
    lastName: "Baker",
    phoneNumber: "+1-202-555-0009",
    email: "isaac.baker@example.com",
    tripId: 2
  },
  {
    id: 10,
    firstName: "Julia",
    lastName: "Young",
    phoneNumber: "+1-202-555-0010",
    email: "julia.young@example.com",
    tripId: 2
  },
  {
    id: 11,
    firstName: "Kevin",
    lastName: "Allen",
    phoneNumber: "+1-202-555-0011",
    email: "kevin.allen@example.com",
    tripId: 2
  },
  {
    id: 12,
    firstName: "Laura",
    lastName: "Scott",
    phoneNumber: "+1-202-555-0012",
    email: "laura.scott@example.com",
    tripId: 2
  },
  {
    id: 13,
    firstName: "Martin",
    lastName: "Harris",
    phoneNumber: "+1-202-555-0013",
    email: "martin.harris@example.com",
    tripId: 2
  },
  {
    id: 14,
    firstName: "Nina",
    lastName: "Green",
    phoneNumber: "+1-202-555-0014",
    email: "nina.green@example.com",
    tripId: 2
  },
  {
    id: 15,
    firstName: "Oliver",
    lastName: "Cooper",
    phoneNumber: "+1-202-555-0015",
    email: "oliver.cooper@example.com",
    tripId: 2
  },

  // =============== Trip 3 (id: 3) - 9 clients ===============
  {
    id: 16,
    firstName: "Paula",
    lastName: "Campbell",
    phoneNumber: "+1-202-555-0016",
    email: "paula.campbell@example.com",
    tripId: 3
  },
  {
    id: 17,
    firstName: "Quentin",
    lastName: "Mitchell",
    phoneNumber: "+1-202-555-0017",
    email: "quentin.mitchell@example.com",
    tripId: 3
  },
  {
    id: 18,
    firstName: "Rachel",
    lastName: "Rodriguez",
    phoneNumber: "+1-202-555-0018",
    email: "rachel.rodriguez@example.com",
    tripId: 3
  },
  {
    id: 19,
    firstName: "Steven",
    lastName: "Clark",
    phoneNumber: "+1-202-555-0019",
    email: "steven.clark@example.com",
    tripId: 3
  },
  {
    id: 20,
    firstName: "Tina",
    lastName: "Lewis",
    phoneNumber: "+1-202-555-0020",
    email: "tina.lewis@example.com",
    tripId: 3
  },
  {
    id: 21,
    firstName: "Ursula",
    lastName: "Lee",
    phoneNumber: "+1-202-555-0021",
    email: "ursula.lee@example.com",
    tripId: 3
  },
  {
    id: 22,
    firstName: "Victor",
    lastName: "Walker",
    phoneNumber: "+1-202-555-0022",
    email: "victor.walker@example.com",
    tripId: 3
  },
  {
    id: 23,
    firstName: "Wendy",
    lastName: "Hall",
    phoneNumber: "+1-202-555-0023",
    email: "wendy.hall@example.com",
    tripId: 3
  },
  {
    id: 24,
    firstName: "Xavier",
    lastName: "Lopez",
    phoneNumber: "+1-202-555-0024",
    email: "xavier.lopez@example.com",
    tripId: 3
  },

  // =============== Trip 4 (id: 4) - 10 clients ===============
  {
    id: 25,
    firstName: "Yvonne",
    lastName: "Hill",
    phoneNumber: "+1-202-555-0025",
    email: "yvonne.hill@example.com",
    tripId: 4
  },
  {
    id: 26,
    firstName: "Zack",
    lastName: "Reed",
    phoneNumber: "+1-202-555-0026",
    email: "zack.reed@example.com",
    tripId: 4
  },
  {
    id: 27,
    firstName: "Aaron",
    lastName: "Torres",
    phoneNumber: "+1-202-555-0027",
    email: "aaron.torres@example.com",
    tripId: 4
  },
  {
    id: 28,
    firstName: "Bella",
    lastName: "Nguyen",
    phoneNumber: "+1-202-555-0028",
    email: "bella.nguyen@example.com",
    tripId: 4
  },
  {
    id: 29,
    firstName: "Carlos",
    lastName: "Edwards",
    phoneNumber: "+1-202-555-0029",
    email: "carlos.edwards@example.com",
    tripId: 4
  },
  {
    id: 30,
    firstName: "Diana",
    lastName: "Barnes",
    phoneNumber: "+1-202-555-0030",
    email: "diana.barnes@example.com",
    tripId: 4
  },
  {
    id: 31,
    firstName: "Ethan",
    lastName: "Butler",
    phoneNumber: "+1-202-555-0031",
    email: "ethan.butler@example.com",
    tripId: 4
  },
  {
    id: 32,
    firstName: "Fiona",
    lastName: "Russell",
    phoneNumber: "+1-202-555-0032",
    email: "fiona.russell@example.com",
    tripId: 4
  },
  {
    id: 33,
    firstName: "George",
    lastName: "Foster",
    phoneNumber: "+1-202-555-0033",
    email: "george.foster@example.com",
    tripId: 4
  },
  {
    id: 34,
    firstName: "Hannah",
    lastName: "Marshall",
    phoneNumber: "+1-202-555-0034",
    email: "hannah.marshall@example.com",
    tripId: 4
  },

  // =============== Trip 5 (id: 5) - 11 clients ===============
  {
    id: 35,
    firstName: "Ian",
    lastName: "Hughes",
    phoneNumber: "+1-202-555-0035",
    email: "ian.hughes@example.com",
    tripId: 5
  },
  {
    id: 36,
    firstName: "Jennifer",
    lastName: "Mendoza",
    phoneNumber: "+1-202-555-0036",
    email: "jennifer.mendoza@example.com",
    tripId: 5
  },
  {
    id: 37,
    firstName: "Kevin",
    lastName: "Perry",
    phoneNumber: "+1-202-555-0037",
    email: "kevin.perry@example.com",
    tripId: 5
  },
  {
    id: 38,
    firstName: "Laura",
    lastName: "Armstrong",
    phoneNumber: "+1-202-555-0038",
    email: "laura.armstrong@example.com",
    tripId: 5
  },
  {
    id: 39,
    firstName: "Mike",
    lastName: "Coleman",
    phoneNumber: "+1-202-555-0039",
    email: "mike.coleman@example.com",
    tripId: 5
  },
  {
    id: 40,
    firstName: "Nina",
    lastName: "Hayes",
    phoneNumber: "+1-202-555-0040",
    email: "nina.hayes@example.com",
    tripId: 5
  },
  {
    id: 41,
    firstName: "Oliver",
    lastName: "Warren",
    phoneNumber: "+1-202-555-0041",
    email: "oliver.warren@example.com",
    tripId: 5
  },
  {
    id: 42,
    firstName: "Paula",
    lastName: "Myers",
    phoneNumber: "+1-202-555-0042",
    email: "paula.myers@example.com",
    tripId: 5
  },
  {
    id: 43,
    firstName: "Quentin",
    lastName: "West",
    phoneNumber: "+1-202-555-0043",
    email: "quentin.west@example.com",
    tripId: 5
  },
  {
    id: 44,
    firstName: "Rachel",
    lastName: "Brooks",
    phoneNumber: "+1-202-555-0044",
    email: "rachel.brooks@example.com",
    tripId: 5
  },
  {
    id: 45,
    firstName: "Steven",
    lastName: "Sanders",
    phoneNumber: "+1-202-555-0045",
    email: "steven.sanders@example.com",
    tripId: 5
  },

  // =============== Trip 6 (id: 6) - 10 clients ===============
  {
    id: 46,
    firstName: "Tina",
    lastName: "Ng",
    phoneNumber: "+1-202-555-0046",
    email: "tina.ng@example.com",
    tripId: 6
  },
  {
    id: 47,
    firstName: "Ursula",
    lastName: "Peterson",
    phoneNumber: "+1-202-555-0047",
    email: "ursula.peterson@example.com",
    tripId: 6
  },
  {
    id: 48,
    firstName: "Victor",
    lastName: "Hansen",
    phoneNumber: "+1-202-555-0048",
    email: "victor.hansen@example.com",
    tripId: 6
  },
  {
    id: 49,
    firstName: "Wendy",
    lastName: "Reyes",
    phoneNumber: "+1-202-555-0049",
    email: "wendy.reyes@example.com",
    tripId: 6
  },
  {
    id: 50,
    firstName: "Xavier",
    lastName: "Ramirez",
    phoneNumber: "+1-202-555-0050",
    email: "xavier.ramirez@example.com",
    tripId: 6
  },
  {
    id: 51,
    firstName: "Yvonne",
    lastName: "Porter",
    phoneNumber: "+1-202-555-0051",
    email: "yvonne.porter@example.com",
    tripId: 6
  },
  {
    id: 52,
    firstName: "Zack",
    lastName: "Powell",
    phoneNumber: "+1-202-555-0052",
    email: "zack.powell@example.com",
    tripId: 6
  },
  {
    id: 53,
    firstName: "Aaron",
    lastName: "Long",
    phoneNumber: "+1-202-555-0053",
    email: "aaron.long@example.com",
    tripId: 6
  },
  {
    id: 54,
    firstName: "Bella",
    lastName: "Patterson",
    phoneNumber: "+1-202-555-0054",
    email: "bella.patterson@example.com",
    tripId: 6
  },
  {
    id: 55,
    firstName: "Carlos",
    lastName: "Henderson",
    phoneNumber: "+1-202-555-0055",
    email: "carlos.henderson@example.com",
    tripId: 6
  },

  // =============== Trip 7 (id: 7) - 9 clients ===============
  {
    id: 56,
    firstName: "Diana",
    lastName: "Fernandez",
    phoneNumber: "+1-202-555-0056",
    email: "diana.fernandez@example.com",
    tripId: 7
  },
  {
    id: 57,
    firstName: "Ethan",
    lastName: "Harper",
    phoneNumber: "+1-202-555-0057",
    email: "ethan.harper@example.com",
    tripId: 7
  },
  {
    id: 58,
    firstName: "Fiona",
    lastName: "Lambert",
    phoneNumber: "+1-202-555-0058",
    email: "fiona.lambert@example.com",
    tripId: 7
  },
  {
    id: 59,
    firstName: "George",
    lastName: "Hunt",
    phoneNumber: "+1-202-555-0059",
    email: "george.hunt@example.com",
    tripId: 7
  },
  {
    id: 60,
    firstName: "Hannah",
    lastName: "Burke",
    phoneNumber: "+1-202-555-0060",
    email: "hannah.burke@example.com",
    tripId: 7
  },
  {
    id: 61,
    firstName: "Ian",
    lastName: "Castillo",
    phoneNumber: "+1-202-555-0061",
    email: "ian.castillo@example.com",
    tripId: 7
  },
  {
    id: 62,
    firstName: "Jennifer",
    lastName: "Stephens",
    phoneNumber: "+1-202-555-0062",
    email: "jennifer.stephens@example.com",
    tripId: 7
  },
  {
    id: 63,
    firstName: "Kevin",
    lastName: "Lopez",
    phoneNumber: "+1-202-555-0063",
    email: "kevin.lopez@example.com",
    tripId: 7
  },
  {
    id: 64,
    firstName: "Laura",
    lastName: "Bell",
    phoneNumber: "+1-202-555-0064",
    email: "laura.bell@example.com",
    tripId: 7
  },

  // =============== Trip 8 (id: 8) - 11 clients ===============
  {
    id: 65,
    firstName: "Mike",
    lastName: "Fox",
    phoneNumber: "+1-202-555-0065",
    email: "mike.fox@example.com",
    tripId: 8
  },
  {
    id: 66,
    firstName: "Nina",
    lastName: "Rice",
    phoneNumber: "+1-202-555-0066",
    email: "nina.rice@example.com",
    tripId: 8
  },
  {
    id: 67,
    firstName: "Oliver",
    lastName: "Griffin",
    phoneNumber: "+1-202-555-0067",
    email: "oliver.griffin@example.com",
    tripId: 8
  },
  {
    id: 68,
    firstName: "Paula",
    lastName: "Lane",
    phoneNumber: "+1-202-555-0068",
    email: "paula.lane@example.com",
    tripId: 8
  },
  {
    id: 69,
    firstName: "Quentin",
    lastName: "Morrison",
    phoneNumber: "+1-202-555-0069",
    email: "quentin.morrison@example.com",
    tripId: 8
  },
  {
    id: 70,
    firstName: "Rachel",
    lastName: "Howell",
    phoneNumber: "+1-202-555-0070",
    email: "rachel.howell@example.com",
    tripId: 8
  },
  {
    id: 71,
    firstName: "Steven",
    lastName: "Dean",
    phoneNumber: "+1-202-555-0071",
    email: "steven.dean@example.com",
    tripId: 8
  },
  {
    id: 72,
    firstName: "Tina",
    lastName: "Cross",
    phoneNumber: "+1-202-555-0072",
    email: "tina.cross@example.com",
    tripId: 8
  },
  {
    id: 73,
    firstName: "Ursula",
    lastName: "Whitehead",
    phoneNumber: "+1-202-555-0073",
    email: "ursula.whitehead@example.com",
    tripId: 8
  },
  {
    id: 74,
    firstName: "Victor",
    lastName: "Day",
    phoneNumber: "+1-202-555-0074",
    email: "victor.day@example.com",
    tripId: 8
  },
  {
    id: 75,
    firstName: "Wendy",
    lastName: "Page",
    phoneNumber: "+1-202-555-0075",
    email: "wendy.page@example.com",
    tripId: 8
  },

  // =============== Trip 9 (id: 9) - 13 clients ===============
  {
    id: 76,
    firstName: "Xavier",
    lastName: "Glover",
    phoneNumber: "+1-202-555-0076",
    email: "xavier.glover@example.com",
    tripId: 9
  },
  {
    id: 77,
    firstName: "Yvonne",
    lastName: "Walsh",
    phoneNumber: "+1-202-555-0077",
    email: "yvonne.walsh@example.com",
    tripId: 9
  },
  {
    id: 78,
    firstName: "Zack",
    lastName: "Ortega",
    phoneNumber: "+1-202-555-0078",
    email: "zack.ortega@example.com",
    tripId: 9
  },
  {
    id: 79,
    firstName: "Aaron",
    lastName: "Bates",
    phoneNumber: "+1-202-555-0079",
    email: "aaron.bates@example.com",
    tripId: 9
  },
  {
    id: 80,
    firstName: "Bella",
    lastName: "Hammond",
    phoneNumber: "+1-202-555-0080",
    email: "bella.hammond@example.com",
    tripId: 9
  },
  {
    id: 81,
    firstName: "Carlos",
    lastName: "Turner",
    phoneNumber: "+1-202-555-0081",
    email: "carlos.turner@example.com",
    tripId: 9
  },
  {
    id: 82,
    firstName: "Diana",
    lastName: "Little",
    phoneNumber: "+1-202-555-0082",
    email: "diana.little@example.com",
    tripId: 9
  },
  {
    id: 83,
    firstName: "Ethan",
    lastName: "Strickland",
    phoneNumber: "+1-202-555-0083",
    email: "ethan.strickland@example.com",
    tripId: 9
  },
  {
    id: 84,
    firstName: "Fiona",
    lastName: "Kirby",
    phoneNumber: "+1-202-555-0084",
    email: "fiona.kirby@example.com",
    tripId: 9
  },
  {
    id: 85,
    firstName: "George",
    lastName: "Watts",
    phoneNumber: "+1-202-555-0085",
    email: "george.watts@example.com",
    tripId: 9
  },
  {
    id: 86,
    firstName: "Hannah",
    lastName: "Douglas",
    phoneNumber: "+1-202-555-0086",
    email: "hannah.douglas@example.com",
    tripId: 9
  },
  {
    id: 87,
    firstName: "Ian",
    lastName: "Maxwell",
    phoneNumber: "+1-202-555-0087",
    email: "ian.maxwell@example.com",
    tripId: 9
  },
  {
    id: 88,
    firstName: "Jennifer",
    lastName: "Freeman",
    phoneNumber: "+1-202-555-0088",
    email: "jennifer.freeman@example.com",
    tripId: 9
  },

  // =============== Trip 10 (id: 10) - 12 clients ===============
  {
    id: 89,
    firstName: "Kevin",
    lastName: "Craig",
    phoneNumber: "+1-202-555-0089",
    email: "kevin.craig@example.com",
    tripId: 10
  },
  {
    id: 90,
    firstName: "Laura",
    lastName: "Reynolds",
    phoneNumber: "+1-202-555-0090",
    email: "laura.reynolds@example.com",
    tripId: 10
  },
  {
    id: 91,
    firstName: "Mike",
    lastName: "Jennings",
    phoneNumber: "+1-202-555-0091",
    email: "mike.jennings@example.com",
    tripId: 10
  },
  {
    id: 92,
    firstName: "Nina",
    lastName: "Boone",
    phoneNumber: "+1-202-555-0092",
    email: "nina.boone@example.com",
    tripId: 10
  },
  {
    id: 93,
    firstName: "Oliver",
    lastName: "Houston",
    phoneNumber: "+1-202-555-0093",
    email: "oliver.houston@example.com",
    tripId: 10
  },
  {
    id: 94,
    firstName: "Paula",
    lastName: "Jensen",
    phoneNumber: "+1-202-555-0094",
    email: "paula.jensen@example.com",
    tripId: 10
  },
  {
    id: 95,
    firstName: "Quentin",
    lastName: "Lucas",
    phoneNumber: "+1-202-555-0095",
    email: "quentin.lucas@example.com",
    tripId: 10
  },
  {
    id: 96,
    firstName: "Rachel",
    lastName: "Tate",
    phoneNumber: "+1-202-555-0096",
    email: "rachel.tate@example.com",
    tripId: 10
  },
  {
    id: 97,
    firstName: "Steven",
    lastName: "Farrell",
    phoneNumber: "+1-202-555-0097",
    email: "steven.farrell@example.com",
    tripId: 10
  },
  {
    id: 98,
    firstName: "Tina",
    lastName: "Robles",
    phoneNumber: "+1-202-555-0098",
    email: "tina.robles@example.com",
    tripId: 10
  },
  {
    id: 99,
    firstName: "Ursula",
    lastName: "Vargas",
    phoneNumber: "+1-202-555-0099",
    email: "ursula.vargas@example.com",
    tripId: 10
  },
  {
    id: 100,
    firstName: "Victor",
    lastName: "Soto",
    phoneNumber: "+1-202-555-0100",
    email: "victor.soto@example.com",
    tripId: 10
  }
];

// Export the arrays (optional usage in a Node environment)
export {
  trips,
  guides,
  clients
};