const { NextResponse } = require("next/server");

export async function GET() {
  const data = {
    hero: {
      headline: "Discover Our App",
      subheadline: "The best app for all your needs.",
      ctaButtons: [
        {
          text: "Download Now",
          link: "/download",
        },
        {
          text: "Learn More",
          link: "#features",
        },
      ],
    },
    features: [
      {
        title: "budgeting intervals",
        description:
          "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
        icon: "fa-solid fa-cube",
      },
      {
        title: "budgeting intervals",
        description:
          "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
        icon: "fa-regular fa-star",
      },
      {
        title: "budgeting intervals",
        description:
          "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
        icon: "fa-solid fa-stroopwafel",
      },
    ],
    testimonials: [
      {
        name: "User One",
        feedback: "This app is fantastic! It has changed my life.",
        avatar: "fa-solid fa-cube",
      },
      {
        name: "User Two",
        feedback: "I can't imagine my daily routine without this app.",
        avatar: "fa-solid fa-cube",
      },
    ],
    pricing: [
      {
        plan: "Basic",
        price: "$9.99/month",
        features: ["Feature A", "Feature B", "Feature C"],
      },
      {
        plan: "Premium",
        price: "$19.99/month",
        features: ["Feature A", "Feature B", "Feature C", "Feature D"],
      },
    ],
    faq: [
      {
        question: "lorem ipsum dolor sit amet, consectetur",
        answer:
          "Lorem ipsum dolor sit amet, consectetur dolor sit amet, consectetur",
      },
      {
        question: "lorem ipsum dolor sit amet, consectetur",
        answer:
          "Lorem ipsum dolor sit amet, consectetur dolor sit amet, consectetur",
      },
      {
        question: "lorem ipsum dolor sit amet, consectetur",
        answer:
          "Lorem ipsum dolor sit amet, consectetur dolor sit amet, consectetur",
      },
      {
        question: "lorem ipsum dolor sit amet, consectetur",
        answer:
          "Lorem ipsum dolor sit amet, consectetur dolor sit amet, consectetur",
      },
      {
        question: "lorem ipsum dolor sit amet, consectetur",
        answer:
          "Lorem ipsum dolor sit amet, consectetur dolor sit amet, consectetur",
      },
      {
        question: "lorem ipsum dolor sit amet, consectetur",
        answer:
          "Lorem ipsum dolor sit amet, consectetur dolor sit amet, consectetur",
      },
    ],
  };
  try {
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      { message: "error occur", error: error },
      { status: 500 }
    );
  }
}
