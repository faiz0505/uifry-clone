export const fetchData = async () => {
  try {
    const res = await fetch(`/data.json`);
    const data = await res.json();
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    // console.log(error);
    throw new Error(error);
  }
};
