export type StoryProfile = {
  id: number;
  name: string;
  role: string;
  location: string;
  imageUrl: string;
  summary: string;
  story: string;
};

export const storyProfiles: StoryProfile[] = [
  {
    id: 1,
    name: "Maya",
    role: "College student",
    location: "Oklahoma",
    imageUrl: "https://i.pravatar.cc/420?img=47",
    summary:
      "Maya reached out during a difficult semester and found steady support through crisis services and campus follow-up.",
    story:
      "Maya was trying to manage school, work, and family responsibilities at the same time. When stress began to feel unmanageable, she contacted a crisis line and was connected to someone who helped her slow things down and make a plan for the next day. A campus counselor followed up later that week. Maya describes that handoff as the moment support felt real, because she did not have to explain everything again from the beginning.",
  },
  {
    id: 2,
    name: "James",
    role: "Veteran",
    location: "Arizona",
    imageUrl: "https://i.pravatar.cc/420?img=12",
    summary:
      "James found that a warm handoff after emergency care helped him stay connected to longer-term services.",
    story:
      "After a crisis visit, James worried he would be sent home with a list of phone numbers and no clear next step. Instead, a care coordinator called with him in the room and scheduled a follow-up appointment before he left. James says the most important part was knowing exactly who would call, when they would call, and what to do if the appointment felt too far away.",
  },
  {
    id: 3,
    name: "Elena",
    role: "Rural parent",
    location: "New Mexico",
    imageUrl: "https://i.pravatar.cc/420?img=32",
    summary:
      "Elena's family benefited from telehealth follow-up when local behavioral health appointments were limited.",
    story:
      "Elena lives in a rural county where specialty care can be hours away. After her family contacted crisis services, a telehealth follow-up visit helped bridge the gap until local support was available. For Elena, the biggest difference was that services adapted to the reality of distance, transportation, and work schedules.",
  },
  {
    id: 4,
    name: "Andre",
    role: "Peer support specialist",
    location: "Michigan",
    imageUrl: "https://i.pravatar.cc/420?img=52",
    summary:
      "Andre uses lived experience to help people navigate the first few days after a crisis event.",
    story:
      "Andre works with people after crisis stabilization. He focuses on practical next steps: transportation, appointment reminders, family communication, and knowing what support is available at night or on weekends. He says dashboards matter when they show whether people are actually connected to care after the first crisis contact.",
  },
  {
    id: 5,
    name: "Nina",
    role: "Emergency nurse",
    location: "Florida",
    imageUrl: "https://i.pravatar.cc/420?img=5",
    summary:
      "Nina sees how emergency departments can become the default safety net when community options are hard to access.",
    story:
      "Nina works in a busy emergency department. She often sees people who needed support earlier but could not find timely care. She believes better crisis response is not only about what happens in the hospital, but also about the services people can reach before and after the emergency visit.",
  },
  {
    id: 6,
    name: "Thomas",
    role: "County health official",
    location: "Pennsylvania",
    imageUrl: "https://i.pravatar.cc/420?img=60",
    summary:
      "Thomas uses local trend data to explain why follow-up capacity matters after crisis response improves.",
    story:
      "Thomas noticed that crisis line access was improving in his county, but follow-up measures were not moving as quickly. That helped his team focus on care transitions rather than celebrating one metric alone. He says the most useful dashboard view is the one that shows where the system is connected and where the handoff still breaks down.",
  },
  {
    id: 7,
    name: "Ari",
    role: "Youth advocate",
    location: "Washington",
    imageUrl: "https://i.pravatar.cc/420?img=16",
    summary:
      "Ari helps youth advisory groups explain what timely, respectful support looks like from their perspective.",
    story:
      "Ari works with young people who want services to feel easier to reach and less confusing. In their advisory group, youth often say that getting an appointment is only part of the story. They also need clear language, trust, privacy, and adults who explain what will happen next.",
  },
  {
    id: 8,
    name: "Rosa",
    role: "Community health worker",
    location: "Texas",
    imageUrl: "https://i.pravatar.cc/420?img=44",
    summary:
      "Rosa helps families understand crisis options before a situation becomes an emergency.",
    story:
      "Rosa spends much of her time explaining what crisis services are and when families can use them. She says many people do not know that support can begin before an emergency department visit. Better public information, in the languages people use at home, can make the system feel less distant.",
  },
  {
    id: 9,
    name: "Caleb",
    role: "Mobile crisis clinician",
    location: "Colorado",
    imageUrl: "https://i.pravatar.cc/420?img=68",
    summary:
      "Caleb's team focuses on resolving crises safely in the community whenever that is appropriate.",
    story:
      "Caleb works on a mobile crisis team. He sees the value of having more than one response option: phone support, mobile response, stabilization, outpatient follow-up, and emergency care when needed. He wants dashboards to show whether people are getting the right level of support at the right time.",
  },
  {
    id: 10,
    name: "Leah",
    role: "Policy advisor",
    location: "Massachusetts",
    imageUrl: "https://i.pravatar.cc/420?img=25",
    summary:
      "Leah uses stories and metrics together to communicate why crisis systems need sustained investment.",
    story:
      "Leah often reminds decision-makers that metrics show patterns, but stories explain what those patterns mean for people. When answer rates improve, she asks whether follow-up is keeping pace. When rates differ across communities, she asks what barriers are underneath the numbers. For Leah, the goal is a system where people do not have to navigate crisis care alone.",
  },
];
