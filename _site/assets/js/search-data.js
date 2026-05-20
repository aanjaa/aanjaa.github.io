// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "news-started-as-a-student-researcher-at-google-deepmind-in-london",
          title: 'Started as a Student Researcher at Google DeepMind in London.',
          description: "",
          section: "News",},{id: "news-presented-algorithm-discovery-with-llms-paper-at-colm-2025-in-montreal",
          title: 'Presented Algorithm Discovery With LLMs paper at COLM 2025 in Montreal.',
          description: "",
          section: "News",},{id: "news-selected-for-forbes-30u30-in-slovenia-in-science-amp-amp-tech-category",
          title: 'Selected for Forbes 30u30 in Slovenia in Science&amp;amp;amp;Tech category.',
          description: "",
          section: "News",},{
        id: 'social-googlescholar',
        title: 'Googlescholar',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-github',
        title: 'Github',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'Linkedin',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-twitter',
        title: 'Twitter',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:{"%6E%61%6D%65" => "%61%6E%6A%61.%73%75%72%69%6E%61 [%61%74] %65%70%66%6C.%63%68"}", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },];
