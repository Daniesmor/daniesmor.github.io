// don't remove the above lines
// they are required to make the code work

// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/gsyc.urjc.es/~daniesmor/public_html/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gsyc.urjc.es/~daniesmor/public_html/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gsyc.urjc.es/~daniesmor/public_html/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gsyc.urjc.es/~daniesmor/public_html/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gsyc.urjc.es/~daniesmor/public_html/cv/";
          },
        },{
        id: 'socials-email',
        title: 'Send email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%61%6E%69%65%73%6D%6F%72@%67%73%79%63.%75%72%6A%63.%65%73", "_blank");
        },
      },{
        id: 'socials-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/daniesmor", "_blank");
        },
      },{
        id: 'socials-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/daniesmor", "_blank");
        },
      },{
        id: 'socials-x',
        title: 'X',
        description: 'Twitter',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/daniesmor", "_blank");
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
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];