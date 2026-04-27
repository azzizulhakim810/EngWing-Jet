export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export type CourseCategory =
  | "General English"
  | "Business English"
  | "Test Preparation"
  | "Academic English"
  | "Conversation";

export interface Course {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: CourseCategory;
  level: CourseLevel;
  price: number;
  rating: number;
  image: string;
  duration: string;
}

export const courses: Course[] = [
  {
    id: "ewj-001",
    title: "Fluent Foundations",
    shortDescription: "Build strong grammar, vocabulary, and everyday speaking confidence.",
    fullDescription:
      "A structured starter program focused on practical grammar, high-frequency vocabulary, and guided speaking routines. Ideal for learners who want to move from hesitation to confident daily communication.",
    category: "General English",
    level: "Beginner",
    price: 79,
    rating: 4.8,
    image: "/images/courses/fluent-foundations.jpg",
    duration: "6 weeks",
  },
  {
    id: "ewj-002",
    title: "Everyday Conversation Lab",
    shortDescription: "Practice real-life dialogues for social and professional settings.",
    fullDescription:
      "This course uses scenario-based speaking drills, pronunciation correction, and role-play sessions to improve natural conversation flow. Perfect for learners aiming to speak clearly in real situations.",
    category: "Conversation",
    level: "Beginner",
    price: 69,
    rating: 4.7,
    image: "/images/courses/everyday-conversation-lab.jpg",
    duration: "5 weeks",
  },
  {
    id: "ewj-003",
    title: "Business English Accelerator",
    shortDescription: "Communicate effectively in meetings, emails, and presentations.",
    fullDescription:
      "A premium track for working professionals covering workplace vocabulary, clear email writing, meeting participation, and confident presentations. Includes feedback from expert mentors.",
    category: "Business English",
    level: "Intermediate",
    price: 119,
    rating: 4.9,
    image: "/images/courses/business-english-accelerator.jpg",
    duration: "8 weeks",
  },
  {
    id: "ewj-004",
    title: "Grammar & Writing Mastery",
    shortDescription: "Write clear, polished English with fewer mistakes.",
    fullDescription:
      "Improve sentence structure, coherence, punctuation, and tone through targeted writing exercises. This course helps learners produce professional and academic writing with clarity and precision.",
    category: "Academic English",
    level: "Intermediate",
    price: 99,
    rating: 4.8,
    image: "/images/courses/grammar-writing-mastery.jpg",
    duration: "7 weeks",
  },
  {
    id: "ewj-005",
    title: "IELTS Speaking & Writing Sprint",
    shortDescription: "Boost IELTS band score with exam-focused strategies and feedback.",
    fullDescription:
      "An intensive preparation program for IELTS candidates with timed practice, examiner-style feedback, and high-impact techniques for Speaking and Writing tasks.",
    category: "Test Preparation",
    level: "Advanced",
    price: 139,
    rating: 4.9,
    image: "/images/courses/ielts-speaking-writing-sprint.jpg",
    duration: "10 weeks",
  },
  {
    id: "ewj-006",
    title: "TOEFL Success Path",
    shortDescription: "Strengthen reading, listening, speaking, and writing for TOEFL.",
    fullDescription:
      "Designed for test takers targeting international university admission, this course combines section-by-section skill building with mock tests and performance analytics.",
    category: "Test Preparation",
    level: "Advanced",
    price: 149,
    rating: 4.8,
    image: "/images/courses/toefl-success-path.jpg",
    duration: "10 weeks",
  },
  {
    id: "ewj-007",
    title: "Public Speaking in English",
    shortDescription: "Deliver speeches and presentations with confidence and impact.",
    fullDescription:
      "Develop stage presence, vocal control, storytelling structure, and audience engagement. Learners receive practical coaching to speak persuasively in academic and professional contexts.",
    category: "Business English",
    level: "Intermediate",
    price: 109,
    rating: 4.7,
    image: "/images/courses/public-speaking-english.jpg",
    duration: "6 weeks",
  },
  {
    id: "ewj-008",
    title: "Career Interview English",
    shortDescription: "Prepare for global job interviews with polished communication.",
    fullDescription:
      "Master interview introductions, behavioral answers, and confident follow-up communication. Includes mock interviews and tailored mentor feedback for job seekers.",
    category: "Business English",
    level: "Advanced",
    price: 129,
    rating: 4.9,
    image: "/images/courses/career-interview-english.jpg",
    duration: "6 weeks",
  },
];
