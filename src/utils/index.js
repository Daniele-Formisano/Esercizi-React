import { useEffect } from "react";

// regola numero 1 per creare custom hook: usare il prefisso "use"
function useCustomHook() {
  // logica interna del nostro hool

  return {}; //qui ritorniamo le funzioni che vogliamo rendere disponibili nei nostri componenti
}

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
