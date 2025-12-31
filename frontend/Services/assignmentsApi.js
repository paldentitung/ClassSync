export const getAssignments = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/assignments");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
