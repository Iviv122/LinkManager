export default async function updateLinks({
  _id,
  name,
  url,
  tag,
}: {
  _id: string;
  name: string;
  url: string;
  tag: string;
}) {
  const postUrl = `http://localhost:3000/items/${_id}`;
  try {
    const json = { _id, name, url, tag };
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
