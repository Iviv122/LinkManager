export default async function addLink({
    name,
    url,
    tag,
  }: {
    name: string;
    url: string;
    tag: string;
  }) {
    const postUrl = `http://localhost:3000/items`;
    try {
      const json = {name, url, tag };
      console.log(json);
      const response = await fetch(postUrl, {
        method: "POST",
        body: JSON.stringify(json),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error: any) {
      console.error(error.message);
      throw error;
    }
  }