import type { FC } from 'react';

// Component imports (will be implemented in later tasks)
import { Terminal } from '@/components/terminal';
import { Typewriter } from '@/components/typewriter'; 
import { ProfileSection } from '@/components/profile-section';
import { Avatar } from '@/components/avatar';
import { Timeline } from '@/components/timeline';
import { SkillsCloud } from '@/components/skills-cloud';
import { ScrollIndicator } from '@/components/scroll-indicator';

// Data imports
import { profileData } from '@/resources/data/profile-data';

import './App.css';

const App: FC = () => {
  return (
    <div className="app">
      <ScrollIndicator />
      
      <main className="app__main">
        <section className="app__hero">
          <Terminal />
          <Typewriter text="Welcome to my portfolio" />
        </section>

        <ProfileSection />
        
        <section className="app__about">
          <Avatar />
          <h1>{profileData.name}</h1>
          <p>{profileData.title}</p>
          <p>{profileData.bio}</p>
        </section>

        <Timeline />
        
        <section className="app__skills">
          <h2>Skills</h2>
          <SkillsCloud />
        </section>
      </main>
    </div>
  );
};

export default App;
