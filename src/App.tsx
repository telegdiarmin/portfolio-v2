import type { FC } from "react";

import "./App.css";
import { Avatar } from "@/components/avatar";
import { ProfileSection } from "@/components/profile-section";
import { ScrollIndicator } from "@/components/scroll-indicator";
import { SkillsCloud } from "@/components/skills-cloud";
// Component imports (will be implemented in later tasks)
import { Terminal } from "@/components/terminal";
import { Timeline } from "@/components/timeline";
import { Typewriter } from "@/components/typewriter";
// Data imports
import { profileData } from "@/resources/data/profile-data";

const App: FC = () => {
  return (
    <div className='app'>
      <ScrollIndicator />

      <main className='app__main'>
        <section className='app__hero'>
          <Terminal />
          <Typewriter text='Welcome to my portfolio' />
        </section>

        <ProfileSection />

        <section className='app__about'>
          <Avatar />
          <h1>{profileData.name}</h1>
          <p>{profileData.title}</p>
          <p>{profileData.bio}</p>
        </section>

        <Timeline />

        <section className='app__skills'>
          <h2>Skills</h2>
          <SkillsCloud />
        </section>
      </main>
    </div>
  );
};

export default App;
