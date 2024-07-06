import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";


import member1 from "../assets/profile-pictures/goku.jpg";
import member2 from "../assets/profile-pictures/naruto.png";
import member3 from "../assets/profile-pictures/luffy.jpg";
import member4 from "../assets/profile-pictures/ichigo.jpg";
import member5 from "../assets/profile-pictures/natsu.jpg";
import member6 from "../assets/profile-pictures/edward.jpg";

export const teamMembers = [
  {
    name: "Goku",
    company: "Z Fighters Cyber Security",
    image: member1,
    description: "Goku is a formidable cybersecurity expert with a relentless dedication to protecting digital realms from all threats.",
  },
  {
    name: "Naruto Uzumaki",
    company: "Hidden Leaf Security",
    image: member2,
    description: "Naruto brings a unique blend of determination and strategic acumen to ensure unparalleled cybersecurity solutions.",
  },
  {
    name: "Monkey D. Luffy",
    company: "Straw Hat Security",
    image: member3,
    description: "Luffy's unconventional approach and unwavering resolve make him a trusted ally in safeguarding digital treasures.",
  },
  {
    name: "Ichigo Kurosaki",
    company: "Soul Reaper Security",
    image: member4,
    description: "Ichigo combines his spiritual powers with advanced cybersecurity techniques to protect against both physical and digital threats.",
  },
  {
    name: "Natsu Dragneel",
    company: "Fairy Tail Security Guild",
    image: member5,
    description: "Natsu's fiery spirit fuels his commitment to defending digital landscapes with unmatched vigor and passion.",
  },
  {
    name: "Edward Elric",
    company: "Alchemy Security Solutions",
    image: member6,
    description: "Edward's mastery of alchemy translates into innovative approaches to cybersecurity, ensuring robust protection against all adversaries.",
  },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "CyberGuard Solutions",
    image: user1,
    text: "I am highly impressed with CyberGuard Solutions. Their proactive approach, deep knowledge, and exceptional delivery surpassed my expectations for cybersecurity services.",
  },
  {
    user: "Jane Smith",
    company: "SecureTech Innovations",
    image: user2,
    text: "SecureTech Innovations provided us with creative and effective cybersecurity solutions. Their innovative approach significantly enhanced our digital security posture.",
  },
  {
    user: "David Johnson",
    company: "TechShield Systems",
    image: user3,
    text: "TechShield Systems stands out with their meticulous attention to detail and unwavering commitment to excellence in cybersecurity. They offer top-notch services that I highly recommend.",
  },
  {
    user: "Ronee Brown",
    company: "CyberDefenders Inc.",
    image: user4,
    text: "Working with CyberDefenders Inc. was transformative for our cybersecurity strategy. Their innovative solutions and meticulous approach helped us achieve our security objectives efficiently.",
  },
  {
    user: "Michael Wilson",
    company: "SecureData Solutions",
    image: user5,
    text: "SecureData Solutions exceeded our cybersecurity expectations with their comprehensive approach and outstanding execution. They ensured our digital assets were protected and provided exceptional service."
  },
  {
    user: "Emily Davis",
    company: "Guardian Cyber Systems",
    image: user6,
    text: "Guardian Cyber Systems demonstrated unmatched expertise and dedication. Their proactive solutions and collaborative approach were instrumental in securing our digital infrastructure.",
  },
];




export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Advanced Threat Detection",
    description:
      "Detect and respond to advanced cyber threats with our sophisticated threat detection algorithms.",
  },
  {
    icon: <Fingerprint />,
    text: "Cross-Platform Security",
    description:
      "Secure your digital assets across various platforms, ensuring comprehensive protection on mobile, desktop, and cloud environments.",
  },
  {
    icon: <ShieldHalf />,
    text: "Customizable Security Policies",
    description:
      "Tailor security policies to meet your organization's specific needs and compliance requirements.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Threat Monitoring",
    description:
      "Monitor your network and systems in real-time for potential threats, enabling proactive defense measures.",
  },
  {
    icon: <PlugZap />,
    text: "Collaborative Threat Intelligence",
    description:
      "Collaborate with cybersecurity experts and share threat intelligence to strengthen your defenses.",
  },
  {
    icon: <GlobeLock />,
    text: "Comprehensive Security Analytics",
    description:
      "Utilize powerful analytics tools to gain insights into cybersecurity trends and threats affecting your organization.",
  },
];


export const checklistItems = [
  {
    title: "Secure Code Review Process",
    description:
      "Implement a robust code review process to ensure code quality and security standards are met.",
  },
  {
    title: "Patch Management and Updates",
    description:
      "Regularly apply security patches and updates to software and systems to mitigate vulnerabilities.",
  },
  {
    title: "Incident Response Plan",
    description:
      "Develop and maintain an incident response plan to quickly respond to and mitigate cybersecurity incidents.",
  },
  {
    title: "Employee Cybersecurity Training",
    description:
      "Provide regular training to employees on cybersecurity best practices and awareness.",
  },
];


export const pricingOptions = [
  {
    title: "Basic",
    price: "$19.99",
    features: [
      "Basic malware protection",
      "Secure data encryption",
      "24/7 support",
      "Monthly security audits",
    ],
  },
  {
    title: "Standard",
    price: "$39.99",
    features: [
      "Advanced malware protection",
      "Secure data encryption",
      "Real-time threat detection",
      "Weekly security audits",
    ],
  },
  {
    title: "Advanced",
    price: "$59.99",
    features: [
      "Advanced malware protection",
      "Secure data encryption",
      "Real-time threat detection",
      "Daily security audits",
    ],
  },
  {
    title: "Professional",
    price: "$79.99",
    features: [
      "Customizable cybersecurity solutions",
      "Secure data encryption",
      "Real-time threat detection",
      "24/7 dedicated support",
    ],
  },
  {
    title: "Premium",
    price: "$99.99",
    features: [
      "Comprehensive cybersecurity suite",
      "Secure data encryption",
      "Real-time threat detection",
      "Custom security strategy",
    ],
  },
  {
    title: "Ultimate",
    price: "$149.99",
    features: [
      "Ultimate cybersecurity protection",
      "Secure data encryption",
      "Real-time threat detection",
      "Custom security strategy",
    ],
  },
  {
    title: "Cyber Defense",
    price: "$199.99",
    features: [
      "Advanced threat intelligence",
      "Secure data encryption",
      "Real-time threat detection",
      "Custom security strategy",
    ],
  },
  {
    title: "Enterprise Security",
    price: "$299.99",
    features: [
      "Enterprise-grade cybersecurity solutions",
      "Secure data encryption",
      "Real-time threat detection",
      "Custom security strategy",
    ],
  },
  {
    title: "Secure Cloud",
    price: "$399.99",
    features: [
      "Secure cloud infrastructure",
      "Secure data encryption",
      "Real-time threat detection",
      "Custom security strategy",
    ],
  },
  {
    title: "Cyber Intelligence",
    price: "$499.99",
    features: [
      "Advanced cyber threat intelligence",
      "Secure data encryption",
      "Real-time threat detection",
      "Custom security strategy",
    ],
  },
  {
    title: "Cyber Sentinel",
    price: "$599.99",
    features: [
      "Sentinel-grade cybersecurity",
      "Secure data encryption",
      "Real-time threat detection",
      "Custom security strategy",
    ],
  },
  {
    title: "Cyber Guardian",
    price: "$799.99",
    features: [
      "Guardian-level cybersecurity",
      "Secure data encryption",
      "Real-time threat detection",
      "Custom security strategy",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Cybersecurity Basics" },
  { href: "#", text: "Security Documentation" },
  { href: "#", text: "Cybersecurity Tutorials" },
  { href: "#", text: "API Security" },
  { href: "#", text: "Community Security Forums" },
];

export const platformLinks = [
  { href: "#", text: "Security Features" },
  { href: "#", text: "Supported Security Devices" },
  { href: "#", text: "System Security Requirements" },
  { href: "#", text: "Security Downloads" },
  { href: "#", text: "Security Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Security Events" },
  { href: "#", text: "Security Meetups" },
  { href: "#", text: "Security Conferences" },
  { href: "#", text: "Security Hackathons" },
  { href: "#", text: "Security Jobs" },
];


export const faqs = [
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept major credit and debit cards (Visa, MasterCard, American Express) as well as PayPal. These options provide flexibility and security for your transactions. If you prefer using alternative methods, please contact our customer support for assistance.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time without any penalties. We believe in providing flexibility to our customers, so you have the freedom to manage your subscription according to your needs.',
  },
  {
    question: 'How do I contact customer support?',
    answer: 'You can reach our customer support team via email at support@example.com. We strive to provide timely assistance and ensure that your queries or concerns are addressed promptly and effectively.',
  },
  {
    question: 'Is my data secure with your service?',
    answer:
      'Absolutely. We take data security seriously and implement robust measures to protect your information. Our practices include encryption of sensitive data, regular security audits, and compliance with industry standards to safeguard your privacy.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      'Yes, we have a refund policy in place. If you are dissatisfied with our service or products, please contact our support team within [X days] of your purchase for assistance with a refund. We aim to ensure your satisfaction with every transaction.',
  },
  {
    question: 'Are there any setup fees?',
    answer:
      'No, we do not charge any setup fees for our services. You only pay for the products or subscriptions you choose. We believe in transparent pricing and strive to offer value without additional hidden costs.',
  },
  {
    question: 'How long does shipping take?',
    answer:
      'Shipping times may vary depending on your location and the product ordered. Typically, orders are processed within [X] business days. For more precise information, please check the estimated delivery time provided during checkout or contact our support team for updates on your order status.',
  },
  {
    question: 'Can I change my shipping address after placing an order?',
    answer:
      'If you need to update your shipping address after placing an order, please contact our support team immediately. We will do our best to accommodate your request, though changes may be subject to order processing and shipping timelines.',
  },
  {
    question: 'Do you offer discounts for bulk orders?',
    answer:
      'Yes, we offer discounts for bulk orders. If you are interested in purchasing a large quantity of products or subscriptions, please contact our sales team at sales@example.com to discuss pricing and available discounts.',
  },
  {
    question: 'How can I track my order?',
    answer:
      'Once your order has been shipped, you will receive a confirmation email with tracking information. You can use this information to track the status of your delivery online through our shipping partner’s website. If you encounter any issues or have questions about tracking, please reach out to our support team for assistance.',
  },
];
