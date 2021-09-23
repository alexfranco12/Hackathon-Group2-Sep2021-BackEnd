require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
//   useCreateIndex: true,
  useUnifiedTopology: true,
//   useFindAndModify: false
});

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});

const Dogs = require('../models/dogs');

(async function() {

    
    await Dogs.deleteMany({});
    const dogs = await Dogs.create([
      {
        "name": "Tofu",
        "location": "Cross Creek Animal Rescue",
        "age": "2 years old",
        "photo": [
          "https://images.unsplash.com/photo-1597633425046-08f5110420b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
          "https://images.unsplash.com/photo-1600077029182-92ac8906f9a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
          "https://images.unsplash.com/photo-1597633611385-17238892d086?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
          "https://images.unsplash.com/photo-1600077106724-946750eeaf3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
          "https://images.unsplash.com/photo-1597633544424-4da83804df40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        ],
        "tagline": "Playful and curious",
        "description": "Tofu is 2 years old, 20 pounds and full of sunshine and happiness. Tofu is housebroken, crate trained, loves to play with her tennis balls and ice cubes. This compact boy loves everyone he meets - dogs, kids, cats....everyone!",
        "breed": [
          "Corgi"
        ],
        "weight": 20,
        "goodWithDogs": true,
        "goodWithKids": true,
        "houseTrained": true,
        "vaccinated": true,
        "sex": "Male",
        "fixed": true,
        "color": "Light Brown and White"
      }, {
        "name": "Maize",
        "location": "It Takes A Village Rescue",
        "age": "4 years old",
        "photo": [
          "https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/239124330_1533772546967919_3819863549318109987_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=3p-l3ItWDzQAX-EEEAQ&_nc_ht=scontent-iad3-1.xx&oh=e419608e9db42d7fca5efafaec7199fd&oe=617297CC",
          "https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/238852446_1532481047097069_6800064500516467821_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=pQJ7D3gtxToAX8OmYKP&_nc_ht=scontent-iad3-1.xx&oh=449fc348ec2d8cb5c6536d977eca0b8d&oe=61736FED",
          "https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/237907968_1532481010430406_7037604571802160782_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=jgzJB49OYZ0AX8SZiRH&_nc_oc=AQlOLEPmjwHu930YtwrkYWwqpGPJuB6jSi0jK_9xcfrQ0wB9Cf1D-w-3SsZJjpySZkA&_nc_ht=scontent-iad3-1.xx&oh=ef62b19fc13314c5bacd46121ad1694f&oe=61725362",
          "https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/236856628_1532480960430411_373905257722037390_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=gmZVUIOPwDwAX9Oa51v&_nc_ht=scontent-iad3-1.xx&oh=c0b1119cb75868a60591bb61c99e4c2a&oe=6172A0BB",
          "https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/238827579_1532480933763747_1685438134313547703_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=uTkRqtN3waIAX-Rzv0r&tn=4HS3O-UzYezkKbKK&_nc_ht=scontent-iad3-1.xx&oh=62cdfa5bee00c77111c78071e504ec2d&oe=61716ACC"
        ],
        "tagline": "Sweet girl, looking for love",
        "description": "Maize came to us from a family that had to move where she couldn't go too.  She has been an only dog with a house full of kids her whole life, and would do best without other dogs in the home.  A well-behaved sweetheart, Maize wants to find a forever home where she can play outside with kids and cuddle up on the couch after dinner.  Ask about a playdate!",
        "breed": [
          "Staffordshire Terrier"
        ],
        "weight": 53,
        "goodWithDogs": false,
        "goodWithKids": true,
        "houseTrained": true,
        "vaccinated": true,
        "sex": "Female",
        "fixed": true,
        "color": "Dapple with White"
      }, {
        "name": "Buster",
        "location": "It Takes A Village Rescue",
        "age": "11 years old",
        "photo": [
          "https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/183824496_1463577153987459_4707440164824183097_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=zHnAKOcxh0sAX8cswO6&_nc_oc=AQl8hG5-qf5wToDWdDY4VGIHh-2c9yIq9QZEkKqolr1-DZwsHAMMLv0FUWR9sdJSC8Y&_nc_ht=scontent-iad3-1.xx&oh=7ff465537bf223de022f6177e1a09dab&oe=6172FA56",
          "https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/184340659_1463577190654122_6736859339649637730_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=Ozw8GZWrqu8AX_hVhC-&_nc_ht=scontent-iad3-1.xx&oh=69968bece7421c8ddd33caaef43a352a&oe=617325CF",
          "https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/183842441_1463577133987461_6206229240931138926_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=mOSlxySxGCkAX_HGvjJ&_nc_ht=scontent-iad3-1.xx&oh=1b49c80575c16059d754a0996af9828e&oe=6171D124",
          "https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/184001132_1463577087320799_7262173896241256272_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=uGZgWBvB9WkAX-G9S8r&_nc_oc=AQk0w5uPI3lWGhJxkIbmC0Kqq-T9AsB9j-09_5ISTjvyT799MME0vJj-WF15acgGzLQ&_nc_ht=scontent-iad3-1.xx&oh=a51e4b5294e7d58ebb19404a978fa39d&oe=617132DA",
          "https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/184155011_1463577063987468_1774906324052531196_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=vu8F36b7SXYAX-gxwYS&_nc_ht=scontent-iad3-1.xx&oh=82b68b58a6032a187dacbfbcf80e2876&oe=617372AA"
        ],
        "tagline": "Playful clutz",
        "description": "Unfortunately, Buster's former owner passed away with no one left to take care of him.  Buster was a loyal companion for the last years of a his previous owner's life and needs attachment again.  Buster loves his toys and to carry them around so he can toss them in the air and jump around.  He's never been much of an outside dog, but loves his walks and is great on a leash.",
        "breed": [
          "mixed"
        ],
        "weight": 42,
        "goodWithDogs": true,
        "goodWithKids": true,
        "houseTrained": true,
        "vaccinated": true,
        "sex": "Male",
        "fixed": true,
        "color": "White and Brown"
      }, {
        "name": "Spencer",
        "location": "It Takes A Village Rescue",
        "age": "4 months old",
        "photo": [
          "https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/163176034_1429676060710902_7572660260071297429_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=fn-KFWHx3GYAX80qD_q&_nc_ht=scontent-iad3-1.xx&oh=52881f1f83bb86da8e68574a54913c11&oe=6173EE62",
          "https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/163842752_1429676047377570_3401862457245781985_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=hDwgwPcNw_QAX9DQ3bS&tn=4HS3O-UzYezkKbKK&_nc_ht=scontent-iad3-1.xx&oh=eea57100665b6039a874e04ec3f08b18&oe=61738748",
          "https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/162891767_1429676014044240_7611419162977892934_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=CiLBWGMISgQAX-RzF6H&_nc_ht=scontent-iad3-1.xx&oh=32c87c9a3e2e83a5383a0144865e1cc1&oe=61735AC8",
          "https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/163050896_1429676007377574_5043481754290954995_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=WLq-FVPMzfEAX8ZN_km&_nc_ht=scontent-iad3-1.xx&oh=14461725ab4aebdcb3ffe87bad71436c&oe=6172665F"
        ],
        "tagline": "Curious and cautious",
        "description": "Brand new to us and still discovering the world, Spencer has a tendency to get in to everything.  He would do great in a home with kids to play with, though he hasn't spent much time around other dogs yet.  Uncharacteristically for a puppy he has a tendency to like to watch others play, but will join in when he gets excited.  This little guy can't wait to meet you!",
        "breed": [
          "Terrier", "Lab"
        ],
        "weight": 13,
        "goodWithDogs": false,
        "goodWithKids": true,
        "houseTrained": false,
        "vaccinated": true,
        "sex": "Male",
        "fixed": false,
        "color": "Black and White"
      }, {
        "name": "Benny",
        "location": "Cross Creek Animal Rescue",
        "age": "3 years old",
        "photo": [
          "https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/152362304_1410327189312456_3352690283363526939_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=ASFaZW7iQ_cAX9IPmSF&_nc_ht=scontent-iad3-1.xx&oh=a243526c8a03ba3aedce356e697b2339&oe=6171CD06",
          "https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/151856290_1410327075979134_5517661035788436642_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=IbWxp44yl3kAX9bNdpU&_nc_ht=scontent-iad3-1.xx&oh=872c474e72ee9048c1204c8b3e7cead5&oe=61714EAA",
          "https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/152227525_1410327135979128_3327571521498487025_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=DLETYuTSZowAX-wsClJ&_nc_ht=scontent-iad3-1.xx&oh=458b162c612cf331119daf8354047e33&oe=6171F26B",
          "https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/151220911_1410327232645785_4748310119002659441_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=o7dUrtI3YaoAX_cnjFy&_nc_ht=scontent-iad3-1.xx&oh=ccb4d23eccaf44b63dddf3caa4bb1220&oe=61731F24",
          "https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/152684254_1410327279312447_5862621330256430375_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=LDArnL1J5skAX_Er6Rk&tn=4HS3O-UzYezkKbKK&_nc_ht=scontent-iad3-1.xx&oh=456e1daae3911cf2862aef2f12e96382&oe=6170458A"
        ],
        "tagline": "A boy looking for a lap",
        "description": "Benny can't wait to meet his forever companion!  Great with other dogs, but skittish around younger kids, Benny was found wandering near a river, hungry and alone.  This sweet boy survived and has thrived since joining us and loves to snuggle next to you.  Very relaxed for his age, Benny would be great with older families that aren't very active.",
        "breed": [
          "Lab", "Hound"
        ],
        "weight": 53,
        "goodWithDogs": true,
        "goodWithKids": false,
        "houseTrained": true,
        "vaccinated": true,
        "sex": "Male",
        "fixed": true,
        "color": "Brown and Dapple"
      }, {
        "name": "Rocco",
        "location": "Making A Difference Rescue",
        "age": "2 years old",
        "photo": [
          "https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/100558371_1186645611680616_3307077968416735232_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=PsuwDuCrDi4AX8PHCKj&_nc_ht=scontent-iad3-1.xx&oh=48cf22bedc4e897450d8fbf273995d63&oe=61713D7C",
          "https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/102760184_1198727537139090_1730723941650125872_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=ud0DbzPMwFoAX_QCbAF&tn=4HS3O-UzYezkKbKK&_nc_ht=scontent-iad3-1.xx&oh=fcba868a8cda737b9ddd0df9486857c2&oe=61730891",
          "https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/102287508_1198727557139088_2935946869548383230_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=LD1NnxPYUc4AX8cSalc&_nc_ht=scontent-iad3-1.xx&oh=5f5cfad958f8b94eca1401ea9e8c32da&oe=6172B678",
          "https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/99436726_1186645565013954_5765456174212186112_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=vWAgtXLhxNoAX_MerDX&_nc_ht=scontent-iad3-1.xx&oh=5cd8323027528ea52ad0e88496c21c6d&oe=6170E005",
          "https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/100053782_1186645505013960_1222776579285843968_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=iEkHd6yBzFwAX8LYtac&_nc_ht=scontent-iad3-1.xx&oh=8357783ce6d5d0a2fa79e1b385fbc245&oe=617262AC"
        ],
        "tagline": "Loves to be outside",
        "description": "Rocco hasn't had the best life and needs some good TLC.  Loves to be outside and should be in a home with plenty of space for him to move.  Unfortunately, Rocco was found neglected in someone's yard and did not get the love he deserves.  But, as you can see from his pictures, he has a great spirit and with patience will make a wonderful friend.",
        "breed": [
          "Lab", "Shepherd", "Terrier"
        ],
        "weight": 37,
        "goodWithDogs": true,
        "goodWithKids": false,
        "houseTrained": true,
        "vaccinated": true,
        "sex": "Male",
        "fixed": true,
        "color": "Black, Brown, and White"
      }, {
        "name": "Namilla",
        "location": "Making A Difference Rescue",
        "age": "11 years old",
        "photo": [
          "https://images.unsplash.com/photo-1520038410233-7141be7e6f97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1474&q=80",
          "https://images.unsplash.com/photo-1618265341355-d0e2d1fdf26b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1064&q=80",
          "https://images.unsplash.com/photo-1520087619250-584c0cbd35e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=894&q=80",
          "https://images.unsplash.com/photo-1511732831640-a201294ac90e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80",
          "https://images.unsplash.com/photo-1589935698791-5b0c81a0ce1a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80"
        ],
        "tagline": "Looking to share your life",
        "description": "Say hello to Namila! This gorgeous tiny girl is a recently retired show dog surrendered in order to help her find the best forever home out there! She’s a real sweetheart, ready to relax and be loved and adored by some lucky someone! At Namila’s small size and advanced age, she should only go to an adult home with no children to deal with. If you’re looking for a precious girl for a best friend to share all good things in life with, please submit an adoption application for Namila!",
        "breed": [
          "Dachsund"
        ],
        "weight": 18,
        "goodWithDogs": false,
        "goodWithKids": false,
        "houseTrained": true,
        "vaccinated": true,
        "sex": "Female",
        "fixed": true,
        "color": "Black and Brown"
      }, {
        "name": "Lee",
        "location": "Cross Creek Animal Rescue",
        "age": "12 years old",
        "photo": [
          "https://images.unsplash.com/photo-1578133507770-a35cc3c786e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1567225591450-06036b3392a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1622435242389-8f6561672b23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80",
          "https://images.unsplash.com/photo-1453365607868-7deed8cc7d26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1596278852720-141ba859bbbf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
        ],
        "tagline": "Loyal and loving",
        "description": "Imagine walking to the same place every day, to meet your best friend. Imagine watching hundreds of people pass by every morning and every afternoon. Imagine waiting, and waiting, and waiting. For ten years. This is what Lee did. Lee lived in Tokyo. He faithfully waited for his owner at the Shibuya train station long after his owner could not come to meet him. He became famous for his loyalty and was adored by scores of people who passed through the station every day. He eventually came to NYC and waiting to meet his next loyal human companion.",
        "breed": [
          "Shiba Inu"
        ],
        "weight": 27,
        "goodWithDogs": true,
        "goodWithKids": true,
        "houseTrained": true,
        "vaccinated": true,
        "sex": "Male",
        "fixed": true,
        "color": "Light Red-Brown"
      }, {
        "name": "Dave",
        "location": "Cumberland County Animal Rescue",
        "age": "7 years old",
        "photo": [
          "https://images.unsplash.com/photo-1605936635478-325b076414a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
          "https://images.unsplash.com/flagged/photo-1564754808205-ad6b1efed4af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
          "https://images.unsplash.com/photo-1575655971365-f58cfec52f35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          "https://images.unsplash.com/photo-1605936596116-eac7c9d1152c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
          "https://images.unsplash.com/photo-1587169544749-cfcba642be77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        ],
        "tagline": "Looking for his new mission",
        "description": "Dave served aboard a Norwegian minesweeper during the 2010’s. Despite his cute and cuddly appearance—Dave means “cuddly bear in brute winter” in Norwegian—he’s extremely tough. Dave was originally brought on board by the ship’s captain. When the captain tried to take Dave with him when leaving for another posting, the crew, who had grown fond of the dog, threatened to leave the ship if he was taken away. They loved the dog so much that they would have mutinied rather than lose him.",
        "breed": [
          "Boston Terrier"
        ],
        "weight": 14,
        "goodWithDogs": true,
        "goodWithKids": true,
        "houseTrained": true,
        "vaccinated": true,
        "sex": "Male",
        "fixed": true,
        "color": "Black and White"
      }, {
        "name": "Lemon",
        "location": "Cumberland County Animal Rescue",
        "age": "6 years old",
        "photo": [
          "https://images.unsplash.com/photo-1615919997258-e9719d98c94c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1107&q=80",
          "https://images.unsplash.com/photo-1562329203-b3f47596889e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=912&q=80",
          "https://images.unsplash.com/photo-1615920016752-b6cfda2ead6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1625&q=80",
          "https://images.unsplash.com/photo-1592099036415-1618f56672be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80",
          "https://images.unsplash.com/photo-1616864098334-367abd2abed4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1632&q=80"
        ],
        "tagline": "Taco loving best friend",
        "description": "Lemon really likes to go for walks. She has a preference for mailboxes over fire hydrants.  She loves to smell things and eat breakfast cereal.  She was found wandering Queens, where she was a regular at a local Birria taco truck. While she does love tacos, Lemon will settle for dry food.",
        "breed": [
          "Golden Doodle"
        ],
        "weight": 42,
        "goodWithDogs": true,
        "goodWithKids": true,
        "houseTrained": true,
        "vaccinated": true,
        "sex": "Female",
        "fixed": true,
        "color": "Golden Blonde"
      }, {
        "name": "Emerald",
        "location": "Making A Difference Rescue",
        "age": "7 months old",
        "photo": [
          "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/52000128/1/?bust=1632251075&width=720",
          "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/52000128/2/?bust=1632251075&width=720",
          "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/52000128/3/?bust=1632251076&width=720",
          "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/52000128/4/?bust=1632251077&width=720"
        ],
        "tagline": "Water lover",
        "description": "Emerald is so quick to learn and was one of the biggest of her litter. She is very sweet and loving, she even loves water now! She loves helping kids relax at her Montessori school. She's working on her recall and loves other dogs. We are not sure how she will do with cats. She is ready for her forever home! Everyone needs a virtual learning buddy! Back to school can be a stressful time, especially in this brave new world of e-learning. Studies show that petting a dog can reduce stress and help increase focus. Emerald here is the perfect companion for your small human! Soft and snuggly, she loves nothing more than to curl up next to your child, providing moral support during video time and keeping their feet warm while they plug away at writing sentences or during live classes. And she's always up for a game of tag or running zoomies during break time! UTD on shots, fixed and (nearly) potty trained Emmie gets along great with other doggos and ADORES the littles.",
        "breed": [
          "Mixed Breed"
        ],
        "weight": 27,
        "goodWithDogs": true,
        "goodWithKids": true,
        "houseTrained": true,
        "vaccinated": true,
        "sex": "Female",
        "fixed": true,
        "color": "Brown, Black, and White"
      }, {
        "name": "Shandy",
        "location": "Making A Difference Rescue",
        "age": "4 years old",
        "photo": [
          "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/52879139/1/?bust=1630781625&width=720",
          "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/52879139/2/?bust=1630781626&width=720",
          "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/52879139/3/?bust=1630781627&width=720",
          "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/52879139/4/?bust=1630781628&width=720"
        ],
        "tagline": "Smart and playful",
        "description": "Shandy is such a gentle soul. She is a tall, lean and lanky girl who loves snuggly blankets, taking walks and playing with friends. Shandy has been around other dogs of all sizes, and does well with everyone. She knows to be gentle with the tiny humans, and loves to play with children. This girl is sugar sweet and so well behaved. She is house and crate trained, walks well on a leash, and knows basic commands.",
        "breed": [
          "Lab"
        ],
        "weight": 44,
        "goodWithDogs": true,
        "goodWithKids": true,
        "houseTrained": true,
        "vaccinated": true,
        "sex": "Female",
        "fixed": true,
        "color": "Black"
      }
    ]);

    console.log(dogs)
  
    process.exit();

})();