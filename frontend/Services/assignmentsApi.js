export const getAssignments = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/assignments");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const createAssignment = async (data) => {
  try {
    const res = await fetch("http://localhost:3000/api/assignments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    return result;
  } catch (error) {
    alert("error" + error);
  }
};
export const deleteAssignments = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/assignments/${id}`, {
      method: "DELETE",
    });
    await res.json();
    return res;
  } catch (error) {
    alert("error" + error);
  }
};
