import FooterNav from "./FooterNav";

// Active Great Plains teams — from the conference master list (inactive teams omitted).
const TEAMS = [
  "Eau Claire",
  "Illinois",
  "Iowa",
  "Kansas",
  "Kansas State",
  "La Crosse",
  "Madison",
  "Marquette",
  "Michigan Tech",
  "Milwaukee",
  "Minnesota",
  "Missouri State",
  "Mizzou",
  "Nebraska",
  "South Dakota",
  "South Dakota State",
  "Southern Illinois",
  "Stevens Point",
  "Stout",
];

export default function TeamInfo() {
  return (
    <>
      <div className="max-w-3xl mx-auto mt-[80px] p-6 bg-white rounded text-lg leading-relaxed ">
        <div id="teams-section"></div>
        <section className="mt-8">
          <h2 className="text-3xl text-center font-bold font-merriweather mb-4">Teams</h2>
        <div className="max-w-md mx-auto overflow-x-auto">
          <table className="min-w-[200px] w-full border-collapse rounded-lg overflow-hidden">
            <thead>
              <tr>
                <th className="text-left text-white px-4 py-2 text-lg font-semibold bg-brand ">Great Plains Teams</th>
              </tr>
            </thead>
            <tbody>
              {TEAMS.map((team) => (
                <tr key={team}><td className="px-4 py-1">{team}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

        <div id="checklist-section"></div>
        <section className="mt-8 mb-24">
          <h2 className="text-3xl text-center font-bold font-merriweather mb-4">Registering a Team</h2>
          <p className="mb-4">The following checklist contains everything your team needs to complete in order to be eligible to ski at tournaments.</p>
          <ul className="list-disc list-inside mb-4 ml-6">
          <h3 className="text-xl font-bold font-merriweather mt-6 mb-2">Club Members</h3>
              <ul className="list-disc list-inside mb-2 ml-6 font-normal">
                <li>Log into your member account for <a href="https://members.usawaterski.org/member/login" className="underline" target="_blank" rel="noopener noreferrer">USA Waterski</a> or create an account if you don't have one.</li>
                <li>Purchase an Individual Active Membership.</li>
                <li>Get SafeSport Certified from the dashboard. ALL SKIERS MUST BE SAFESPORT CERTIFIED TO COMPETE OR VOLUNTEER AT SANCTIONED EVENTS.</li>
              </ul>
            <h3 className="text-xl font-bold font-merriweather mt-6 mb-2">Captains</h3>
              <ul className="list-disc list-inside mb-2 ml-6 font-normal">
                <li>Register your team on USA Waterski by following <a href="https://drive.google.com/file/d/1x3usqf0wbUrvuDQZ1KCDhf-ra7b4fli_/view" className="underline" target="_blank" rel="noopener noreferrer">this instructional video</a>.</li>
                <li>Create an Eligibility Letter based on <a href="https://docs.google.com/document/d/1ztCt2jYpDLqU2NmZfyFFV-ul12u21Jtdj27adVOOzOg/edit" className="underline" target="_blank" rel="noopener noreferrer">this information</a>. This is an example
              <a href="http://ncwsa.com/resources/NCWSA%20Letter%20of%20Eligibility%20Sample.pdf" className="underline" target="_blank" rel="noopener noreferrer"> eligibility letter.</a></li>
              <li>Ski office hours will be available on Wednesday nights during the season typically from 8pm – 9pm Central Time.</li>
              <li>Send the chairperson your team's updated captain's contact information.</li>
            </ul>
        </ul>
      </section>

    </div>
    <FooterNav
      links={[
        { label: "Teams", id: "teams-section" },
        { label: "Checklist", id: "checklist-section" },
      ]}
    />
    </>
  );
}
