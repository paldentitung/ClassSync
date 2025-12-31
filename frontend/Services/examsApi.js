export const getExams = async () => {
  try {
    let res = await fetch("http://localhost:3000/api/exams");
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
