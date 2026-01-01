export const getExams = async () => {
  try {
    let res = await fetch("http://localhost:3000/api/exams");
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const createExam = async (examData) => {
  try {
    const res = await fetch("http://localhost:3000/api/exams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(examData),
    });

    const result = await res.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
