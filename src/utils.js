export async function funql() {
  const endpoint = process.env.FUNQL_ENDPOINT;
  const url = `${endpoint}/funql-api`;
  console.log("URL", url);
  const rawResponse = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      namespace: "__funql",
      name: "getMethodNames"
    })
  });
  return await rawResponse.json();
}
