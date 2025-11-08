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
  },{id: "nav-publications",
          title: "publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "projects-personalized-mhealth-control-systems-for-mhealth-interventions",
          title: 'Personalized mHealth: Control Systems for mHealth Interventions',
          description: "[&quot;Designed and implemented a system identification framework to analyze physical activity behavior using personalized, temporally dense data. Applied Singular Spectrum Analysis (SSA) to reveal that daily step count signals are composed of separable, uncorrelated components—each changing at different frequencies (trend, weekly, and multi-day cycles). Combined this with Model-on-Demand (MoD) estimation to capture nonlinear, context-sensitive dynamics in response to adaptive goals and walking notifications. Validated the approach on data from the NIH-funded JustWalk JITAI study, showing how behavioral responses vary based on need, opportunity, and receptivity.&quot;]",
          section: "Projects",handler: () => {
              window.location.href = "/projects/JWJITAI/";
            },},{id: "projects-llm-optimized-closed-loop-model-estimation",
          title: 'LLM Optimized Closed-Loop Model Estimation',
          description: "[&quot;Developed a model estimation pipeline using GPT-3.5 (ChatGPT-o3-mini) for closed-loop identification of physical parameters of an inverted pendulum system, including masses and segment lengths. The estimated model was integrated into a Model Predictive Controller (MPC) to stabilize the system. The LLM explored a highly nonlinear parameter space, balancing exploration and exploitation to minimize the controller’s cost function. Despite not converging to true physical values, the LLM identified parameter sets that yielded superior control performance. Simulations demonstrated effective system stabilization across iterations, with visual comparisons showing improved trajectory tracking and reduced error. The approach was extended to a single pendulum setup on a UR5 robotic arm, validating the method’s adaptability and robustness.&quot;]",
          section: "Projects",handler: () => {
              window.location.href = "/projects/LLM-closed-loop/";
            },},{id: "projects-personalized-mhealth-control-systems-for-mhealth-interventions",
          title: 'Personalized mHealth: Control Systems for mHealth Interventions',
          description: "[&quot;Designed and implemented a data-driven framework to personalize physical activity goals using system identification and three-degrees-of-freedom Kalman-filter based hybrid model predictive control (3DoF-KF HMPC) for a mobile health (mHealth) application with human in the loop. Built participant-specific behavioral models from smartwatch data and delivered adaptive step goals and rewards via a mobile app. Simulated closed-loop interventions under uncertainty using Monte Carlo methods, demonstrating robust performance and dynamic goal adjustment. This work was essential in the development and implementation of the first of its kind NIH-funded closed-loop preventative medicine intervention clinical trial, under the name of YourMove.&quot;]",
          section: "Projects",handler: () => {
              window.location.href = "/projects/YourMove/";
            },},{id: "projects-decentralized-control-dual-decomposition-for-smart-grid-optimization",
          title: 'Decentralized Control: Dual Decomposition for Smart Grid Optimization',
          description: "[&quot;Designed and implemented a distributed optimization framework to manage energy consumption across a smart grid with multiple subscribers and time slots. Subscriber-side convex optimization was performed using MATLAB and CVX, while grid-level coordination was achieved through dual decomposition and iterative updates of Lagrange multipliers. Parallel computing accelerated convergence, and data analysis confirmed effective load balancing and alignment with generation capacity.&quot;, &quot;Adapted from  P. Samadi, A.H. Mohsenian-Rad, R. Schober, V. W. S. Wong and J. Jatskevich, Optimal Real-Time Pricing Algorithm Based on Utility Maximization for Smart Grid, 2010 First IEEE International Conference on Smart Grid Communications, 2010, pp. 415-420&quot;]",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dual_decomposition/";
            },},{id: "projects-role-of-data-in-fine-tuning-llms-for-reasoning-tasks",
          title: 'Role of Data in Fine-Tuning LLMs for Reasoning Tasks',
          description: "[&quot;Empirically evaluated role of data construction and training recipes for finetuning of LLMs for reasoning tasks. The project created OpenThought finetuned models, whose early versions matched the DeepSeek-R1 performance on AIME and LiveCodeBench etc.\&quot;&quot;]",
          section: "Projects",handler: () => {
              window.location.href = "/projects/open_thoughts/";
            },},{id: "projects-llms-for-reinforcement-learning-prompted-policy-search-props",
          title: 'LLMs for Reinforcement Learning: Prompted Policy Search (ProPS)',
          description: "[&quot;Developed ProPS and ProPS+ to prompt LLMs for generating parameterized RL policies after linguistic and numerical reasoning. The iteratively improve through closed loop feedback to the LLM. Relevant contextual and semantic information about the task is also provided through prompting. Explored 15 different tasks and compared the results with state of the art RL methods. Currently working on finetuning to improve RL optimization capabilities of smaller sized LLMs.&quot;]",
          section: "Projects",handler: () => {
              window.location.href = "/projects/props/";
            },},{id: "projects-stochastic-optimization-renewable-energy-electric-grid-optimization",
          title: 'Stochastic Optimization: Renewable Energy Electric Grid Optimization',
          description: "[&quot;Developed and evaluated a randomized variant of the Progressive Hedging algorithm to efficiently solve large-scale multistage stochastic programming problems. Demonstrated significant computational speedups with minimal loss in solution quality, using hydroelectric power scheduling as a case study.&quot;]",
          section: "Projects",handler: () => {
              window.location.href = "/projects/stochastic_opt/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6D%65%6C%6D%69%73%74%69@%61%73%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/m-elmistiri", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/MohamedElMistiri", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=jFpEtzQAAAAJ&hl", "_blank");
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
