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
    id: 4,
    title: "American Express Dashboard ",
    description:
      "Unlock professional financial analytics with this American Express Power BI Dashboard.",
    image: "/Aexpress2.png",
    carouselImages: ["/Aexpress2.png", "/AEEEEE.png"],
    heroImage: "/amex-hero.png",
    price: "₹199",
    fakePrice: "₹2799",
    category: "Templates",
    rating: {
      value: 4.8,
      count: 50,
    },
    highlights: [
      "Extracted Financial Dataset",
      "Fully Built Power BI Dashboard (PBIX File)",
      "Interactive Filters & Visuals",
      "Income, Expenses & Savings KPIs",
      "Step-by-Step Tutorial Video",
      "High-Quality Icons & Professional Themes",
      "Personal Assistance",
    ],
    longDescription: `
      <div>
        <p><strong>🚀 Unlock Professional Financial Analytics with This American Express Power BI Dashboard!</strong></p>
        <p>Looking to level up your data analysis skills and make your resume stand out?</p>
        <p>This <strong>American Express Financial Dashboard</strong> is the perfect real-world Power BI project to show recruiters your true potential.</p>
        <p>With beautiful UI/UX, dynamic filters, and deep financial insights, this dashboard gives a complete view of income, expenses, savings, and card usage—designed just like a professional fintech analytics solution.</p>
        <h3>📦 What's Inside:</h3>
        <ul>
          <li><strong>Extracted Financial Dataset</strong> – Clean, structured data that's ready for analysis.</li>
          <li><strong>Fully Built Power BI Dashboard (PBIX File)</strong> – Modern dark UI, premium design, and real-world KPIs.</li>
          <li><strong>Interactive Filters & Visuals</strong> – Understand trends across months, monitor card usage, and analyze transactions with ease.</li>
          <li><strong>Income, Expenses & Savings KPIs</strong> – Professionally designed cards to showcase high-impact metrics.</li>
          <li><strong>Financial Statistics Dashboard</strong> – Monthly income vs. amount used with detailed bar and line charts.</li>
          <li><strong>Transactions Overview</strong> – Clean layout showing merchants, amounts, and payment status.</li>
          <li><strong>Step-by-Step Tutorial Video</strong> – Learn exactly how the entire dashboard was built from scratch.</li>
          <li><strong>High-Quality Icons & Professional Themes</strong> – Enhance the aesthetics and make your portfolio shine.</li>
          <li><strong>Personal Assistance</strong> – Reach out anytime if you need guidance setting up or customizing your dashboard.</li>
        </ul>
        <h3>⭐ Why You Need This Project:</h3>
        <ul>
          <li>Build a real-world finance domain project for your Power BI portfolio</li>
          <li>Show recruiters your ability to analyze and visualize complex financial data</li>
          <li>Learn hands-on skills that AI tools cannot replace</li>
          <li>Perfect for students, job seekers, and professionals entering the analytics field</li>
          <li>Boost your resume with an eye-catching project that stands out in interviews</li>
        </ul>
        <p><strong>🛒 Start Your Data Journey Today!</strong></p>
        <p>Get instant access — the complete project file will be sent directly to your email as soon as you purchase.</p>
        <p><strong>Buy now and download your American Express Power BI Dashboard today!</strong></p>
      </div>
    `,
    purchaseLink: "https://rzp.io/rzp/JLfoiKh",
  },
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
    carouselImages: ["/netflix.png"],
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
    carouselImages: ["/airbnb.png"],
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
  {
    id: 5,
    title: "Royal Enfield Sales Dashboard",
    description:
      "Unlock powerful automotive sales analytics with this complete Power BI project.",
    image: "/royal enfield/royal enfield .png",
    carouselImages: [
      "/royal enfield/royal enfield .png",
      "/royal enfield/2.png",
      "/royal enfield/3.png",
      "/royal enfield/4.png",
      "/royal enfield/5.png",
      "/royal enfield/6.png",
      "/royal enfield/7.png",
      "/royal enfield/8.png",
      "/royal enfield/9.png",
    ],
    heroImage: "/royal enfield/royal enfield hero.png",
    price: "₹299",
    fakePrice: "₹2999",
    category: "Templates",
    rating: {
      value: 4.8,
      count: 24,
    },
    highlights: [
      "Extracted Royal Enfield Sales Dataset",
      "Fully Built Power BI Dashboard (PBIX File)",
      "Model-Wise Sales Analysis",
      "Sales KPIs – Total Revenue, Units Sold",
      "Country-Wise Sales Dashboard",
      "Year-Wise Sales Trend Dashboard",
      "Interactive Filters & Dynamic Visuals",
      "Step-by-Step Power BI Tutorial Video",
      "All Images, Icons & Design Assets Used",
      "Professional Layout & Design Techniques",
      "Personal Assistance",
    ],
    longDescription: `
      <div>
        <p><strong>📈 Project Highlights – Real-World Sales Analytics in Power BI</strong></p>
        <p>This Power BI sales dashboard project simulates a real automotive analytics use case.</p>
        <h3>You’ll learn how to:</h3>
        <ul>
            <li>Create executive-level KPI cards in Power BI</li>
            <li>Perform model-wise performance comparison</li>
            <li>Build a country-wise sales analysis dashboard</li>
            <li>Apply conditional formatting and visual hierarchy</li>
            <li>Design interactive filters and slicers</li>
            <li>Create professional sales trend visualizations</li>
            <li>Structure a portfolio-ready Power BI dashboard</li>
        </ul>
        <h3>This project is ideal for:</h3>
        <ul>
            <li>Power BI beginners to intermediate learners</li>
            <li>Data analyst portfolio preparation</li>
            <li>Power BI interview project practice</li>
            <li>Students building real-world analytics experience</li>
            <li>Professionals transitioning into data analytics</li>
        </ul>
        <h3>🎯 Why This Power BI Dashboard Project Stands Out</h3>
        <p>Unlike basic sample dashboards, this project includes:</p>
        <ul>
            <li>Multiple model-level dashboards</li>
            <li>Realistic sales KPIs and business insights</li>
            <li>Professional UI/UX layout</li>
            <li>Clean storytelling structure</li>
            <li>Industry-style dashboard formatting</li>
        </ul>
        <p>This is not just a tutorial — it’s a complete Power BI portfolio project.</p>
        <h3>📦 Instant Access</h3>
        <p>Once you complete your purchase, you’ll receive:</p>
        <ul>
            <li>The complete Power BI tutorial video</li>
            <li>The fully built PBIX file</li>
            <li>The dataset used in the project</li>
            <li>All icons, images, and design resources</li>
        </ul>
        <p>Everything will be delivered directly to your email so you can start building immediately.</p>
        <h3>📊 What You Will Get</h3>
        <ul>
            <li>Extracted Royal Enfield Sales Dataset (Clean & Structured)</li>
            <li>Fully Built Power BI Dashboard (PBIX File)</li>
            <li>Model-Wise Sales Analysis (Classic 350, Meteor 350, Hunter 350, Interceptor 650, Continental GT 650, Bullet 350, Himalayan 411)</li>
            <li>Sales KPIs – Total Revenue, Units Sold, Customer Ratings</li>
            <li>Country-Wise Sales Dashboard (Top Markets Analysis)</li>
            <li>Year-Wise Sales Trend Dashboard (Line & Area Charts)</li>
            <li>Interactive Filters & Dynamic Visuals</li>
            <li>Step-by-Step Power BI Tutorial Video</li>
            <li>All Images, Icons & Design Assets Used</li>
            <li>Professional Layout, Theme & Dashboard Design Techniques</li>
            <li>Personal Assistance</li>
        </ul>
      </div>
    `,
    purchaseLink: "https://rzp.io/rzp/WljRxHDl",
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
  {
    title: "Royal Enfield Sales Dashboard",
    description: "Unlock powerful automotive sales analytics.",
    image: "/royal enfield/royal enfield .png",
    link: "/products/5",
  },
];
