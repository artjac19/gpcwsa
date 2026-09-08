import FooterNav from "./FooterNav";

type Bio = {
  favEvent?: string;
  pbs?: string;
  tradition?: string;
  hobbies?: string;
  quote?: string;
};

type Member = {
  name: string;
  position: string;
  school?: string;
  hometown?: string;
  bio?: Bio;
};

const BOARD_GROUPS: { title: string; members: Member[] }[] = [
  {
    title: "Executive Board",
    members: [
      {
        name: "Amanda Rose",
        position: "Chairman",
        school: "Iowa State & KU",
        hometown: "Lake Saint Louis, MO",
        bio: {
          favEvent: "Trick",
          pbs: "Slalom: 2 @ 35 off, Jump: 74 ft, Trick: 1930 (1 pass) / 3050 (2 passes)",
          tradition: "Quaff & hanging out with ski friends",
          hobbies: "Snow skiing, running, being outside",
          quote: "Pull hard suck less",
        },
      },
      {
        name: "Lauren Connelly",
        position: "Vice Chair",
        school: "Iowa State",
        hometown: "Lockport, IL",
        bio: {
          favEvent: "Slalom",
          pbs: "Slalom: 2.5 @ 34mph 15' (tournament 5.5 @ 30mph 15'), Jump: 55', Trick: work in progress",
          tradition: "Quaff, snow ski trip out west",
          hobbies: "Painting myself head-to-toe in school colors, skiing for the west coast, skipping my engineering classes",
          quote: "Zero off & boat guides are more of suggestions than requirements",
        },
      },
      { name: "Ethan Jost", position: "Treasurer" },
      { name: "Adam Bywater", position: "Secretary" },
      { name: "Kennedy Van Den Elzen", position: "AAC NCWSA Rep" },
    ],
  },
  {
    title: "Regional Committees",
    members: [
      {
        name: 'Jake "Tango" Artang',
        position: "Webmaster (GP)",
        school: "UW-Madison",
        hometown: "Prior Lake, MN",
        bio: {
          favEvent: "Trick",
          pbs: "Slalom: 3 @ 36 35 off, Trick: 2970 pts, Jump: 103 ft",
          tradition: "Spring break",
          hobbies: "Kendama, jazz piano, snow skiing, filming/editing",
          quote: "Don't jinx him Tony",
        },
      },
      {
        name: "Ella Culliss",
        position: "Team Development / Recruitment",
        school: "University of Kansas",
        hometown: "De Soto, KS",
        bio: {
          favEvent: "Jump!!",
          pbs: "Slalom: 2 @ 25mph 15', Trick: 200 pts, Jump: 48 ft",
          tradition: "Ski Prom!",
          hobbies: "Gardening, hanging out with friends, spending way too much time inside the engineering buildings",
          quote: "Bad day to be a buoy",
        },
      },
      { name: "Kristina Pfankuch", position: "Alumni / Officials Chair" },
    ],
  },
  {
    title: "NCWSA Committees",
    members: [
      { name: "Joann Ferro", position: "Awards Midwest Rep" },
      { name: "Scott Coyne", position: "Operations MW Rep" },
      {
        name: "Amery Thompson",
        position: "Marketing",
        school: "Marquette",
        hometown: "Anaheim, CA",
        bio: {
          favEvent: "Slalom",
          pbs: "Slalom: 3 @ 23",
          tradition: "Team social events",
          hobbies: "Line dancing, surfing",
          quote: "If you aren't wiping out you aren't trying hard enough",
        },
      },
      { name: "Skye Elzaurdia", position: "Membership MW Rep" },
      { name: "Brendan Schultz", position: "Midwest AAC" },
      {
        name: 'Eli "Rolls Royce" Staver',
        position: "Midwest AAC",
        school: "University of Kansas",
        hometown: "Wichita, KS",
        bio: {
          favEvent: "Jump",
          pbs: "Slalom: 2 @ 35 off, Jump: 120 ft, Trick: 1200 pts",
          tradition: "Ski prom",
          hobbies: "Golf, beer, skydiving",
          quote: "Aim for white hope for red",
        },
      },
      { name: "Ashley Stevens", position: "NCWSA Chairman" },
      { name: "David Huisman", position: "NCWSA Vice Chairman" },
    ],
  },
];

function MemberCard({ member }: { member: Member }) {
  const { bio } = member;
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 break-inside-avoid mb-6">
      <h3 className="text-xl font-bold text-gray-900 text-center">{member.name}</h3>
      <div className="text-brand font-semibold text-center mt-1">{member.position}</div>
      {(member.school || member.hometown) && (
        <div className="text-sm text-gray-600 text-center mt-1">
          {[member.school, member.hometown].filter(Boolean).join(" • ")}
        </div>
      )}
      {bio && (
        <div className="mt-4 pt-4 border-t border-gray-200 text-[15px] text-gray-800 space-y-2">
          {bio.favEvent && <div><span className="font-semibold text-gray-900">Favorite event:</span> {bio.favEvent}</div>}
          {bio.pbs && <div><span className="font-semibold text-gray-900">PBs:</span> {bio.pbs}</div>}
          {bio.tradition && <div><span className="font-semibold text-gray-900">Favorite tradition:</span> {bio.tradition}</div>}
          {bio.hobbies && <div><span className="font-semibold text-gray-900">Hobbies:</span> {bio.hobbies}</div>}
          {bio.quote && <div className="italic text-gray-600 pt-1">"{bio.quote}"</div>}
        </div>
      )}
    </div>
  );
}

export default function AboutUs() {
  return (
    <>
      <div id="board-section" className="max-w-5xl mx-auto mt-24 p-8 bg-white rounded shadow">
        <h1 className="text-3xl font-bold mb-8 text-center">2026 Board</h1>
        {BOARD_GROUPS.map((group) => (
          <div key={group.title} className="mb-8 last:mb-0">
            <h2 className="text-2xl font-bold mb-4 text-center">{group.title}</h2>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
              {group.members.map((member) => (
                <MemberCard key={member.name + member.position} member={member} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div id="bylaws-section" className="max-w-5xl mx-auto mt-12 mb-24 p-8 bg-white rounded shadow text-center">
        <h1 className="text-3xl font-bold mb-4">Bylaws</h1>
        <p className="text-lg leading-relaxed mb-6">
          View the official GPCWSA bylaws, effective March 1, 2026.
        </p>
        <a
          href={`${import.meta.env.BASE_URL}bylaws.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-brand text-white font-semibold rounded hover:bg-brand/85 transition"
        >
          View Bylaws
        </a>
      </div>

      <FooterNav
        links={[
          { label: "Board", id: "board-section" },
          { label: "Bylaws", id: "bylaws-section" },
        ]}
      />
    </>
  );
}
