export type EventDetails = {
  title: string;
  date: [string, string];
  content: string;
  icon: string;
  id: number;
  images: string[];
};

export const events: EventDetails[] = [
  {
    id: 1,
    title: "Scholarship and travel to Germany",
    date: ["March", "2023"],
    content:
      "Offered by a german cultural institute called Goethe Institut, this was a full scholarship I won by scoring the highest grades of my school in a german proficiency test called Goethe Zertifikat A2. Staying in Germany for three weeks along with students from various countries made me change my perspective on autonomy and, as a consequence, enhanced my knowledge about the real world. And, of course, I learned a lot of german.",
    icon: "trophy-icon.svg",
    images: [
      "maua-scholarship.jpg",
      "city-view-scholarship.jpg",
      "germany-certificate.png",
    ],
  },
  {
    id: 2,
    title: "Silver medal in Kangaroo National Mathematics Olympiad",
    date: ["August", "2023"],
    content:
      "Part of the international Kangaroo competition, one of the largest mathematics contests worldwide, the national olympiad provides the possibility for the student to enhance their critical thinking and their arithmetic abilities. This olympiad is also responsible for encouraging the study of mathematics through logical reasoning as a extracurricular activity.",
    icon: "medal-icon.svg",
    images: ["canguru-certificate.jpg"],
  },
  {
    id: 3,
    title: "Gold medal in National Science Olympiad (ONC)",
    date: ["October", "2023"],
    content:
      "This nationwide olympiad focuses on testing students' knowledge across various scientific disciplines, including physics, chemistry, biology, and astronomy. It was also a great opportunity for me to enhance my curiosity about science and to boost the preparation for more advanced academic pursuits.",
    icon: "medal-icon.svg",
    images: ["certificate-onc.jpeg"],
  },
  {
    id: 4,
    title: "Programming Hackathon in school",
    date: ["November", "2023"],
    content:
      "During this hackathon, we - me and my team - had to develop a program written in Java that simulates a simple role-playing game (RPG). The participants were tasked with designing and coding various RPG elements, such as characters, abilities, environments and combat systems using their knowledge of Java syntax and its object-oriented principles. Although it was great occasion to enhance my coding skills, the most important for me was that this hackathon provided for the first time an opportunity to test my teamwork skills in the programming area.",
    icon: "certificate-icon.svg",
    images: ["certificate-desafiodev.jpg", "certificate-hackathon.jpg"],
  },
  {
    id: 5,
    title: "Bronze medal in National Mathematics Olympiad (OBMEP)",
    date: ["August", "2024"],
    content:
      "After taking the first stage examinations, the best performing students from each school are classified for the national stage examination, which is made of six problems. Those problems are usually very complex and cover topics such as logic, algebra, geometry, number theory and combinatorics, in order to test students' skills on logical reasoning and creativity. The students that manage to get a national medal are offered a scholarship for a math course called PIC, which is organized by the Pure and Applied Math Institute (IMPA).",
    icon: "medal-icon.svg",
    images: [
      "certificate-and-medal-obmep.jpeg",
      "certificate-obmep.jpg",
      "pic-certificate.jpg",
    ],
  },
  {
    id: 6,
    title: "Gold medal in National Astronomy Olympiad (OBA)",
    date: ["September", "2024"],
    content:
      "Aimed at promoting interest in astronomy among students from the whole country, this olympiad also focuses on testing their abilities on scientific knowledge and data interpretation. As a interdisciplinary approach to science, it does very well at fostering curiosity in astronomy and space science while also developing students' problem-solving skills.",
    icon: "medal-icon.svg",
    images: ["certificate-oba.jpg"],
  },
  {
    id: 7,
    title: "School graduation",
    date: ["December", "2024"],
    content: "14th December, 2024 - Colégio Mauá, Brazil.",
    icon: "graduation-icon.png",
    images: ["medals-and-certificates.png", "graduation.jpg"],
  },
  {
    id: 8,
    title: "Admission to Hochschule Kaiserslautern",
    date: ["May", "2025"],
    content:
      "Successfully admitted with the third highest score to a preparatory course for international students at Hochschule Kaiserslautern, Germany. This course, called Studienkolleg, is designed to equip international students with the necessary academic skills and language proficiency to excel in their chosen degree programs.",
    icon: "certificate-icon.svg",
    images: ["university-admission-certificate.png"],
  },
];
