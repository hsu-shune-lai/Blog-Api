import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

//blog data
const blogsData = [
  {
    id: 1,
    title: "The Ancient Temples of Bagan",
    content:
      "Bagan, an ancient city in Myanmar, is home to over 2,000 temples and pagodas. This article explores the rich history and architectural beauty of this UNESCO World Heritage site.",
    category: "History",
    image: "https://example.com/images/bagan.jpg",
    author: "John Smith",
    date: "2023-03-15",
  },
  {
    id: 2,
    title: "The Last Royal Capital: Mandalay",
    content:
      "Mandalay was the last royal capital of Myanmar before British colonization. Discover the historical significance and cultural heritage of this city.",
    category: "History",
    image: "https://example.com/images/mandalay.jpg",
    author: "Jane Doe",
    date: "2023-04-10",
  },
  {
    id: 3,
    title: "Inle Lake: A Cultural and Natural Gem",
    content:
      "Inle Lake is famous for its floating villages, unique fishing techniques, and stunning landscapes. This guide provides an overview of the natural beauty and cultural experiences around the lake.",
    category: "Nature",
    image: "https://example.com/images/inle-lake.jpg",
    author: "Alice Johnson",
    date: "2023-05-05",
  },
  {
    id: 4,
    title: "Exploring the Golden Land: Yangon",
    content:
      "Yangon, the largest city in Myanmar, is known for its colonial architecture and the iconic Shwedagon Pagoda. Learn about the must-visit spots and the city's vibrant atmosphere.",
    category: "Travel",
    image: "https://example.com/images/yangon.jpg",
    author: "Michael Brown",
    date: "2023-06-01",
  },
  {
    id: 5,
    title: "The Colonial History of Myanmar",
    content:
      "Myanmar's colonial history under British rule has left a lasting impact on the country's culture and architecture. This article delves into the historical events and their effects on modern Myanmar.",
    category: "History",
    image: "https://example.com/images/colonial-myanmar.jpg",
    author: "Emily White",
    date: "2023-07-18",
  },
  {
    id: 6,
    title: "The Mystical Caves of Hpa-An",
    content:
      "Hpa-An is known for its stunning limestone caves and scenic landscapes. This travel guide covers the best caves to explore and the natural beauty of the region.",
    category: "Travel",
    image: "https://example.com/images/hpa-an.jpg",
    author: "David Green",
    date: "2023-08-22",
  },
  {
    id: 7,
    title: "The Wildlife of the Irrawaddy Delta",
    content:
      "The Irrawaddy Delta is a rich ecosystem teeming with diverse wildlife. Discover the flora and fauna of this unique region and the conservation efforts to protect it.",
    category: "Nature",
    image: "https://example.com/images/irrawaddy-delta.jpg",
    author: "Laura Black",
    date: "2023-09-14",
  },
  {
    id: 8,
    title: "Mount Popa: The Abode of Spirits",
    content:
      "Mount Popa is considered the spiritual home of Myanmar's 37 nats (spirits). This article explores the mountain's religious significance and natural beauty.",
    category: "History",
    image: "https://example.com/images/mount-popa.jpg",
    author: "Chris Davis",
    date: "2023-10-02",
  },
  {
    id: 9,
    title: "A Journey Through the Chindwin River",
    content:
      "The Chindwin River offers a picturesque journey through Myanmar's heartland. This travelogue covers the river's scenic routes and the cultural experiences along the way.",
    category: "Travel",
    image: "https://example.com/images/chindwin-river.jpg",
    author: "Anna Taylor",
    date: "2023-11-07",
  },
  {
    id: 10,
    title: "The Natural Beauty of Ngapali Beach",
    content:
      "Ngapali Beach is Myanmar's premier beach destination, known for its pristine white sand and crystal-clear waters. Learn about the best activities and places to stay in this coastal paradise.",
    category: "Nature",
    image: "https://example.com/images/ngapali-beach.jpg",
    author: "James Wilson",
    date: "2023-12-15",
  },
  {
    id: 11,
    title: "The Significance of the Bogyoke Aung San Market",
    content:
      "Bogyoke Aung San Market is a historical and cultural landmark in Yangon, offering a glimpse into Myanmar's rich heritage. Explore its history and the variety of goods sold here.",
    category: "History",
    image: "https://example.com/images/bogyoke-market.jpg",
    author: "Sarah Harris",
    date: "2024-01-12",
  },
  {
    id: 12,
    title: "Exploring the Mergui Archipelago",
    content:
      "The Mergui Archipelago is a pristine collection of islands in the Andaman Sea. Discover the untouched beaches, crystal-clear waters, and diverse marine life.",
    category: "Nature",
    image: "https://example.com/images/mergui-archipelago.jpg",
    author: "Paul Walker",
    date: "2024-02-05",
  },
  {
    id: 13,
    title: "The Cultural Riches of the Shan State",
    content:
      "Shan State is a culturally diverse region in Myanmar. This article explores the unique traditions, languages, and history of the Shan people.",
    category: "History",
    image: "https://example.com/images/shan-state.jpg",
    author: "Rachel Lee",
    date: "2024-03-03",
  },
  {
    id: 14,
    title: "The Historical Significance of the Mandalay Palace",
    content:
      "Mandalay Palace was the last royal palace of the Burmese monarchy. Learn about its historical importance and the events that shaped its legacy.",
    category: "History",
    image: "https://example.com/images/mandalay-palace.jpg",
    author: "Mark Thompson",
    date: "2024-04-10",
  },
  {
    id: 15,
    title: "Exploring the Chin State: A Hidden Gem",
    content:
      "Chin State is a remote and rugged region known for its natural beauty and rich cultural heritage. This guide highlights the must-see spots and unique traditions of the Chin people.",
    category: "Travel",
    image: "https://example.com/images/chin-state.jpg",
    author: "Karen Clark",
    date: "2024-05-18",
  },
  {
    id: 16,
    title: "The Sacred Golden Rock Pagoda",
    content:
      "The Golden Rock Pagoda, or Kyaiktiyo Pagoda, is a revered Buddhist pilgrimage site. Discover the legends and spiritual significance of this unique balancing rock.",
    category: "History",
    image: "https://example.com/images/golden-rock.jpg",
    author: "Tom King",
    date: "2024-06-22",
  },
  {
    id: 17,
    title: "The Diverse Ecosystem of the Tanintharyi Region",
    content:
      "The Tanintharyi Region is home to a rich and diverse ecosystem. Learn about the unique species and conservation efforts in this part of Myanmar.",
    category: "Nature",
    image: "https://example.com/images/tanintharyi.jpg",
    author: "Sophia Turner",
    date: "2024-07-14",
  },
  {
    id: 18,
    title: "A Guide to Trekking in Kalaw",
    content:
      "Kalaw is a popular destination for trekking and exploring the beautiful landscapes of Myanmar. This guide covers the best trekking routes and tips for adventurers.",
    category: "Travel",
    image: "https://example.com/images/kalaw.jpg",
    author: "Nick Johnson",
    date: "2024-08-10",
  },
  {
    id: 19,
    title: "The Cultural Significance of the Intha People",
    content:
      "The Intha people, known for their unique leg-rowing technique, live around Inle Lake. Explore their way of life, traditions, and the challenges they face.",
    category: "History",
    image: "https://example.com/images/intha-people.jpg",
    author: "Emma Watson",
    date: "2024-09-05",
  },
  {
    id: 20,
    title: "Discovering the Natural Beauty of Putao",
    content:
      "Putao, located in the far north of Myanmar, is a paradise for nature lovers. This remote area offers breathtaking views, lush forests, and diverse wildlife.",
    category: "Nature",
    image: "https://example.com/images/putao.jpg",
    author: "William Davis",
    date: "2024-10-01",
  },
];
app.use(cors()); 
// Middleware to parse JSON
app.use(express.json());

// GET endpoint to fetch all blog posts
app.get("/blogs", (req, res) => {
  res.json(blogsData);
});

// GET endpoint to fetch a single blog post by ID
app.get("/blogs/:id", (req, res) => {
  const blogId = parseInt(req.params.id, 10);
  const blog = blogsData.find((blog) => blog.id === blogId);
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ message: "Blog post not found" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
