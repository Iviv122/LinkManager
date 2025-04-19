export default async function removeLink({ _id }: { _id: string }) {
  const deleteUrl = `http://localhost:3000/items/${_id}`;
  
  try {
    const json = { _id };
    const response = await fetch(deleteUrl, {
      method: "DELETE",
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
    console.error("Delete failed:", error.message);
    throw error;
  }
}
