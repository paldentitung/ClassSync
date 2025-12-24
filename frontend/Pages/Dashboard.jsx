import React from "react";
import Header from "../Components/Header";
import { FaBook, FaClipboardList, FaTasks, FaCalendar } from "react-icons/fa";

const Dashboard = () => {
  return (
    <section>
      <Header title="Dashboard" />
      <div className="p-6 flex flex-col gap-5">
        <div>
          <span className="text-2xl">Welcome Back, Palden!</span>
        </div>

        {/* overview cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Total Subjects */}
          <div className="flex justify-between items-center bg-[#2765d9]/80 h-32 rounded-2xl px-5 py-3 text-white transition-all duration-300 shadow-md hover:shadow-lg">
            <div className="flex flex-col gap-3">
              <span className="text-sm md:text-lg">Total Subjects</span>
              <span className="text-2xl md:text-4xl">5</span>
            </div>
            <div>
              <FaBook size={30} />
            </div>
          </div>

          {/* Pending Assignments */}
          <div className="flex justify-between items-center bg-amber-500 h-32 rounded-2xl px-5 py-3 text-white transition-all duration-300 shadow-md hover:shadow-lg">
            <div className="flex flex-col gap-3">
              <span className="text-sm md:text-lg">Pending Assignments</span>
              <span className="text-2xl md:text-4xl">12</span>
            </div>
            <div>
              <FaClipboardList size={30} />
            </div>
          </div>

          {/* Completed Assignments */}
          <div className="flex justify-between items-center bg-[#69ab1f] h-32 rounded-2xl px-5 py-3 text-white transition-all duration-300 shadow-md hover:shadow-lg">
            <div className="flex flex-col gap-3">
              <span className="text-sm md:text-lg">Completed Assignments</span>
              <span className="text-2xl md:text-4xl">6</span>
            </div>
            <div>
              <FaTasks size={30} />
            </div>
          </div>
        </section>

        {/*  */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Left Card: Today's Classes */}
          <div className="col-span-1 md:col-span-1 shadow-md bg-white p-4 rounded-xl flex flex-col gap-4">
            <span className="text-lg font-semibold text-gray-800">
              Today's Classes
            </span>
            <div className="flex flex-col gap-2">
              {[
                {
                  time: "10:00 AM",
                  subject: "Data Structures",
                  prof: "Prof. Smith",
                },
                { time: "11:00 AM", subject: "Algorithms", prof: "Prof. Doe" },
                {
                  time: "12:00 PM",
                  subject: "Database Systems",
                  prof: "Prof. Lee",
                },
              ].map((cls, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center p-3 rounded-md hover:bg-gray-100 transition"
                >
                  <div className="flex gap-2 items-center">
                    <span className="font-medium text-gray-700">
                      {cls.time}
                    </span>
                    <span className="font-medium text-gray-900">
                      - {cls.subject}
                    </span>
                  </div>
                  <span className="text-gray-600">{cls.prof}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="col-span-1 md:col-span-2 shadow-md bg-white p-4 rounded-xl">
            <span className="text-lg font-semibold text-gray-800 mb-2 block">
              Announcements
            </span>
            <p className="text-gray-700">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              maxime reprehenderit nisi veritatis libero architecto ipsam
              recusandae, maiores rem laudantium deserunt consequuntur quos
              quae. Perferendis doloribus perspiciatis similique sapiente quis!
            </p>
          </div>

          {/*  */}
          <div className="col-span-1 md:col-span-1 shadow-md bg-white p-4 rounded-xl flex flex-col gap-4">
            <span className="text-lg font-semibold text-gray-800">
              Today's Classes
            </span>

            <div>
              <div className="flex justify-between items-center">
                <div className="flex  items-center gap-2">
                  <FaCalendar color="text-(--mainColor)" size={15} />
                  <span>Mathematics Midterm</span>
                </div>
                <div className="text-sm text-gray-500">Date:May 10,2024</div>
              </div>

              <div className="flex  flex-col gap-3 p-2 ">
                <span className="bg-(--mainColor) w-38 px-7 py-2 text-white rounded-md">
                  in 14 days
                </span>
                <div className="flex gap-2">
                  <span className="border border-gray-500 p-2 rounded-md text-sm">
                    14 Days
                  </span>
                  <span className="border border-gray-500 p-2 rounded-md text-sm">
                    03 hours
                  </span>
                  <span className="border border-gray-500 p-2 rounded-md text-sm">
                    12 min
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="col-span-1 md:col-span-2 shadow-md bg-white p-4 rounded-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            molestias aperiam suscipit, hic eos perferendis repudiandae ratione
            quasi, voluptatibus, sequi veniam mollitia laboriosam at sapiente
            error soluta maiores quam ducimus.
          </div>
        </section>
      </div>
    </section>
  );
};

export default Dashboard;
