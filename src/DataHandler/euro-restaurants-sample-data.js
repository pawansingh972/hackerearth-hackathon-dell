const restaurantsData = [
    {
        "name": "Mega Waffel",
        "city": "Zurich",
        "cuisines": ['Cafe', 'Delicatessen', 'Street Food'],
        "ranking": 1421,
        "rating": 3.5,
        "reviews": 4
    },
    {
        "name": "Kunsthausrestaurant",
        "city": "Zurich",
        "cuisines": ['European', 'Central European', 'Vegetarian Friendly', 'Vegan Options'],
        "ranking": 1422,
        "rating": 3.5,
        "reviews": 142
    },
    {
        "name": "Soodhof",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1423,
        "rating": 3.5,
        "reviews": 5
    },
    {
        "name": "Domino's Pizza",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1424,
        "rating": 3.5,
        "reviews": 5
    },
    {
        "name": "Graf Z",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1425,
        "rating": 3,
        "reviews": 12
    },
    {
        "name": "Alumni Quattro Lounge",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1426,
        "rating": 3.5,
        "reviews": 3
    },
    {
        "name": "Bistro Landesmuseum",
        "city": "Zurich",
        "cuisines": ['Fast Food'],
        "ranking": 1427,
        "rating": 3,
        "reviews": 13
    },
    {
        "name": "McDonald's",
        "city": "Zurich",
        "cuisines": ['Fast Food'],
        "ranking": 1428,
        "rating": 3,
        "reviews": 23
    },
    {
        "name": "Poushe Shtroudelhaus",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1429,
        "rating": 3.5,
        "reviews": 8
    },
    {
        "name": "Grabli Bar",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1430,
        "rating": 3.5,
        "reviews": 14
    },
    {
        "name": "Restaurant Pizzeria Vesuvio",
        "city": "Zurich",
        "cuisines": ['Italian'],
        "ranking": 1431,
        "rating": 4,
        "reviews": 13
    },
    {
        "name": "Fusion Meal\" Eth Honggerberg",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1432,
        "rating": 3,
        "reviews": 2
    },
    {
        "name": "Cafe Mandarin",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1433,
        "rating": 3.5,
        "reviews": 18
    },
    {
        "name": "Oskar Kowalski Bar Cafe",
        "city": "Zurich",
        "cuisines": ['Bar'],
        "ranking": 1434,
        "rating": 3.5,
        "reviews": 16
    },
    {
        "name": "Tobel",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1435,
        "rating": 4,
        "reviews": 5
    },
    {
        "name": "il postino",
        "city": "Zurich",
        "cuisines": ['Italian', 'Pizza', 'Mediterranean', 'European', 'Vegetarian Friendly'],
        "ranking": 1436,
        "rating": 3,
        "reviews": 127
    },
    {
        "name": "Scent of Bamboo",
        "city": "Zurich",
        "cuisines": ['Chinese', 'Asian', 'Thai', 'Vegetarian Friendly'],
        "ranking": 1437,
        "rating": 3,
        "reviews": 63
    },
    {
        "name": "Il Caffe",
        "city": "Zurich",
        "cuisines": ['Italian'],
        "ranking": 1438,
        "rating": 3.5,
        "reviews": 7
    },
    {
        "name": "Suan Long",
        "city": "Zurich",
        "cuisines": ['Chinese', 'Asian', 'Thai', 'Vietnamese'],
        "ranking": 1439,
        "rating": 3,
        "reviews": 6
    },
    {
        "name": "Cafe Dallas",
        "city": "Zurich",
        "cuisines": ['Swiss', 'European'],
        "ranking": 1440,
        "rating": 3.5,
        "reviews": 7
    },
    {
        "name": "Restaurant Werd",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1441,
        "rating": 3,
        "reviews": 5
    },
    {
        "name": "Redneck Heaven",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1442,
        "rating": 3,
        "reviews": 5
    },
    {
        "name": "Sternen Da Guido",
        "city": "Zurich",
        "cuisines": ['Italian', 'European', 'Pizza', 'Mediterranean', 'Vegetarian Friendly'],
        "ranking": 1443,
        "rating": 3.5,
        "reviews": 29
    },
    {
        "name": "Restaurant Zunfthaus zur Schmieden",
        "city": "Zurich",
        "cuisines": ['French', 'Swiss', 'European'],
        "ranking": 1444,
        "rating": 3,
        "reviews": 5
    },
    {
        "name": "Tillsamman",
        "city": "Zurich",
        "cuisines": ['French', 'Swiss', 'European'],
        "ranking": 1445,
        "rating": 5,
        "reviews": 9
    },
    {
        "name": "The Lemon Grass",
        "city": "Zurich",
        "cuisines": ['Asian', 'Thai'],
        "ranking": 1446,
        "rating": 3,
        "reviews": 17
    },
    {
        "name": "Ristorane Pizzeria Il Salento",
        "city": "Zurich",
        "cuisines": ['Italian', 'Pizza'],
        "ranking": 1447,
        "rating": 3,
        "reviews": 15
    },
    {
        "name": "Nelson Pub",
        "city": "Zurich",
        "cuisines": ['Bar', 'Pub', 'British'],
        "ranking": 1448,
        "rating": 3,
        "reviews": 79
    },
    {
        "name": "Cafeteria city",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1449,
        "rating": 3.5,
        "reviews": 17
    },
    {
        "name": "Falcone",
        "city": "Zurich",
        "cuisines": ['Swiss', 'European', 'Central European'],
        "ranking": 1450,
        "rating": 3,
        "reviews": 50
    },
    {
        "name": "Auhof",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1451,
        "rating": 3,
        "reviews": 2
    },
    {
        "name": "John Baker",
        "city": "Zurich",
        "cuisines": ['Cafe', 'Healthy'],
        "ranking": 1452,
        "rating": 3,
        "reviews": 15
    },
    {
        "name": "Hooters Zurich",
        "city": "Zurich",
        "cuisines": ['American', 'Bar'],
        "ranking": 1453,
        "rating": 3,
        "reviews": 76
    },
    {
        "name": "Kornsilo AG",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1454,
        "rating": 3,
        "reviews": 11
    },
    {
        "name": "Pumpstation",
        "city": "Zurich",
        "cuisines": ['Swiss', 'Bar', 'Barbecue', 'European'],
        "ranking": 1455,
        "rating": 3,
        "reviews": 109
    },
    {
        "name": "Palme de Beirut",
        "city": "Zurich",
        "cuisines": ['Lebanese', 'Middle Eastern', 'Mediterranean', 'Halal'],
        "ranking": 1456,
        "rating": 3,
        "reviews": 62
    },
    {
        "name": "Restaurant Ochsen",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1457,
        "rating": 3.5,
        "reviews": 2
    },
    {
        "name": "Rizzoli",
        "city": "Zurich",
        "cuisines": ['Swiss', 'European'],
        "ranking": 1458,
        "rating": 3.5,
        "reviews": 3
    },
    {
        "name": "Restaurant Perle de Beirut",
        "city": "Zurich",
        "cuisines": ['Lebanese', 'Mediterranean'],
        "ranking": 1459,
        "rating": 3,
        "reviews": 2
    },
    {
        "name": "By Khalid Mexican Restaurant",
        "city": "Zurich",
        "cuisines": ['Mexican'],
        "ranking": 1460,
        "rating": 3.5,
        "reviews": 4
    },
    {
        "name": "Kaimug Box",
        "city": "Zurich",
        "cuisines": ['Asian', 'Thai'],
        "ranking": 1461,
        "rating": 3.5,
        "reviews": 10
    },
    {
        "name": "Schmink Bar",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1462,
        "rating": 3.5,
        "reviews": 5
    },
    {
        "name": "Pirata",
        "city": "Zurich",
        "cuisines": ['Pizza'],
        "ranking": 1463,
        "rating": 3,
        "reviews": 2
    },
    {
        "name": "Hong Kong Food Paradise",
        "city": "Zurich",
        "cuisines": ['Chinese', 'Sushi', 'Asian', 'Japanese', 'Indian', 'Vegetarian Friendly'],
        "ranking": 1464,
        "rating": 3,
        "reviews": 84
    },
    {
        "name": "Spring Onion",
        "city": "Zurich",
        "cuisines": ['Sushi', 'Asian'],
        "ranking": 1465,
        "rating": 3,
        "reviews": 24
    },
    {
        "name": "Bar Corazon",
        "city": "Zurich",
        "cuisines": ['Bar', 'Pub'],
        "ranking": 1466,
        "rating": 3,
        "reviews": 46
    },
    {
        "name": "Safran Restaurant Take Away Und Shisha Lounge",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1467,
        "rating": 2.5,
        "reviews": 2
    },
    {
        "name": "Peperoncino - La Favorita",
        "city": "Zurich",
        "cuisines": ['Italian', 'Turkish'],
        "ranking": 1468,
        "rating": 3,
        "reviews": 3
    },
    {
        "name": "Papa Ceviche",
        "city": "Zurich",
        "cuisines": ['Peruvian', 'Latin', 'Seafood', 'South American', 'Vegetarian Friendly', 'Gluten Free Options'],
        "ranking": 1469,
        "rating": 3,
        "reviews": 115
    },
    {
        "name": "Restaurant Take Away Suan Long",
        "city": "Zurich",
        "cuisines": ['Chinese', 'Asian'],
        "ranking": 1470,
        "rating": 3,
        "reviews": 30
    },
    {
        "name": "Restaurant Turbinenhaus",
        "city": "Zurich",
        "cuisines": ['Italian'],
        "ranking": 1471,
        "rating": 3,
        "reviews": 20
    },
    {
        "name": "Z am Park",
        "city": "Zurich",
        "cuisines": ['Cafe', 'Healthy'],
        "ranking": 1472,
        "rating": 3.5,
        "reviews": 28
    },
    {
        "name": "McGees Irish Pub & Restaurant",
        "city": "Zurich",
        "cuisines": ['Bar', 'Indian', 'Irish', 'Fast Food', 'British', 'Pub'],
        "ranking": 1473,
        "rating": 3.5,
        "reviews": 24
    },
    {
        "name": "Restaurant Cupola",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1494,
        "rating": 3,
        "reviews": ""
    },
    {
        "name": "the swiss house",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1474,
        "rating": 3,
        "reviews": ""
    },
    {
        "name": "JIL Club & Dining",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1475,
        "rating": 3,
        "reviews": ""
    },
    {
        "name": "Duetto Cafe-Bistro-Bar-Gelateria",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1476,
        "rating": 3,
        "reviews": ""
    },
    {
        "name": "Bistro Park Stadelhofen",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1477,
        "rating": 3,
        "reviews": 4
    },
    {
        "name": "Caffe Spettacolo",
        "city": "Zurich",
        "cuisines": ['Mexican', 'Cafe'],
        "ranking": 1478,
        "rating": 3,
        "reviews": ""
    },
    {
        "name": "Thai Mahnamnan",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1479,
        "rating": 3,
        "reviews": ""
    },
    {
        "name": "Le Coquin",
        "city": "Zurich",
        "cuisines": ['French'],
        "ranking": 1480,
        "rating": 3,
        "reviews": ""
    },
    {
        "name": "Foodpoint Restaurant",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1481,
        "rating": 3,
        "reviews": 2
    },
    {
        "name": "Lunchbuffet",
        "city": "Zurich",
        "cuisines": ['Eastern European'],
        "ranking": 1482,
        "rating": 3,
        "reviews": ""
    },
    {
        "name": "Restaurant Il Parmigiano",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1483,
        "rating": 3,
        "reviews": ""
    },
    {
        "name": "Rosso Arancio",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1484,
        "rating": 3,
        "reviews": ""
    },
    {
        "name": "New Point",
        "city": "Zurich",
        "cuisines": ['American', 'Swiss', 'Fast Food', 'European', 'Turkish'],
        "ranking": 1485,
        "rating": 3,
        "reviews": 2
    },
    {
        "name": "Restaurant Hagenholz",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1486,
        "rating": 3,
        "reviews": ""
    },
    {
        "name": "Sultan Sofrasi",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1487,
        "rating": 3,
        "reviews": ""
    },
    {
        "name": "Magic Masala",
        "city": "Zurich",
        "cuisines": ['Indian'],
        "ranking": 1488,
        "rating": 3,
        "reviews": 2
    },
    {
        "name": "Schone Bescherung",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1489,
        "rating": 3,
        "reviews": ""
    },
    {
        "name": "Restaurant Manegg",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1490,
        "rating": 3,
        "reviews": ""
    },
    {
        "name": "Cafe Ami",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1491,
        "rating": 3,
        "reviews": ""
    },
    {
        "name": "Backhuus Fischer",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1492,
        "rating": 3,
        "reviews": ""
    },
    {
        "name": "Cafe Hongg d'Bio Insle",
        "city": "Zurich",
        "cuisines": ['Swiss', 'European'],
        "ranking": 1493,
        "rating": 3,
        "reviews": ""
    },
    {
        "name": "Bergrestaurant Uto Staffel",
        "city": "Zurich",
        "cuisines": ['Swiss', 'European', 'Central European'],
        "ranking": 1495,
        "rating": 3,
        "reviews": 153
    },
    {
        "name": "Poushe Strudelhaus",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1496,
        "rating": 3.5,
        "reviews": 6
    },
    {
        "name": "Suan Long",
        "city": "Zurich",
        "cuisines": ['Chinese'],
        "ranking": 1497,
        "rating": 3,
        "reviews": 21
    },
    {
        "name": "Ciccio's Ristorante Bar Pizzeria",
        "city": "Zurich",
        "cuisines": ['Italian', 'Pizza'],
        "ranking": 1498,
        "rating": 3,
        "reviews": 12
    },
    {
        "name": "Zur Nachtigall",
        "city": "Zurich",
        "cuisines": ['Barbecue', 'Steakhouse', 'International', 'European'],
        "ranking": 1499,
        "rating": 3.5,
        "reviews": 98
    },
    {
        "name": "QUAI 61",
        "city": "Zurich",
        "cuisines": ['Swiss', 'European', 'Central European', 'International', 'Grill', 'Contemporary', 'Vegetarian Friendly'],
        "ranking": 1500,
        "rating": 3.5,
        "reviews": 347
    },
    {
        "name": "Buffet Bellevue",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1501,
        "rating": 2.5,
        "reviews": 7
    },
    {
        "name": "ESPRESSINO AL PORTO",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1502,
        "rating": 2.5,
        "reviews": 2
    },
    {
        "name": "Restaurant Cameleon",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1503,
        "rating": 3,
        "reviews": 5
    },
    {
        "name": "Peter Pan",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1504,
        "rating": 3,
        "reviews": 15
    },
    {
        "name": "Hitzberger",
        "city": "Zurich",
        "cuisines": ['Cafe', 'Fast Food'],
        "ranking": 1505,
        "rating": 3.5,
        "reviews": 15
    },
    {
        "name": "sushi4you",
        "city": "Zurich",
        "cuisines": ['Japanese', 'Sushi'],
        "ranking": 1507,
        "rating": 3.5,
        "reviews": 3
    },
    {
        "name": "Turm",
        "city": "Zurich",
        "cuisines": ['Mediterranean', 'Spanish', 'Grill', 'Vegetarian Friendly'],
        "ranking": 1508,
        "rating": 3,
        "reviews": 195
    },
    {
        "name": "Hua-Thai",
        "city": "Zurich",
        "cuisines": ['Chinese', 'Vietnamese', 'Thai'],
        "ranking": 1509,
        "rating": 3,
        "reviews": 17
    },
    {
        "name": "Hiltl am Strand - Strandbad Mythenquai",
        "city": "Zurich",
        "cuisines": ['Indian', 'Swiss', 'European', 'Asian', 'Vegetarian Friendly', 'Vegan Options'],
        "ranking": 1510,
        "rating": 3,
        "reviews": 10
    },
    {
        "name": "Migros Restaurant Glattzentrum",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1511,
        "rating": 3,
        "reviews": 2
    },
    {
        "name": "Hin & Weg Gare",
        "city": "Zurich",
        "cuisines": ['Cafe'],
        "ranking": 1512,
        "rating": 3,
        "reviews": 41
    },
    {
        "name": "Rosso",
        "city": "Zurich",
        "cuisines": ['Italian', 'Pizza', 'Mediterranean', 'European', 'Vegetarian Friendly'],
        "ranking": 1513,
        "rating": 3,
        "reviews": 376
    },
    {
        "name": "dieci Restaurant Dietlikon",
        "city": "Zurich",
        "cuisines": ['Italian', 'European', 'Pizza', 'Mediterranean'],
        "ranking": 1514,
        "rating": 3,
        "reviews": 58
    },
    {
        "name": "Asian Place",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1515,
        "rating": 3.5,
        "reviews": 12
    },
    {
        "name": "New Point",
        "city": "Zurich",
        "cuisines": ['Fast Food', 'Turkish', 'Middle Eastern'],
        "ranking": 1516,
        "rating": 3,
        "reviews": 101
    },
    {
        "name": "Restaurant Binzgarten",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1517,
        "rating": 3,
        "reviews": 18
    },
    {
        "name": "Cafe Cote d'Azur",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1518,
        "rating": 3.5,
        "reviews": 3
    },
    {
        "name": "Hitzberger",
        "city": "Zurich",
        "cuisines": ['Fast Food', 'Cafe'],
        "ranking": 1519,
        "rating": 3,
        "reviews": 35
    },
    {
        "name": "Tasty",
        "city": "Zurich",
        "cuisines": ['Turkish'],
        "ranking": 1520,
        "rating": 3.5,
        "reviews": 17
    },
    {
        "name": "Zum Weissen Schwan",
        "city": "Zurich",
        "cuisines": ['Swiss', 'European', 'Vegetarian Friendly'],
        "ranking": 1521,
        "rating": 3,
        "reviews": 43
    },
    {
        "name": "The Butcher",
        "city": "Zurich",
        "cuisines": ['American', 'Bar', 'Vegetarian Friendly'],
        "ranking": 1522,
        "rating": 3,
        "reviews": 53
    },
    {
        "name": "Takano city",
        "city": "Zurich",
        "cuisines": ['Japanese', 'Sushi', 'Asian'],
        "ranking": 1523,
        "rating": 3,
        "reviews": 43
    },
    {
        "name": "Sportsbar 1904",
        "city": "Zurich",
        "cuisines": ['Bar', 'International'],
        "ranking": 1524,
        "rating": 3,
        "reviews": 41
    },
    {
        "name": "Hitzberger",
        "city": "Zurich",
        "cuisines": ['Cafe', 'Fast Food'],
        "ranking": 1525,
        "rating": 3.5,
        "reviews": 7
    },
    {
        "name": "Happy Backerei",
        "city": "Zurich",
        "cuisines": ['Swiss', 'Pizza', 'European'],
        "ranking": 1526,
        "rating": 3,
        "reviews": 24
    },
    {
        "name": "Kian Restaurant",
        "city": "Zurich",
        "cuisines": ['Middle Eastern', 'Persian'],
        "ranking": 1527,
        "rating": 2.5,
        "reviews": 3
    },
    {
        "name": "Fine Choice",
        "city": "Zurich",
        "cuisines": ['Chinese', 'Seafood'],
        "ranking": 1528,
        "rating": 2.5,
        "reviews": 16
    },
    {
        "name": "Bei Tony",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1529,
        "rating": 3,
        "reviews": 5
    },
    {
        "name": "Caffe Spettacolo",
        "city": "Zurich",
        "cuisines": ['Mexican'],
        "ranking": 1530,
        "rating": 3,
        "reviews": 6
    },
    {
        "name": "Vior Club & Restaurant",
        "city": "Zurich",
        "cuisines": ['Swiss', 'American', 'Bar', 'European', 'Pub'],
        "ranking": 1531,
        "rating": 3,
        "reviews": 66
    },
    {
        "name": "Neu Punkt",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1532,
        "rating": 3,
        "reviews": 11
    },
    {
        "name": "Mambo Cafe",
        "city": "Zurich",
        "cuisines": ['Italian'],
        "ranking": 1533,
        "rating": 2.5,
        "reviews": 10
    },
    {
        "name": "Triibhuus",
        "city": "Zurich",
        "cuisines": ['Mediterranean', 'European', 'Spanish', 'Vegetarian Friendly'],
        "ranking": 1534,
        "rating": 2.5,
        "reviews": 260
    },
    {
        "name": "Steakhouse Churrasco am Central",
        "city": "Zurich",
        "cuisines": ['Steakhouse', 'Barbecue', 'European', 'Argentinean', 'South American'],
        "ranking": 1535,
        "rating": 3,
        "reviews": 13
    },
    {
        "name": "Burger King",
        "city": "Zurich",
        "cuisines": ['American', 'Fast Food'],
        "ranking": 1536,
        "rating": 3,
        "reviews": 26
    },
    {
        "name": "Migros Restaurant",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1537,
        "rating": 2.5,
        "reviews": 7
    },
    {
        "name": "Opfikon",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1538,
        "rating": 3,
        "reviews": 2
    },
    {
        "name": "Cafe Complet",
        "city": "Zurich",
        "cuisines": ['Swiss', 'European'],
        "ranking": 1539,
        "rating": 5,
        "reviews": 4
    },
    {
        "name": "McDonald's",
        "city": "Zurich",
        "cuisines": ['American'],
        "ranking": 1540,
        "rating": 2.5,
        "reviews": 11
    },
    {
        "name": "Burgstein`s Gasthaus Penalty",
        "city": "Zurich",
        "cuisines": ['Austrian', 'Swiss', 'International', 'European'],
        "ranking": 1541,
        "rating": 5,
        "reviews": 2
    },
    {
        "name": "Yumi Hana",
        "city": "Zurich",
        "cuisines": ['Korean', 'Japanese'],
        "ranking": 1542,
        "rating": 3,
        "reviews": 50
    },
    {
        "name": "Pizzeria-Ristorante Buongiorno",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1543,
        "rating": 2.5,
        "reviews": 5
    },
    {
        "name": "Peking Garden",
        "city": "Zurich",
        "cuisines": ['Chinese', 'Asian'],
        "ranking": 1544,
        "rating": 2.5,
        "reviews": 41
    },
    {
        "name": "Long Huang",
        "city": "Zurich",
        "cuisines": ['Chinese', 'Vietnamese'],
        "ranking": 1545,
        "rating": 2.5,
        "reviews": 14
    },
    {
        "name": "Pizzeria La Rustica",
        "city": "Zurich",
        "cuisines": ['Italian', 'Pizza'],
        "ranking": 1546,
        "rating": 2.5,
        "reviews": 2
    },
    {
        "name": "Restaurant Hallo",
        "city": "Zurich",
        "cuisines": ['European', 'Cafe'],
        "ranking": 1547,
        "rating": 3,
        "reviews": 21
    },
    {
        "name": "Restaurant Fuchsli",
        "city": "Zurich",
        "cuisines": ['Swiss', 'European'],
        "ranking": 1548,
        "rating": 3,
        "reviews": 4
    },
    {
        "name": "Restaurant Suan Long",
        "city": "Zurich",
        "cuisines": ['Chinese', 'Asian', 'Vegetarian Friendly'],
        "ranking": 1549,
        "rating": 2.5,
        "reviews": 41
    },
    {
        "name": "Asia im Foodland",
        "city": "Zurich",
        "cuisines": ['Chinese', 'Sushi', 'Asian', 'Thai'],
        "ranking": 1550,
        "rating": 3,
        "reviews": 23
    },
    {
        "name": "The Ganges",
        "city": "Zurich",
        "cuisines": ['Indian'],
        "ranking": 1551,
        "rating": 4.5,
        "reviews": 13
    },
    {
        "name": "Domino's Pizza",
        "city": "Zurich",
        "cuisines": ['Italian'],
        "ranking": 1552,
        "rating": 2,
        "reviews": 16
    },
    {
        "name": "The Pirates",
        "city": "Zurich",
        "cuisines": ['International'],
        "ranking": 1553,
        "rating": 2.5,
        "reviews": 22
    },
    {
        "name": "Sultanhan",
        "city": "Zurich",
        "cuisines": ['Barbecue'],
        "ranking": 1554,
        "rating": 2.5,
        "reviews": 2
    },
    {
        "name": "Old House Bar",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1555,
        "rating": 5,
        "reviews": 4
    },
    {
        "name": "WIR Messe Zurich AG",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1556,
        "rating": 2.5,
        "reviews": 2
    },
    {
        "name": "Sushi Isakaya",
        "city": "Zurich",
        "cuisines": ['Japanese', 'Sushi', 'Asian'],
        "ranking": 1557,
        "rating": 2.5,
        "reviews": 58
    },
    {
        "name": "Bacaro",
        "city": "Zurich",
        "cuisines": ['Bar', 'Sushi', 'Delicatessen', 'Pub', 'Wine Bar'],
        "ranking": 1558,
        "rating": 3,
        "reviews": 4
    },
    {
        "name": "Food Center",
        "city": "Zurich",
        "cuisines": ['Fast Food'],
        "ranking": 1559,
        "rating": 2,
        "reviews": 5
    },
    {
        "name": "Backerei Und Cafe Wust",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1560,
        "rating": 3,
        "reviews": 9
    },
    {
        "name": "Caffe Spettacolo",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1561,
        "rating": 2.5,
        "reviews": 4
    },
    {
        "name": "Don Quijote",
        "city": "Zurich",
        "cuisines": ['Spanish'],
        "ranking": 1562,
        "rating": 2.5,
        "reviews": 4
    },
    {
        "name": "The News Deli",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1563,
        "rating": 2.5,
        "reviews": 5
    },
    {
        "name": "Hello Bar",
        "city": "Zurich",
        "cuisines": ['Bar', 'Pub'],
        "ranking": 1564,
        "rating": 2.5,
        "reviews": 3
    },
    {
        "name": "Pizza-Blitz Zurich Sud",
        "city": "Zurich",
        "cuisines": ['Pizza'],
        "ranking": 1565,
        "rating": 2.5,
        "reviews": 13
    },
    {
        "name": "libanesisches essen",
        "city": "Zurich",
        "cuisines": ['Middle Eastern'],
        "ranking": 1566,
        "rating": 3.5,
        "reviews": 12
    },
    {
        "name": "Ta Ty Asian Restaurant",
        "city": "Zurich",
        "cuisines": ['Asian'],
        "ranking": 1567,
        "rating": 2.5,
        "reviews": 3
    },
    {
        "name": "Bistro Lochergut",
        "city": "Zurich",
        "cuisines": ['Italian'],
        "ranking": 1568,
        "rating": 3,
        "reviews": 2
    },
    {
        "name": "Taj Palace",
        "city": "Zurich",
        "cuisines": ['Indian', 'Asian', 'Vegetarian Friendly', 'Halal'],
        "ranking": 1569,
        "rating": 2.5,
        "reviews": 53
    },
    {
        "name": "Tasteria",
        "city": "Zurich",
        "cuisines": ['International'],
        "ranking": 1570,
        "rating": 4,
        "reviews": 2
    },
    {
        "name": "Milchbar-Am-Bellevue",
        "city": "Zurich",
        "cuisines": ['European'],
        "ranking": 1571,
        "rating": 2.5,
        "reviews": 11
    },
    {
        "name": "Bye Bye Bar",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1572,
        "rating": 2,
        "reviews": 6
    },
    {
        "name": "New Shanghai",
        "city": "Zurich",
        "cuisines": ['Chinese', 'Asian'],
        "ranking": 1573,
        "rating": 2,
        "reviews": ""
    },
    {
        "name": "Burrito Brothers",
        "city": "Zurich",
        "cuisines": ['Mexican', 'Fast Food'],
        "ranking": 1574,
        "rating": 2,
        "reviews": ""
    },
    {
        "name": "Don Pepe",
        "city": "Zurich",
        "cuisines": ['Spanish'],
        "ranking": 1575,
        "rating": 2,
        "reviews": ""
    },
    {
        "name": "azzurri",
        "city": "Zurich",
        "cuisines": ['Italian'],
        "ranking": 1576,
        "rating": 2,
        "reviews": ""
    },
    {
        "name": "Pizzeria la Casa",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1577,
        "rating": 2,
        "reviews": 3
    },
    {
        "name": "Bistro-Pub Aladin",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1578,
        "rating": 2,
        "reviews": 2
    },
    {
        "name": "Cocoa Beach Zurich",
        "city": "Zurich",
        "cuisines": ['Bar', 'Pub'],
        "ranking": 1579,
        "rating": 2,
        "reviews": 10
    },
    {
        "name": "Forum",
        "city": "Zurich",
        "cuisines": ['Mediterranean', 'European', 'Central European', 'Bar', 'Vegetarian Friendly'],
        "ranking": 1580,
        "rating": 3.5,
        "reviews": 104
    },
    {
        "name": "PurPur",
        "city": "Zurich",
        "cuisines": ['Bar'],
        "ranking": 1581,
        "rating": 2,
        "reviews": 150
    },
    {
        "name": "Windegg",
        "city": "Zurich",
        "cuisines": ['Swiss', 'European', 'Central European'],
        "ranking": 1582,
        "rating": 3,
        "reviews": 3
    },
    {
        "name": "Zur Au",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1583,
        "rating": 4,
        "reviews": ""
    },
    {
        "name": "Jade",
        "city": "Zurich",
        "cuisines": ['Chinese', 'Swiss', 'Mediterranean', 'European'],
        "ranking": 1584,
        "rating": 3,
        "reviews": 21
    },
    {
        "name": "Emo Bistro",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1585,
        "rating": 2,
        "reviews": 2
    },
    {
        "name": "Pizza-Blitz Zurich-Oerlikon",
        "city": "Zurich",
        "cuisines": ['Italian', 'Pizza'],
        "ranking": 1586,
        "rating": 2.5,
        "reviews": 16
    },
    {
        "name": "Restaurant Wehrlischloss",
        "city": "Zurich",
        "cuisines": ['Steakhouse', 'Swiss', 'European'],
        "ranking": 1587,
        "rating": 2,
        "reviews": 8
    },
    {
        "name": "Allegrotto",
        "city": "Zurich",
        "cuisines": "",
        "ranking": 1588,
        "rating": 2,
        "reviews": 8
    },
    {
        "name": "Swiss Food Delivery",
        "city": "Zurich",
        "cuisines": ['Italian', 'Chinese', 'American', 'Indian', 'Thai'],
        "ranking": 1589,
        "rating": 2.5,
        "reviews": 3
    },
    {
        "name": "Restaurant Moringa Teff",
        "city": "Zurich",
        "cuisines": ['Italian', 'African', 'Ethiopian'],
        "ranking": 1590,
        "rating": 5,
        "reviews": ""
    }
]

export default restaurantsData;