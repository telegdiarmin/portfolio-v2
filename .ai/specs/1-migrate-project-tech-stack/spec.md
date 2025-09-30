# Plan: Migrate Portfolio from Vanilla JS to React + TypeScript

## Context
User request: Migrate the existing vanilla HTML/CSS/JavaScript portfolio to a modern React + TypeScript stack
Current portfolio is at /Users/atelegdi/Documents/Personal/Git/portfolio-v2/
Target tech stack: React + TypeScript + Vite + Vitest + Sass + Prettier + pnpm
Current features: Terminal type with typewriter effect, profile section, timeline, skills cloud, resume download

## Task List

### Task 1: Bootstrap New React Project Structure
Status: DONE
Depends On: None
Description:
Create fresh React + TypeScript project with Vite using the specified project name and structure.
Set up package.json with correct name (portfolio-v2), version (2.0.0), and all required dependencies.
Configure pnpm as package manager and install base dependencies.

Verification:
- Project created with correct name and version
- package.json contains all specified scripts (dev, build, preview, test, test:ui, format, format:check)
- pnpm is configured and dependencies installed successfully
- Basic Vite dev server runs without errors

### Task 2: Configure TypeScript and Build Tools
Status: DONE
Depends On: Task 1
Description:
Set up TypeScript configuration with strict mode and absolute imports via @ alias.
Configure tsconfig.json and tsconfig.node.json with proper settings.
Set up Vite configuration with React plugin and resolve alias mapping @ to src.

Verification:
- tsconfig.json has strict mode enabled and JSX automatic runtime
- Absolute imports with @ alias work correctly
- TypeScript compilation passes without errors
- Vite build system recognizes the alias configuration

### Task 3: Configure Testing Environment
Status: DONE
Depends On: Task 2
Description:
Set up Vitest with JSDOM environment and @testing-library/jest-dom setup.
Create vitest.config.ts and vitest.setup.ts files.
Configure CSS processing for tests and ensure testing utilities are available.

Verification:
- vitest.config.ts properly configured with JSDOM environment
- vitest.setup.ts includes @testing-library/jest-dom setup
- Test command runs without errors
- Sample test can be created and executed successfully

### Task 4: Configure Prettier and Sass
Status: TODO
Depends On: Task 2
Description:
Set up Prettier with project formatting rules (semicolons, trailing commas, 2-space tabs).
Create .prettierrc and .prettierignore files.
Configure Sass with global variables and mixins structure in styles directory.

Verification:
- .prettierrc contains proper formatting rules
- .prettierignore excludes dist, node_modules, coverage
- Sass is properly configured and can process SCSS files
- Global styles structure is created (variables.scss, mixins.scss, global.scss)

### Task 5: Create Project Directory Structure
Status: TODO
Depends On: Task 1
Description:
Create the complete directory structure as specified in the plan.
Set up src directory with main.tsx, App.tsx, and all subdirectories.
Create placeholder files for components, styles, and resources directories.

Target Project Structure:
```
root/
├── index.html
├── package.json
├── .prettierrc
├── .prettierignore
├── tsconfig.json
├── tsconfig.node.json
├── vitest.config.ts
├── vitest.setup.ts
├── README.md
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── components/
    │   ├── terminal/
    │   │   ├── Terminal.tsx
    │   │   ├── Terminal.scss
    │   │   ├── Terminal.test.ts
    │   │   ├── terminal.types.ts
    │   │   └── index.ts
    │   ├── typewriter/
    │   │   ├── Typewriter.tsx
    │   │   ├── Typewriter.scss
    │   │   ├── Typewriter.test.ts
    │   │   ├── typewriter.types.ts
    │   │   └── index.ts
    │   ├── profile-section/
    │   │   ├── ProfileSection.tsx
    │   │   ├── ProfileSection.scss
    │   │   ├── ProfileSection.test.ts
    │   │   ├── profile-section.types.ts
    │   │   └── index.ts
    │   ├── avatar/
    │   │   ├── Avatar.tsx
    │   │   ├── Avatar.scss
    │   │   ├── Avatar.test.ts
    │   │   ├── avatar.types.ts
    │   │   └── index.ts
    │   ├── timeline/
    │   │   ├── Timeline.tsx
    │   │   ├── Timeline.scss
    │   │   ├── Timeline.test.ts
    │   │   ├── timeline.types.ts
    │   │   └── index.ts
    │   ├── timeline-item/
    │   │   ├── TimelineItem.tsx
    │   │   ├── TimelineItem.scss
    │   │   ├── TimelineItem.test.ts
    │   │   ├── timeline-item.types.ts
    │   │   └── index.ts
    │   ├── skills-cloud/
    │   │   ├── SkillsCloud.tsx
    │   │   ├── SkillsCloud.scss
    │   │   ├── SkillsCloud.test.ts
    │   │   ├── skills-cloud.types.ts
    │   │   └── index.ts
    │   ├── skill-tag/
    │   │   ├── SkillTag.tsx
    │   │   ├── SkillTag.scss
    │   │   ├── SkillTag.test.ts
    │   │   ├── skill-tag.types.ts
    │   │   └── index.ts
    │   ├── button/
    │   │   ├── Button.tsx
    │   │   ├── Button.scss
    │   │   ├── Button.test.ts
    │   │   ├── button.types.ts
    │   │   └── index.ts
    │   ├── dropdown/
    │   │   ├── Dropdown.tsx
    │   │   ├── Dropdown.scss
    │   │   ├── Dropdown.test.ts
    │   │   ├── dropdown.types.ts
    │   │   └── index.ts
    │   ├── scroll-indicator/
    │   │   ├── ScrollIndicator.tsx
    │   │   ├── ScrollIndicator.scss
    │   │   ├── ScrollIndicator.test.ts
    │   │   ├── scroll-indicator.types.ts
    │   │   └── index.ts
    │   └── index.ts
    ├── styles/
    │   ├── _variables.scss
    │   ├── _mixins.scss
    │   └── global.scss
    ├── resources/
    │   ├── images/
    │   │   ├── favicon.ico
    │   │   └── profile-picture.jpg
    │   └── data/
    │       ├── profile-data.ts
    │       ├── timeline-data.ts
    │       ├── skills-data.ts
    │       └── Armin Telegdi - Resume.pdf
    └── fonts/ (if applicable)
```

Verification:
- All specified directories exist (components, styles, resources, fonts if applicable)
- main.tsx and App.tsx files are created with basic React setup
- Directory structure matches the specification exactly
- Placeholder index.ts files are created for barrel exports

### Task 6: Set Up Global Styles and Variables
Status: TODO
Depends On: Task 4, Task 5
Description:
Migrate existing CSS color schemes and styling patterns to Sass variables and mixins.
Create styles/_variables.scss with color palette, typography, and spacing tokens.
Create styles/_mixins.scss with reusable gradient, shadow, and animation mixins.
Set up styles/global.scss with base styles and global imports.

Verification:
- _variables.scss contains all color schemes from original CSS
- _mixins.scss includes gradient, shadow, and animation mixins
- global.scss provides proper base styles and font imports
- Google Fonts are properly imported (Source Code Pro, Montserrat, Material Icons)

### Task 7: Create TypeScript Data Types
Status: TODO
Depends On: Task 2
Description:
Define TypeScript types for all data structures used in the portfolio.
Create types for TimelineItem, Skill, ProfileData, and other data types.
Set up data files in resources/data/ with typed portfolio content.

Verification:
- All TypeScript types are properly defined with correct types
- Data files contain the actual portfolio content from original HTML
- Timeline data includes all work experience and education entries
- Skills data includes all current skill categories and items
- Profile data includes bio, contact info, and personal details

### Task 8: Migrate Static Assets
Status: TODO
Depends On: Task 5
Description:
Copy existing images (profile picture, favicon) and PDF resume to new resources structure.
Organize assets in resources/images/ and ensure proper file paths.
Update asset references to work with Vite's asset handling.

Verification:
- Profile-picture.jpg copied to resources/images/
- favicon.ico copied to resources/images/
- Resume PDF copied to resources/data/
- All asset paths are updated for Vite compatibility
- Assets load correctly in development environment

### Task 9: Create Core UI Components
Status: TODO
Depends On: Task 6, Task 7
Description:
Build foundational UI components: Button, Dropdown, ScrollIndicator.
Implement these with proper TypeScript types and Sass styling.
Create component-specific styles colocated with components.
Set up barrel exports for UI components.

Verification:
- Button component matches original styling and behavior
- Dropdown component includes proper click-outside functionality
- ScrollIndicator component has bounce animation
- All components have TypeScript types
- Component styles use Sass variables and mixins
- Barrel exports (index.ts) are properly configured

### Task 10: Create Terminal Component
Status: TODO
Depends On: Task 9
Description:
Build Terminal and Typewriter components to replicate the original terminal type.
Implement typewriter effect with proper typing animation and cursor.
Style terminal type with VS Code-like appearance using existing CSS patterns.
Create terminal-specific types and types.

Verification:
- Terminal component renders with proper VS Code terminal styling
- Typewriter component produces the same typing effect as original
- Terminal type includes tabs, controls, and workspace sections
- Component maintains responsive design principles
- All interactive elements work correctly (dropdown, window controls)

### Task 11: Create Profile Section Component
Status: TODO
Depends On: Task 9, Task 8
Description:
Build ProfileSection and Avatar components for the personal information display.
Implement profile content with proper typography and spacing.
Include profile picture, bio, and contact link functionality.

Verification:
- ProfileSection displays all original profile content
- Avatar component shows profile picture with proper styling
- Contact email link maintains original styling and behavior
- Typography matches original design (headings, paragraphs)
- Responsive layout works correctly

### Task 12: Create Timeline Component
Status: TODO
Depends On: Task 9, Task 7
Description:
Build Timeline and TimelineItem components for work experience and education.
Implement alternating left/right layout with connecting line.
Style timeline items with proper spacing and visual hierarchy.

Verification:
- Timeline displays all work experience and education entries
- Alternating left/right layout matches original design
- Timeline connector line and markers are properly styled
- TimelineItem components handle both education and experience types
- Responsive behavior maintains readability on all screen sizes

### Task 13: Create Skills Cloud Component
Status: TODO
Depends On: Task 9, Task 7
Description:
Build SkillsCloud and SkillTag components for the skills display.
Implement categorized skill tags with proper color coding.
Create flexible layout that wraps skills appropriately.

Verification:
- SkillsCloud displays all skills from original portfolio
- SkillTag components use correct colors for each category
- Skills wrap properly in responsive layout
- Color schemes match original (production, utility, language skills)
- Tag styling and spacing match original design

### Task 14: Create Main App Component Integration
Status: TODO
Depends On: Task 10, Task 11, Task 12, Task 13
Description:
Integrate all components into main App.tsx with proper layout and structure.
Implement scroll navigation between terminal and about sections.
Set up proper component hierarchy and data flow.

Verification:
- App.tsx renders all major sections (terminal, profile, timeline, skills)
- Scroll navigation works between sections
- Overall layout matches original portfolio structure
- All components receive proper data and props
- Page performance is acceptable (no console errors)

### Task 15: Add Component Testing
Status: TODO
Depends On: Task 3, Task 14
Description:
Create unit tests for all major components using Vitest and Testing Library.
Focus on component rendering, user interactions, and prop handling.
Set up test files colocated with components following the specified structure.

Verification:
- Each component has corresponding test file
- Tests cover component rendering and basic functionality
- Interactive elements (dropdown, scroll navigation) are tested
- All tests pass without errors
- Test coverage includes TypeScript type checking

### Task 16: Final Integration and Validation
Status: TODO
Depends On: Task 15
Description:
Validate complete application functionality matches original portfolio.
Run all build processes (dev, build, preview, test) successfully.
Perform final code formatting and cleanup.
Document any future backlog items for responsive design, animations, SEO, and analytics.

Verification:
- Dev server runs without errors and displays complete portfolio
- Build process completes successfully
- Preview build matches development version exactly
- All tests pass
- Code is properly formatted with Prettier
- Backlog items documented for future enhancements

## Backlog Items (Future Enhancements)
- Enhanced responsive design for mobile devices
- Advanced animations using Framer Motion or similar
- SEO optimization with meta tags and structured data
- Analytics integration (Google Analytics)
- Performance optimizations and code splitting

## Execution Guide
1. Pick the next task that is not in progress and has all dependencies marked as DONE.
   If multiple tasks are eligible, pick the first one in the list.

2. Execute the selected task:
   a. Set status to IN-PROGRESS
   b. Follow the task description
   c. Complete verification steps
   d. Set status to DONE when verified successfully

3. Continue to the next eligible task until all tasks are completed.