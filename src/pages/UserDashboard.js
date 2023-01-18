import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { collection, getDocs } from "firebase/firestore";
import { useStore } from "react-redux";
import db from "../db/index";
import formatDateString from "../helpers/formatDateString";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const UserDashboard = () => {
  const uid = useStore().getState().auth.user?.uid;
  const [moodData, setMoodData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const dailyMoods = {};
      const querySnapshot = await getDocs(
        collection(db, "profiles", uid, "checkIns")
      );
      querySnapshot.forEach((doc) => {
        dailyMoods[formatDateString(doc.id)] = doc.data().mood;
      });
      setMoodData(dailyMoods);
    };
    fetchData();
  });

  const lineData = {
    labels: Object.keys(moodData),
    datasets: [
      {
        label: "Daily Mood",
        data: Object.values(moodData),
      },
    ],
  };

  return (
    <div>
      <Line data={lineData} />
    </div>
  );
};

export default UserDashboard;
