import type { FC } from "react";

import "./App.css";
import { skillsData } from "./resources/data/skills-data";
import { timelineData } from "./resources/data/timeline-data";
import { Avatar } from "@/components/avatar";
import { Profile } from "@/components/profile";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { SkillsCloud } from "@/components/skills-cloud";
import { Terminal } from "@/components/terminal";
import { Timeline } from "@/components/timeline";
import { Typewriter } from "@/components/typewriter";
import { profileData } from "@/resources/data/profile-data";

const App: FC = () => {
  return (
    <div className='app'>
      <main className='app__main'>
        <section className='app__hero'>
          <Terminal />
          <Typewriter text='Welcome to my portfolio' />
          <ScrollIndicator />
        </section>
        <section className='app__profile'>
          <Profile data={profileData} children={<Avatar />} />
          <Timeline data={timelineData} />
        </section>
        <section className='app__skills'>
          <SkillsCloud skills={skillsData} />
        </section>
      </main>
    </div>
  );
};

export default App;
