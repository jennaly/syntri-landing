import { MdOutlineMail } from "react-icons/md";

const BOOKING_LINK =
  "https://outlook.office.com/bookwithme/user/5f656b29b8954073994cc287e5d243df@syntri.us/meetingtype/TEeP5intjUqtiAVP05XOBg2?anonymous&ep=mlink";

const COMPANY_NAME = "Syntri";
const COMPANY_EMAIL = "info@syntri.us";
const COMPANY_PHONE_NUMBER = "(516) 329 9041";
const COPYRIGHT_YEAR = "2024";

const Copy = {
  Hero: {
    titleLine1: "Seamless IT,",
    titleLine2: "Modern Solutions",
    description:
      "We unlock your business potential by streamlining IT, letting you focus on what you do best. Our expert services amplify productivity and drive growth with innovative, reliable solutions.",
    OurValuesSection: {
      heading: "Our Values",
      values: [
        {
          imageUrl: "/assets/Value-Trust.png",
          imageWidth: 106,
          imageHeight: 100,
          imageAltText: "Illustration of a handshake",
          description: "Trust",
        },
        {
          imageUrl: "/assets/Value-Expertise.png",
          imageWidth: 103,
          imageHeight: 100,
          imageAltText: "Illustration of an employee and three stars above him",
          description: "Expertise",
        },
        {
          imageUrl: "/assets/Value-Innovation.png",
          imageWidth: 100,
          imageHeight: 100,
          imageAltText: "Illustration of a lightbulb",
          description: "Innovation",
        },
        {
          imageUrl: "/assets/Value-Collaboration.png",
          imageWidth: 100,
          imageHeight: 100,
          imageAltText: "Illustration of stacked hands in huddle",
          description: "Collaboration",
        },
      ],
    },
  },
  ServicesSection: {
    heading: "What We Deliver",
    description:
      "Enhance your business efficiency with our comprehensive suite of solutions, designed to streamline processes and drive productivity.",
    services: [
      {
        imageUrl: "/assets/Services-IT.png",
        imageWidth: 100,
        imageHeight: 100,
        imageAltText: "Illustration of a server",
        serviceTitle: "Managed IT Services",
        description:
          "Proactive maintenance and support, ensuring your systems run smoothly and securely.",
      },
      {
        imageUrl: "/assets/Services-Cybersecurity.png",
        imageWidth: 100,
        imageHeight: 100,
        imageAltText: "Illustration of a computer with bugs",
        serviceTitle: "Cybersecurity",
        description:
          "Protect your business from emerging threats with advanced security measures and proactive monitoring.",
      },
      {
        imageUrl: "/assets/Services-Data.png",
        imageWidth: 100,
        imageHeight: 100,
        imageAltText: "Illustration of data compliance",
        serviceTitle: "Data Compliance",
        description:
          "Ensure your business stays compliant with data regulations that adheres to industry standards.",
      },
      {
        imageUrl: "/assets/Services-Recovery.png",
        imageWidth: 100,
        imageHeight: 100,
        imageAltText: "Illustration of data recovery",
        serviceTitle: "Backup & Disaster Recovery",
        description:
          "Comprehensive backup and disaster recovery solutions which safeguard your data and ensure business continuity.",
      },
      {
        imageUrl: "/assets/Services-Cloud.png",
        imageWidth: 100,
        imageHeight: 100,
        imageAltText: "Illustration of cloud migrations",
        serviceTitle: "Cloud Migrations",
        description:
          "Embark on your cloud journey with a smooth, efficient transition.",
      },
      {
        imageUrl: "/assets/Services-VOIP.png",
        imageWidth: 100,
        imageHeight: 100,
        imageAltText: "Illustration of a smartphone",
        serviceTitle: "VOIP Solutions",
        description:
          "Optimize your organizations communication infrastructure for seamless connectivity and enhanced collaboration across your organization.",
      },
    ],
  },
  StatsSection: {
    heading: {
      titleLine1: "Prevent potential losses with",
      titleLine2: "effective IT management",
    },
    stats: [
      {
        prefix: "$",
        num: 4.5,
        decimals: 1,
        suffix: "M",
        subheading: "is how much a data breach costs on average",
      },
      {
        num: 60,
        suffix: "%",
        subheading:
          "of small businesses go out of business after a cyber attack.",
      },
      {
        num: 93,
        suffix: "%",
        subheading: "of data breaches are motivated by financial gain.",
      },
      {
        num: 95,
        suffix: "%",
        subheading: "of data breaches are due to human error.",
      },
    ],
  },
  OurStorySection: {
    heading: "Know Our Story",
    description: {
      paragraph1:
        "At Syntri, we pride ourselves on over a decade of extensive experience in the IT industry, serving businesses across the spectrum from small startups to large enterprises. With a deep understanding of the evolving technological landscape, we deliver tailored solutions that meet the unique needs of each client.",
      paragraph2:
        "Our journey through diverse sectors has equipped us with invaluable insights and expertise, enabling us to navigate challenges and maximize opportunities for our clients. As trusted advisors, we are committed to leveraging our wealth of experience to drive innovation, efficiency, and growth for businesses in today's dynamic digital era.",
    },
  },
  TestimonialsSection: {
    heading: "See What Clients Are Saying",
    description:
      "Explore the sentiments and experiences of our clients as they share their thoughts and satisfaction.",
    testimonials: [
      {
        imgUrl: "/assets/SamanthaG.png",
        imgWidth: 104,
        imgHeight: 104,
        clientName: "Samantha G",
        clientJobRole: "IT Project Manager",
        sentiment:
          "Working with Syntri on our MDM migration to Intune was exceptional. Their expertise and meticulous planning ensured a seamless transition, resulting in a resounding success!",
      },
      {
        imgUrl: "/assets/BenS.png",
        imgWidth: 104,
        imgHeight: 104,
        clientName: "Ben S",
        clientJobRole: "Accountant & Finance Manager",
        sentiment:
          "Our partnership with Syntri was a game-changer. Their deep understanding of the needs of our Audit teams’ needs greatly enhanced our efficiency and flexibility.",
      },
      {
        imgUrl: "/assets/LindseyC.png",
        imgWidth: 104,
        imgHeight: 104,
        clientName: "Lindsey C",
        clientJobRole: "Human Resources Manager",
        sentiment:
          "Syntri transformed our policy enforcement. As an HR manager, I struggled with employee compliance, but their expert solutions streamlined the process effortlessly.",
      },
    ],
  },
  ContactUsSection: {
    heading: "Contact Us",
    description:
      "Whether you have questions about our services, want to discuss your project in detail, or simply want to say hello, we're here to help.",
    waysToContact: [
      {
        method: "email",
        imgUrl: "/assets/Mail-Icon.png",
        imgWidth: 360,
        imgHeight: 360,
        text: COMPANY_EMAIL,
      },
      {
        method: "mobile",
        imgUrl: "/assets/Phone-Icon.png",
        imgWidth: 104,
        imgHeight: 104,
        text: COMPANY_PHONE_NUMBER,
      },
    ],
  },
  CTABanner: {
    heading:
      " Is your organization ready to elevate its business productivity with cutting-edge IT solutions and expert consulting services?",
    description:
      "Take the next step towards transforming your business productivity! Schedule a free consultation today to learn more.",
    buttonLabel: "Schedule a free consultation",
    buttonLink: BOOKING_LINK,
  },
  Nav: {
    CompanyName: COMPANY_NAME,
    buttonLabel: "Contact Us",
    buttonLink: BOOKING_LINK,
  },
  Footer: {
    copyrightYear: COPYRIGHT_YEAR,
  },
};

export default Copy;
