export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "top-10-smart-gadgets-2025",
    title: "Top 10 Smart Gadgets That Will Change Your Life in 2025",
    excerpt: "Discover the latest tech innovations that are revolutionizing how we live, work, and play in the modern world.",
    content: `
      <p>The world of technology is evolving at an unprecedented pace, and 2025 is shaping up to be a landmark year for innovation. From AI-powered assistants to revolutionary smart home devices, here are the top 10 gadgets that will transform your daily life.</p>
      
      <h2>1. AI-Powered Smart Glasses</h2>
      <p>These aren't your ordinary sunglasses. The latest smart glasses feature augmented reality displays, real-time translation, and hands-free navigation. Perfect for travelers and tech enthusiasts alike.</p>
      
      <h2>2. Next-Gen Wireless Earbuds</h2>
      <p>With adaptive noise cancellation, health monitoring sensors, and 48-hour battery life, these earbuds are more than just audio devices—they're your personal health assistant.</p>
      
      <h2>3. Smart Home Hub 2.0</h2>
      <p>The latest smart home hubs integrate all your devices seamlessly, learn your habits, and optimize energy usage automatically. Save money while living smarter.</p>
      
      <h2>4. Portable Solar Charger Pro</h2>
      <p>Never run out of battery again. This compact solar charger can power multiple devices simultaneously and is perfect for outdoor adventures or emergency situations.</p>
      
      <h2>5. AI Fitness Mirror</h2>
      <p>Transform your home into a personal gym with this interactive mirror that provides real-time form corrections, personalized workout plans, and virtual training sessions.</p>
      
      <p>Technology continues to make our lives more convenient, efficient, and enjoyable. These gadgets represent the cutting edge of innovation, and they're available now at NovaMart.</p>
    `,
    image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800&q=80",
    author: "Sarah Johnson",
    date: "2025-01-15",
    readTime: "8 min read",
    category: "Technology",
  },
  {
    id: "2",
    slug: "how-to-choose-running-shoes",
    title: "How to Choose the Perfect Running Shoes for Your Feet",
    excerpt: "A comprehensive guide to finding running shoes that match your gait, terrain, and fitness goals.",
    content: `
      <p>Choosing the right running shoes can make the difference between an enjoyable run and potential injury. With so many options available, it's important to understand what features matter most for your specific needs.</p>
      
      <h2>Understanding Your Foot Type</h2>
      <p>The first step in selecting the perfect running shoe is understanding your foot type. Are you a pronator, supinator, or do you have neutral feet? Visit a specialty running store for a gait analysis to find out.</p>
      
      <h2>Consider Your Running Surface</h2>
      <p>Road runners need different shoes than trail runners. Road shoes offer more cushioning and lighter weight, while trail shoes provide enhanced grip and protection from rocks and roots.</p>
      
      <h2>Cushioning vs. Responsiveness</h2>
      <p>Maximum cushioning shoes are great for long distances and recovery runs, but they can feel sluggish for speed work. Racing flats offer minimal cushioning but maximum responsiveness.</p>
      
      <h2>The Importance of Proper Fit</h2>
      <p>Always try on running shoes in the afternoon when your feet are slightly swollen, mimicking how they'll feel during a run. Leave about a thumb's width between your longest toe and the shoe's end.</p>
      
      <h2>When to Replace Your Shoes</h2>
      <p>Most running shoes last 300-500 miles. Track your mileage and watch for signs of wear like compressed midsoles or worn treads. Rotating between two pairs can extend their lifespan.</p>
      
      <p>Investing in the right running shoes is investing in your health and performance. Browse our curated selection of premium running shoes at NovaMart today.</p>
    `,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    author: "Michael Chen",
    date: "2025-01-10",
    readTime: "6 min read",
    category: "Fitness",
  },
  {
    id: "3",
    slug: "sustainable-fashion-guide",
    title: "The Ultimate Guide to Sustainable Fashion in 2025",
    excerpt: "Learn how to build an eco-friendly wardrobe without sacrificing style or breaking the bank.",
    content: `
      <p>Sustainable fashion is no longer just a trend—it's a movement. As consumers become more conscious of their environmental impact, the fashion industry is responding with innovative, eco-friendly solutions.</p>
      
      <h2>What Makes Fashion Sustainable?</h2>
      <p>Sustainable fashion considers the entire lifecycle of a garment, from material sourcing to production methods, durability, and end-of-life disposal. It prioritizes ethical labor practices and minimal environmental impact.</p>
      
      <h2>Quality Over Quantity</h2>
      <p>Invest in well-made pieces that will last for years rather than trendy items that fall apart after a few washes. This approach saves money in the long run and reduces waste.</p>
      
      <h2>Natural and Recycled Materials</h2>
      <p>Look for clothing made from organic cotton, bamboo, hemp, or recycled materials. These fabrics have a lower environmental footprint than conventional textiles.</p>
      
      <h2>Care and Repair</h2>
      <p>Extend the life of your clothes by washing them less frequently, air drying, and learning basic repair skills. A small investment in garment care pays dividends.</p>
      
      <h2>Second-Hand Shopping</h2>
      <p>Thrift stores and vintage shops are treasure troves of unique, affordable pieces. Buying pre-owned clothing is one of the most sustainable fashion choices you can make.</p>
      
      <p>Building a sustainable wardrobe is a journey, not a destination. Start with small changes and gradually transform your approach to fashion. Explore our eco-friendly collection at NovaMart.</p>
    `,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800&q=80",
    author: "Emma Rodriguez",
    date: "2025-01-05",
    readTime: "7 min read",
    category: "Fashion",
  },
  {
    id: "4",
    slug: "work-from-home-productivity-tips",
    title: "10 Productivity Tips for Remote Workers in 2025",
    excerpt: "Master the art of working from home with these proven strategies for focus, efficiency, and work-life balance.",
    content: `
      <p>Remote work has become the new normal for millions of professionals worldwide. While working from home offers flexibility, it also presents unique challenges. Here are 10 tips to maximize your productivity.</p>
      
      <h2>1. Create a Dedicated Workspace</h2>
      <p>Designate a specific area for work, even if it's just a corner of a room. This physical separation helps create mental boundaries between work and personal life.</p>
      
      <h2>2. Establish a Morning Routine</h2>
      <p>Start your day with consistent rituals that signal it's time to work. This might include exercise, meditation, or simply getting dressed as if you're going to an office.</p>
      
      <h2>3. Invest in Quality Equipment</h2>
      <p>An ergonomic chair, proper desk height, and good lighting can significantly impact your comfort and productivity throughout the day.</p>
      
      <h2>4. Use the Pomodoro Technique</h2>
      <p>Work in focused 25-minute sprints followed by 5-minute breaks. This method helps maintain concentration and prevents burnout.</p>
      
      <h2>5. Set Clear Boundaries</h2>
      <p>Communicate your work hours to family and roommates. Use "do not disturb" modes on devices during focused work periods.</p>
      
      <h2>6. Take Regular Breaks</h2>
      <p>Step away from your screen every hour. Stretch, walk around, or practice the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds.</p>
      
      <h2>7. Maintain Social Connections</h2>
      <p>Schedule virtual coffee chats with colleagues or join online communities related to your field. Combat isolation by staying connected.</p>
      
      <h2>8. End Your Workday Deliberately</h2>
      <p>Create a shutdown ritual that signals the end of your workday. This might include reviewing tomorrow's tasks, tidying your workspace, or a brief walk.</p>
      
      <p>Working from home successfully requires intention and discipline. With these strategies, you can create a productive and balanced remote work experience.</p>
    `,
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    author: "David Park",
    date: "2024-12-28",
    readTime: "9 min read",
    category: "Lifestyle",
  },
  {
    id: "5",
    slug: "smart-home-security-guide",
    title: "Complete Guide to Smart Home Security Systems",
    excerpt: "Everything you need to know about protecting your home with modern technology and smart devices.",
    content: `
      <p>Home security has evolved dramatically in recent years. Today's smart security systems offer convenience, remote monitoring, and peace of mind. Here's how to choose and implement the right system for your home.</p>
      
      <h2>Core Components of Smart Security</h2>
      <p>A comprehensive smart security system typically includes cameras, door/window sensors, motion detectors, smart locks, and a central hub. Each component works together to create multiple layers of protection.</p>
      
      <h2>Indoor vs. Outdoor Cameras</h2>
      <p>Indoor cameras help monitor your home's interior and can double as pet cams or baby monitors. Outdoor cameras deter intruders and provide evidence if incidents occur. Look for weather-resistant models with night vision.</p>
      
      <h2>Smart Locks and Access Control</h2>
      <p>Smart locks eliminate the need for physical keys and allow you to grant temporary access to guests or service providers. Features like auto-lock and integration with other smart devices enhance security.</p>
      
      <h2>Motion Sensors and Alerts</h2>
      <p>Modern motion sensors can distinguish between pets, people, and vehicles, reducing false alarms. Receive instant notifications on your smartphone when unexpected activity is detected.</p>
      
      <h2>Integration with Smart Home Systems</h2>
      <p>The best security systems integrate seamlessly with other smart home devices. Lights can turn on when motion is detected, doors can lock automatically at bedtime, and cameras can activate when you leave home.</p>
      
      <h2>Cloud Storage vs. Local Storage</h2>
      <p>Consider how you want to store security footage. Cloud storage offers remote access and protection from physical theft, while local storage provides privacy and no ongoing fees.</p>
      
      <h2>Professional Monitoring Options</h2>
      <p>Some systems offer 24/7 professional monitoring services. While they come with monthly fees, they provide an extra layer of security when you can't monitor alerts yourself.</p>
      
      <p>Investing in a smart home security system is investing in peace of mind. Browse our selection of top-rated security devices at NovaMart to find the perfect solution for your home.</p>
    `,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
    author: "Jessica Taylor",
    date: "2024-12-20",
    readTime: "10 min read",
    category: "Technology",
  },
];
