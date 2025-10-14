import { type FC, useRef } from "react";

import "./App.scss";
import { Button } from "./components";
import { Heading } from "./components/heading";
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
  const aboutSectionRef = useRef<HTMLElement>(null);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Armin Telegdi - Resume.pdf";
    link.download = "Armin Telegdi - Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <section id={"app"}>
        <Terminal />
        <Typewriter text='Welcome to my portfolio' />
        <ScrollIndicator targetRef={aboutSectionRef} />
      </section>
      <section id={"about"} ref={aboutSectionRef}>
        <Profile data={profileData}>
          <Avatar />
        </Profile>
        <Heading text={"Work experience & education"} size={"normal"} />
        <Timeline data={timelineData} />
        <Heading text={"Skills"} size={"normal"} />
        <SkillsCloud skills={skillsData} />
        <div className='footer'>
          <Button onClick={handleDownload}>Download curriculum</Button>
        </div>
      </section>
    </div>
  );
};

export default App;
