export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  carouselImages: string[];
  heroImage: string;
  price: string;
  fakePrice: string;
  category: string;
  highlights: string[];
  rating: {
    value: number;
    count: number;
  };
  longDescription: string;
  purchaseLink: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Car Sales Dashboard",
    description: "Monitor your Car Sales with our Dashboard Template.",
    image: "/car/car.png",
    carouselImages: ["/car/1.png", "/car/2.png", "/car/3.png", "/car/4.png"],
    heroImage: "/car/car-hero.png",
    price: "₹199",
    fakePrice: "₹2799",
    category: "Templates",
    rating: {
      value: 4.9,
      count: 69,
    },
    highlights: [
      "Step-by-step video tutorial",
      "Interactive Power BI Dashboard",
      "Fuel type & model filters",
      "Dynamic brand selector",
      "High-quality visuals & icons",
      "Clean, ready-to-use dataset",
    ],
    longDescription: `
      <div class="">
        <p><strong>Unlock the Power of Data Analysis with this Car Sales Power BI Dashboard!</strong></p>
        <p>Are you looking to enhance your <strong>data analysis skills</strong> and stand out to recruiters? This <strong>Car Sales Power BI Dashboard</strong> is the perfect project to showcase your abilities. With beautiful visualizations and in-depth insights on top automobile brands like <strong>BMW, Audi, Ford, Skoda</strong>, <strong>Toyota</strong> and more, this dynamic dashboard offers a complete overview of car sales data.</p>
        <h3>What's Inside:</h3>
        <ul>
          <li><strong>Extracted Data Set</strong></li>
          <li><strong>Fully built Power BI Dashboard</strong> file</li>
          <li><strong>Interactive filters</strong> for fuel type, model, transmission, and year, giving you detailed insights in just a few clicks.</li>
          <li>A <strong>brand selector</strong> with car logos that instantly displays relevant sales data, making your dashboard visually appealing and dynamic.</li>
          <li><strong>High-quality images</strong> and icons to enhance the look and feel of your dashboard.</li>
          <li><strong>Clean, structured datasets</strong> ready for analysis.</li>
          <li>A <strong>step-by-step video tutorial</strong> to guide you through building this project.</li>
          <li><strong>Personal assistance</strong> if you need help during the setup!</li>
        </ul>
        <h3>Why You Need This:</h3>
        <ul>
          <li><strong>Boost your resume</strong> with a unique data analysis project.</li>
          <li><strong>Learn Power BI</strong> through hands-on experience.</li>
          <li>Impress recruiters with your ability to visualize and analyze real-world data.</li>
          <li><strong>Perfect for students and professionals</strong> looking to break into the IT or data analysis industry.</li>
        </ul>
        <p>Take the next step in your data journey and create a dashboard that truly stands out!</p>
        <p><strong>Get started today – Buy this Dashboard now and grab your Car Sales Power BI Dashboard now!</strong></p>
      </div>
    `,
    purchaseLink: "https://rzp.io/rzp/3mmQ9kgG",
  },
  {
    id: 2,
    title: "Netflix Dashboard",
    description:
      "Ratings, Genres, Shows by Country & Year, and much more in a single Dashboard.",
    image: "/netflix.png",
    carouselImages: ["/netflix.png",],
    heroImage: "/netflix-hero.png",
    price: "₹99",
    fakePrice: "₹2799",
    category: "Fonts",
    rating: {
      value: 4.9,
      count: 42,
    },
    highlights: [
      "Step-by-step tutorial",
      "Ready-to-use Power BI files",
      "Curated datasets included",
      "Customizable analysis options",
      "Genre & country filters",
      "Logos for personalization",
    ],
    longDescription: `
      <div>
        <p><strong>Analyze Netflix Data Like Never Before!</strong></p>
        <p>Dive deep into Netflix trends with a <strong>ready-to-use Power BI dashboard</strong>. Understand ratings, genres, shows by country, and much more in a visually appealing format.</p>
        <h3>What You'll Get:</h3>
        <ul>
          <li>Fully interactive Power BI Dashboard</li>
          <li>Clean, curated datasets included</li>
          <li>Country & genre-based filters</li>
          <li>Logos for enhanced visual appeal</li>
          <li>Step-by-step tutorial video</li>
        </ul>
        <p><strong>Boost your analytics skills</strong> and showcase your expertise with this incredible project!</p>
      </div>
    `,
    purchaseLink: "https://rzp.io/rzp/GKDaqwJ",
  },
  {
    id: 3,
    title: "Airbnb Hotels Dashboard",
    description:
      "Monitor your Airbnb Hotel Bookings with our Dashboard Template.",
    image: "/airbnb.png",
    carouselImages: ["/airbnb.png",],
    heroImage: "/airbnb-hero.png",
    price: "₹149",
    fakePrice: "₹2799",
    category: "Fonts",
    rating: {
      value: 4.7,
      count: 35,
    },
    highlights: [
      "Step-by-step video guide",
      "Complete Airbnb dataset",
      "Interactive booking dashboard",
      "Customizable visuals & icons",
      "Ready-to-use resources",
      "Ideal for India-based analysis",
    ],
    longDescription: `
      <div>
        <p><strong>Track Airbnb Bookings Like a Pro!</strong></p>
        <p>Enhance your analytics skills with a <strong>complete Airbnb Hotels Dashboard</strong>. Analyze bookings, locations, and pricing with clean datasets and step-by-step guidance.</p>
        <h3>Features:</h3>
        <ul>
          <li>India-specific Airbnb dataset</li>
          <li>Fully developed Power BI dashboard</li>
          <li>Customizable visual assets</li>
          <li>Step-by-step video tutorial</li>
        </ul>
        <p><strong>Upgrade your resume</strong> and impress recruiters with this practical project!</p>
      </div>
    `,
    purchaseLink: "https://rzp.io/rzp/X3i7ce7",
  },
];

export const navigationProducts = [
  {
    title: "Car Sales Dashboard",
    description: "Monitor your Car Sales with our Dashboard Template.",
    image: "/car/car.png",
    link: "/products/1",
  },
  {
    title: "Netflix Dashboard",
    description: "Rating and Reviews Dashboard for Netflix.",
    image: "/netflix.png",
    link: "/products/2",
  },
];
