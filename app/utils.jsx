export const fetchData = async () => {
  try {
    const baseUrl =
      process.env.NODE_ENV === "production"
        ? "https://batch-system-assignment-git-main-faiz-alis-projects.vercel.app"
        : "http://localhost:3000";

    const response = await fetch(`${baseUrl}/data.json`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
