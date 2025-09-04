const buttons = document.querySelectorAll('.ProjectFilterBtn');
const categories = {
  ReactJs: document.querySelectorAll('#ReactJs'),
  VanillaJs: document.querySelectorAll('#VanillaJs'),
  BotJs: document.querySelectorAll('#BotJs'),
  Nextjs: document.querySelectorAll('#Nextjs')
};
const buttonMap = {
  Vanillas: 'VanillaJs',
  React: 'ReactJs',
  Bot: 'BotJs',
  All: 'All',
  Next: 'Nextjs'
};

// === Toggle Project Visibility ===
function toggleProjects(selectedCategory) {
  for (let category in categories) {
    categories[category].forEach(el => {
      const shouldShow = selectedCategory === 'All' || category === selectedCategory;
      el.classList.toggle('hidden', !shouldShow);
    });
  }
}

// === Toggle Active Button Styling ===
function toggleButtonStyles(activeId) {
  buttons.forEach(btn => {
    btn.classList.toggle('ProjectButtonActive', btn.id === activeId);
    btn.classList.toggle('ProjectNotButtonActive', btn.id !== activeId);
  });
}

// === Button Click Handling ===
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const selected = buttonMap[button.id];
    toggleProjects(selected);
    toggleButtonStyles(button.id);
  });
});

// === Project Descriptions on Hover ===
const hoverData = {
  weeveProject: {
    client: 'WEEVE',
    description: 'White Electrical and Electronics Ventures known as WEEVE is an independent company offering world class goods and services in Electrical and Electronics.'
  },
  WeatherBot: {
    client: 'Oyeleye Blessing',
    description: 'Weather Bot is a Telegram bot that gets real-time weather forecasts. Query format: <b>/city city name (e.g. oyo)</b>'
  },
  autoproctorProject: {
    client: 'AutoProctor',
    description: 'An examination platform where admins can set questions and students can answer them.'
  },
  vturechargeProject: {
    client: 'VtuRecharge',
    description: 'A VTU platform to buy data, airtime, and utility services like GOTV, DSTV, etc.'
  },
  // worldXplorer: {
  //   client: 'Cybuds',
  //   description: 'A unified travel booking platform for Flights, Hotels, Visa, Holidays, Loyalty, and more.'
  // },
  evotingProject: {
    client: "Inside Success",
    description: 'A voting platform where use can create voting rooms and share with their colleague to vote'
  },
  // dommyHeritage: {
  //   client: "D1st Class Heritage",
  //   description: `DomyHeritage is Nigeria's go-to platform for buying, renting, or leasing properties with verified listings, transparent pricing, and secure transactions`
  // },
  relokonnect: {
    client: "Relokonnect",
    description: `Relokonnect is a digital platform connecting renters with dream homes and landlords with ideal tenants.`
  }
}

for (let id in hoverData) {
  const el = document.querySelector(`#${id}`);
  const { client, description } = hoverData[id];

  el.addEventListener('mouseenter', () => {
    el.innerHTML = `
      <div>
        <h1 class="text-2xl my-1 animatecss animatecss-fast animatecss-backInUp">Client: ${client}</h1>
        <p class="animatecss animatecss-fast animatecss-backInUp">${description}</p>
      </div>
    `;
  });

  el.addEventListener('mouseleave', () => {
    el.innerHTML = '';
  });
}
