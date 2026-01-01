import React, { useState, useContext } from "react";
import MainButton from "../../Components/MainButton";
import SecondaryButton from "../../Components/SecondaryButton";
import {
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import Modal from "../../Components/Modal";
import { ModalContext } from "../../Context/ModalContext";
import { createExam, deleteExam, updateExam } from "../../Services/examsApi";
import toast from "react-hot-toast";

const TeacherExams = ({ exams, setExams }) => {
  const { setShowModal } = useContext(ModalContext);
  const [editingExam, setEditingExam] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    date: "",
    time: "",
    duration: "",
    totalMarks: "",
    status: "Upcoming",
  });

  // Convert 12-hour format to 24-hour format
  const to24Hour = (timeStr) => {
    if (!timeStr) return "";
    const [time, modifier] = timeStr.split(" ");
    if (!modifier) return time; // already 24-hour
    let [hours, minutes] = time.split(":").map(Number);
    if (modifier === "PM" && hours !== 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEdit = (exam) => {
    setEditingExam(exam);
    setFormData({
      name: exam.name || "",
      subject: exam.subject || "",
      date: exam.date || "",
      time: to24Hour(exam.time) || "",
      duration: exam.duration || "",
      totalMarks: exam.totalMarks || "",
      status: exam.status || "Upcoming",
    });
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingExam) {
        const updatedExam = await updateExam(editingExam.id, formData);
        setExams((prev) =>
          prev.map((exam) => (exam.id === editingExam.id ? updatedExam : exam))
        );

        toast.success("Exam updated successfully!");
        setEditingExam(null);
      } else {
        const res = await createExam(formData);
        setExams((prev) => [...prev, res.exam]);
        toast.success("Exam created successfully!");
      }

      setFormData({
        name: "",
        subject: "",
        date: "",
        time: "",
        duration: "",
        totalMarks: "",
        status: "Upcoming",
      });

      setShowModal(false);
    } catch (error) {
      alert("Error: " + error);
    }
  };

  const handleDelete = async (id) => {
    try {
      if (!window.confirm("Are you sure you want to delete this exam?")) return;
      await deleteExam(id);
      setExams((prev) => prev.filter((exam) => exam.id !== id));
      toast.success("Exam deleted successfully!");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <div>
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-3xl font-bold">Exams</h2>
          <MainButton
            name="Create Exam"
            onClick={() => {
              setEditingExam(null);
              setFormData({
                name: "",
                subject: "",
                date: "",
                time: "",
                duration: "",
                totalMarks: "",
                status: "Upcoming",
              });
              setShowModal(true);
            }}
          />
        </div>

        {/* Exams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exams.map((exam) => (
            <div
              key={exam.id}
              className="bg-white p-5 md:p-6 rounded-2xl shadow hover:shadow-lg transition flex flex-col gap-4"
            >
              {/* Exam Name & Subject */}
              <div>
                <h3 className="text-lg font-semibold">{exam.name}</h3>
                <p className="text-sm text-gray-600">{exam.subject}</p>
              </div>

              {/* Exam Details */}
              <div className="text-sm text-gray-500 flex flex-col gap-1">
                <p className="flex items-center gap-2">
                  <FaCalendarAlt className="text-gray-400" /> {exam.date}
                </p>
                <p className="flex items-center gap-2">
                  <FaClock className="text-gray-400" /> {exam.time} (
                  {exam.duration})
                </p>
                <p>
                  Total Marks:{" "}
                  <span className="font-medium">{exam.totalMarks}</span>
                </p>
                <p className="flex items-center gap-2">
                  Status:{" "}
                  <span
                    className={`font-semibold ${
                      exam.status === "Upcoming"
                        ? "text-orange-500"
                        : exam.status === "Completed"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {exam.status === "Completed" ? (
                      <FaCheckCircle className="inline" />
                    ) : exam.status === "Upcoming" ? (
                      "⏳"
                    ) : (
                      <FaTimesCircle className="inline" />
                    )}
                    {` ${exam.status}`}
                  </span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-auto">
                <MainButton
                  name="Delete"
                  className="flex-1"
                  onClick={() => handleDelete(exam.id)}
                />
                <SecondaryButton
                  name="Edit"
                  className="flex-1"
                  onClick={() => handleEdit(exam)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Modal>
        <h3 className="text-2xl font-semibold mb-6 text-center">
          {editingExam ? "Edit Exam" : "Create New Exam"}
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Exam Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Exam Name</label>
            <input
              type="text"
              name="name"
              placeholder="e.g. Mid Term Examination"
              value={formData.name}
              onChange={handleChange}
              className="border-0 rounded-md ring-1 ring-(--mainColor)/60 p-3 focus:ring-2 focus:ring-(--mainColor) focus:bg-white/70 transition"
              required
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="e.g. Mathematics"
              value={formData.subject}
              onChange={handleChange}
              className="border-0 rounded-md ring-1 ring-(--mainColor)/60 p-3 focus:ring-2 focus:ring-(--mainColor) focus:bg-white/70 transition"
              required
            />
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Exam Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="border-0 rounded-md ring-1 ring-(--mainColor)/60 p-3 focus:ring-2 focus:ring-(--mainColor) transition"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Start Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="border-0 rounded-md ring-1 ring-(--mainColor)/60 p-3 focus:ring-2 focus:ring-(--mainColor) transition"
                required
              />
            </div>
          </div>

          {/* Duration & Marks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Duration</label>
              <input
                type="text"
                name="duration"
                placeholder="e.g. 2 hours"
                value={formData.duration}
                onChange={handleChange}
                className="border-0 rounded-md ring-1 ring-(--mainColor)/60 p-3 focus:ring-2 focus:ring-(--mainColor) transition"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Total Marks</label>
              <input
                type="number"
                name="totalMarks"
                placeholder="e.g. 100"
                value={formData.totalMarks}
                onChange={handleChange}
                className="border-0 rounded-md ring-1 ring-(--mainColor)/60 p-3 focus:ring-2 focus:ring-(--mainColor) transition"
                required
              />
            </div>
          </div>

          {/* Status */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="border-0 rounded-md ring-1 ring-(--mainColor)/60 p-3 focus:ring-2 focus:ring-(--mainColor) transition bg-white"
            >
              <option value="Upcoming">Upcoming</option>
              <option value="Completed">Completed</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <SecondaryButton
              name="Cancel"
              type="button"
              onClick={() => setShowModal(false)}
            />
            <MainButton
              name={editingExam ? "Update Exam" : "Create Exam"}
              type="submit"
            />
          </div>
        </form>
      </Modal>
    </>
  );
};

export default TeacherExams;
