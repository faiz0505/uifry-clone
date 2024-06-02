export const fetchData = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data.json`);
    const data = await res.json();
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    // console.log(error);
    throw new Error(error);
  }
};
