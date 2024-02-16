const URLS = {

    STACKS: "http://127.0.0.1:8000/api/stacks/",
    STACK: (id) => `http://127.0.0.1:8000/api/stacks/${id}`,

    HEALTHCARES: "http://127.0.0.1:8000/api/healthcares/",
    HEALTHCARE: (id) => `http://127.0.0.1:8000/api/healthcares/${id}`,


    PRIMARYSKILLS: "http://127.0.0.1:8000/api/primaryskills/",
    PRIMARYSKILL: (id) => `http://127.0.0.1:8000/api/primaryskills/${id}`,

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
  