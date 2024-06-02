export const fetchData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/data`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const jsonResponse = await response.json();

    return jsonResponse.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
