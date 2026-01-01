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
export const updateExam = async (id, data) => {
  try {
    const res = await fetch(`http://localhost:3000/api/exams/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result.exam;
  } catch (error) {
    alert("error" + error);
  }
};
export const deleteExam = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/exams/${id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    return result;
  } catch (error) {
    throw error;
  }
};
