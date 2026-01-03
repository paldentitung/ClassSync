import React, { useContext } from "react";
import MainButton from "../../Components/MainButton";
import SecondaryButton from "../../Components/SecondaryButton";
import { ModalContext } from "../../Context/ModalContext";
import Modal from "../../Components/Modal";
const TeacherAssignment = ({ assignments }) => {
  const { setShowModal } = useContext(ModalContext);
  return (
    <>
      <div>
        <div className="flex  justify-between items-center mb-4">
          <span className="text-lg md:text-xl font-bold">Assignments</span>
          <MainButton
            name="Create Assignments"
            onClick={() => setShowModal(true)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  ">
          {assignments.map((assignment) => (
            <div
              key={assignment.id}
              className="flex  flex-col bg-white p-4 gap-3 rounded-2xl shadow transition-all duration-300 hover:shadow-md "
            >
              <div className="flex flex-col gap-1">
                <span className="font-semibold text-[18px]">
                  {assignment.title}
                </span>
                <span className="text-gray-700 text-sm">
                  {assignment.subject}
                </span>
              </div>

              <div className="flex justify-between items-center text-gray-400 text-sm flex-1">
                <span>{assignment.dueDate}</span>
                <span>{assignment.submissions} submissions</span>
              </div>

              <div className="flex justify-between items-center">
                <MainButton name="View Submissions" />
                <SecondaryButton name="Edit" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* modal */}
      <Modal>
        <form className="flex flex-col gap-5">
          {/* Assignment Title */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Assignment Title</label>
            <input
              type="text"
              name="title"
              placeholder="e.g. Algebra Homework"
              className="border-0 rounded-md ring-1 ring-(--mainColor)/60 p-3 focus:ring-2 focus:ring-(--mainColor) transition"
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
              className="border-0 rounded-md ring-1 ring-(--mainColor)/60 p-3 focus:ring-2 focus:ring-(--mainColor) transition"
              required
            />
          </div>

          {/* Due Date */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Due Date</label>
            <input
              type="date"
              name="dueDate"
              className="border-0 rounded-md ring-1 ring-(--mainColor)/60 p-3 focus:ring-2 focus:ring-(--mainColor) transition"
              required
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Description</label>
            <textarea
              name="description"
              placeholder="Write assignment instructions..."
              rows={4}
              className="border-0 rounded-md ring-1 ring-(--mainColor)/60 p-3 focus:ring-2 focus:ring-(--mainColor) transition resize-none"
            />
          </div>

          {/* Status */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Status</label>
            <select
              name="status"
              className="border-0 rounded-md ring-1 ring-(--mainColor)/60 p-3 focus:ring-2 focus:ring-(--mainColor) bg-white transition"
            >
              <option value="Active">Active</option>
              <option value="Closed">Closed</option>
              <option value="Draft">Draft</option>
            </select>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <SecondaryButton
              name="Cancel"
              type="button"
              onClick={() => setShowModal(false)}
            />
            <MainButton name="Create Assignment" type="submit" />
          </div>
        </form>
      </Modal>
    </>
  );
};

export default TeacherAssignment;
