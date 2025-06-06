// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'karimnoorani', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['karimnoorani/karimnoorani.github.io', 'karimnoorani/personal-projects', 'karimnoorani/webdev'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Development',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Internal Data Platform',
          description:
            'Designed, researched, and developed an internal data platform and workflow management application using batch data pipelines, HTML, CSS, Javascript, Python, and Flask. Integrated with cloud data infrastructure (AWS), ClickUp API, and Drupal CMS. Boosted workflow efficiency by over 50% and delivered readership growth through predictive analysis algorithms applied across thousands of stories. Facilitates data collection and content strategy across 200M+ readers each month',
          imageUrl:'https://i.ibb.co/R4ycGhVD/Screenshot-2025-03-14-at-12-06-14-PM.png',
          link: 'https://youtu.be/zRI7YzkQRzU',
        },
        {
          title: 'Local Story Previewer',
          description:
            'Pitched, designed, and built an internal story staging environment that drastically simplified the process to create, edit, and upload localized stories using Python, HTML, CSS, Javascript, and Flask. Created 20+ integrated applications using REST APIs that helped editors see and correct errors en masse. Facilitated production of 100K+ local data journalism stories to date and become the most widely used internally developed application at Stacker Media. Powers data journalism delivered to thousands of local news partners across the US',
          imageUrl:
            'https://i.ibb.co/0p65HXk6/Screenshot-2025-03-14-at-2-07-54-PM.png',
          link: 'https://youtu.be/2Ss-zcMlKW0',
        },
        {
          title: 'Fact Check Assistant',
          description:
            'Built a React app from scratch that lets editorial teams mark up, highlight, and quickly fact check story articles. Utilizes React states, props, conditional rendering, web accessibility, and performance optimizations. Integrated with popular fact-checking websites such as Google, Snopes, and Politifact. Users can add flagged claims that require furthing checking. Developed from my experience as a magazine editorial intern at Sports Illustrated and In These Times.',
          imageUrl:
            'https://i.ibb.co/xSqTdN4y/Screenshot-2025-05-08-at-5-44-03-PM.png',
          link: 'https://factcheckassistant.playcode.io',
        },
        {
          title: 'Headline Optimizer',
          description:
            'Built a React app from scratch that gives feedback on story headlines. Addresses factors such as factors such as clarity, conciseness, keywords, and tone while also suggesting alternate headlines/phrasing. Utilizes React states, hooks/effects, props, API requests, parent/child components, conditional rendering, web accessibility, and performance optimizations. Integrated with Anthropic\'s Claude API to give relevant feeback on user-submitted headlines.',
          imageUrl:
            'https://i.ibb.co/SX2VNnTQ/Screenshot-2025-05-13-at-1-22-20-PM.png',
          link: 'https://headlineoptimizer.playcode.io',
        },
        {
          title: 'Word Grid Shuffle',
          description:
            'Built a React game from scratch that lets users find words in a shuffled grid of letters. Words are verified with a dictionary API integration. Utilizes React states, props, API requests, parent/child components, conditional rendering, web accessibility, and perfomance optimizations. Find valid english words while the game keeps track of a score based on the length of the words found. Found words are displayed and filtered out. Users can restart the game to get a new grid of letters and reset score/found words.',
          imageUrl:
            'https://i.ibb.co/Ldk33Ks9/Screenshot-2025-05-01-at-11-39-03-AM.png',
          link: 'https://wordgridshuffle.playcode.io',
        },
        {
          title: 'Anagram Attack',
          description:
            'Built a React game from scratch that lets users find anagrams from a randomly generated word. Words are verified with a dictionary API integration and algorithm to verify valid anagrams. Utilizes React states, props, API requests, parent/child components, conditional rendering, web accessibility, and perfomance optimizations. The game updates score based on the length of anagram found. Found words are displayed and filtered out from future guesses.',
          imageUrl:
            'https://i.ibb.co/VWyWXJ6d/Screenshot-2025-05-15-at-3-33-45-PM.png',
          link: 'https://anagramattack.playcode.io',
        },
        {
          title: 'Lights Out',
          description:
            'Built a React game from scratch that lets users turn on/off light panels until all the lights are "out." Utilizes React states, props, matrix computations, parent/child components, conditional rendering, web accessibility, and performance optimizations. Game keeps track of the number moves made by the player to keep a running score. Integrated with React Confetti to create an effect when the game is won. Players can restart the game to get a new grid and reset their move count. Implemented in TypeScript',
          imageUrl:
            'https://i.ibb.co/Kp7rWkrS/Screenshot-2025-05-01-at-5-42-25-PM.png',
          link: 'https://lightsout.playcode.io',
        },
        {
          title: 'Quizzicle',
          description:
            'Built a React game from scratch that lets users answer trivia questions via Open Trivia Database API. Utilizes React states, hooks/effects, props, API requests, parent/child components, conditional rendering, web accessibility, and performance optimizations. Answer multiple choice general trivia questions (live pulled from a database of over 4,000 questions) while the game keeps track of how many you get right/wrong.',
          imageUrl:
            'https://i.ibb.co/HTZf2GqW/Screenshot-2025-04-30-at-2-46-39-PM.png',
          link: 'https://quizzicle.playcode.io',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'karim-noorani',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'karimnoorani21@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'React.js',
    'JavaScript',
    'HTML',
    'TypeScript',
    'Python',
    'Node.js',
    'C++',
    'C#',
    'SQL',
    'Git',
    'CSS',
    'AWS'
  ],
  experiences: [
    {
      company: 'Stacker',
      position: 'Software Engineer',
      from: 'November 2022',
      to: 'Present',
      companyLink: 'https://stacker.com',
    },
    {
      company: 'USA Today Network',
      position: 'Data Journalism Intern',
      from: 'June 2022',
      to: 'September 2022',
      companyLink: 'https://www.usatoday.com',
    },
    {
      company: 'In These Times',
      position: 'Editorial Intern',
      from: 'September 2021',
      to: 'December 2021',
      companyLink: 'https://inthesetimes.com',
    },
    {
      company: 'Sports Illustrated',
      position: 'Editorial Intern',
      from: 'March 2021',
      to: 'June 2021',
      companyLink: 'https://www.si.com',
    }
  ],
  certifications: [
    // {
    //   name: 'Lorem ipsum',
    //   body: 'Lorem ipsum dolor sit amet',
    //   year: 'March 2022',
    //   link: 'https://example.com',
    // },
  ],
  educations: [
    {
      institution: 'Northwestern University',
      degree: 'Bachelor of Arts in Computer Science ',
      from: '2018',
      to: '2022',
    },
    {
      institution: 'Northwestern University (Medill School of Journalism)',
      degree: 'Bachelor of Science in Journalism',
      from: '2018',
      to: '2022',
    },
  ],
  publications: [
    {
      title: 'Restaurant inspections in [metro]',
      conferenceName: '',
      journalName: 'USA Today Network',
      authors: '',
      link: 'https://www.palmbeachpost.com/story/news/2022/11/03/health-inspections-10-palm-beach-county-restaurants-cited-for-pests/69605044007/',
      imageUrl:'https://www.theledger.com/gcdn/presto/2022/08/31/USAT/243dbb43-ea4a-4fd2-918d-70dc9e6399a9-Anna_Jones_Food173recaption.JPG?width=1320&height=882&fit=crop&format=pjpg&auto=webp',
      description:
        'I pitched and created an automated restaurant inspection story that localized government data for counties in Florida. Published across dozens of Gannett newspapers every week. Series earned company-wide recognition for achieving a high rate of newspaper subscriber conversion.',
    },
    {
      title: 'Top 25 songs in [metro] this past week',
      conferenceName: '',
      journalName: 'Stacker',
      authors: '',
      link: 'https://stacker.com/stories/california/los-angeles/top-25-songs-los-angeles-shazam-past-week',
      imageUrl:'https://static.stacker.com/s3fs-public/styles/sar_screen_maximum_large/s3/ShazamPH5Q.png',
      description:
        'I applied web scraping, data analysis, and natural language generation using data from Shazam to create a series on the most popular songs across the US. Leveraged automation and designed algorithms to generate automated insights for 151 unique local versions sent to news partners.',
    },
    {
      title: 'Best video game released the year you graduated high school',
      conferenceName: '',
      journalName: 'Stacker',
      authors: '',
      link: 'https://stacker.com/stories/art-culture/best-video-game-released-year-you-graduated-high-school',
      imageUrl:'https://static.stacker.com/s3fs-public/styles/sar_screen_maximum_large/s3/5A9B3HA_0.JPEG',
      description:
        'I programmatically sifted through raw IMDB data to find the best video game released each year. Implemented dynamic scoring and review cutoff algorithms to clean data and filter list.',
    },
    {
      title: 'These names are more popular across the pond',
      conferenceName: '',
      journalName: 'Stacker',
      authors: '',
      link: 'https://stacker.com/stories/family/these-names-are-more-popular-across-pond',
      imageUrl:'https://static.stacker.com/s3fs-public/styles/sar_screen_maximum_large/s3/MPNAthePIALG_0.png',
      description:
        'I programmatically aggregated and analyzed baby name data to find the most unique names across the US and UK. Data was transformed into chart to visualize gap between the two countries.',
    },
    {
      title: 'Biggest March Madness upsets',
      conferenceName: '',
      journalName: 'Stacker',
      authors: '',
      link: 'https://stacker.com/stories/basketball/biggest-march-madness-upsets-1982',
      imageUrl:'https://static.stacker.com/s3fs-public/marchmadnessaverages18upsetsinlast45yearsX6EK.png',
      description:
        'I pitched and created a data analysis to find the biggest March Madness upsets using web scraping. Aggregate data was transformed into visualization charting upsets since 1979.',
    },
    {
      title: 'Most successful teams in Women\'s World Cup',
      conferenceName: '',
      journalName: 'Stacker',
      authors: '',
      link: 'https://stacker.com/stories/sports/10-most-successful-countries-womens-world-cup-history',
      imageUrl:'https://static.stacker.com/s3fs-public/styles/slide_desktop/s3/2023-06/revised-world-cup-chart.png',
      description:
        'I programmatically compiled and created a ranking of the most sucessful countries in the Women\'s World Cup. Aggregate data was transformed into visualization illustrating finishes by each respective country.',
    }
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,

  enablePWA: true,
};

export default CONFIG;
