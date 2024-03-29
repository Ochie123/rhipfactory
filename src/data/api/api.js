const URLS = {

    STACKS: "https://www.rhipfactory.online/api/stacks/",
    STACK: (id) => `https://www.rhipfactory.online/api/stacks/${id}`,

    HEALTHCARES: "https://www.rhipfactory.online/api/healthcares/",
    HEALTHCARE: (id) => `https://www.rhipfactory.online/api/healthcares/${id}`,


    PRIMARYSKILLS: "https://www.rhipfactory.online/api/primaryskills/",
    PRIMARYSKILL: (id) => `https://www.rhipfactory.online/api/primaryskills/${id}`,

  };
  
  const wrappedFetch = (...args) => {
    return fetch(...args).then((res) => {
      if (!res.ok) {
        throw new Error("Unauthorized");
      }
      return res.json();
    });
  };
  
  const get = (url) => wrappedFetch(url);
  const post = (url, data) =>
    wrappedFetch(url, { method: "POST", body: data && JSON.stringify(data) });
  const remove = (url) => wrappedFetch(url, { method: "DELETE" });
  

  const loadStacks = () => get(URLS.STACKS);
  const loadStack = (id) => get(URLS.STACK(id));
  
  
  const loadHealthcares = () => get(URLS.HEALTHCARES);
  const loadHealthcare = (uuid) => get(URLS.HEALTHCARE(uuid));

  const loadHackathons = () => get(URLS.HACKATHONS);
  const loadHackathon = (id) => get(URLS.STACK(id));

  const loadPrimaryskills = () => get(URLS.PRIMARYSKILLS);
  const loadPrimaryskill = (id) => get(URLS.PRIMARYSKILL(id));

  
  export {

  
    loadStacks,
    loadStack,
  
    loadHealthcares,
    loadHealthcare,
  
    loadHackathons,
    loadHackathon,

    loadPrimaryskills,
    loadPrimaryskill,
  };
  