import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import { doc, collection, getDoc, getDocs } from "firebase/firestore";
import { useStore } from "react-redux";
import db from "../db/index";
import formatDateString from "../helpers/formatDateString";
import { moodStressOption, questionOption } from "data/chartOptions";
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
import "../styles/UserDashboard.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const UserDashboard = () => {
    const uid = useStore().getState().auth.user?.uid;
    const [moodData, setMoodData] = useState({});
    const [stressData, setStressData] = useState({});
    const [questionData, setQuestionData] = useState({
        awareness: {},
        reactivity: {},
        reappraisal: {},
    });
    const [checkedIn, setCheckedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const dailyMoods = {};
            const dailyStress = {};
            const awareness = {};
            const reactivity = {};
            const reappraisal = {};

            const querySnapshot = await getDocs(collection(db, "profiles", uid, "checkIns"));

            querySnapshot.forEach(doc => {
                dailyMoods[formatDateString(doc.id)] = doc.data().mood;
                dailyStress[formatDateString(doc.id)] = doc.data().stress;
                awareness[formatDateString(doc.id)] = doc.data().thoughts.AW1;
                reactivity[formatDateString(doc.id)] = doc.data().thoughts.RA1;
                reappraisal[formatDateString(doc.id)] = doc.data().thoughts.RP1;
            });

            setMoodData(dailyMoods);
            setStressData(dailyStress);
            setQuestionData({
                awareness,
                reactivity,
                reappraisal,
            });
        };

        const fetchCheckedIn = async () => {
            const docSnap = await getDoc(doc(db, "profiles", uid));
            setCheckedIn(docSnap.data().checkin);
        };

        fetchData();
        fetchCheckedIn();
    }, [uid]);

    const moodStressLineData = {
        labels: Object.keys(moodData),
        datasets: [
            {
                label: "Daily Mood",
                data: Object.values(moodData),
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
            {
                label: "Daily Stress",
                data: Object.values(stressData),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
        ],
    };

    const questionLineData = {
        labels: Object.keys(moodData),
        datasets: [
            {
                label: "Awareness",
                data: Object.values(questionData.awareness),
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
                label: "Reactivity",
                data: Object.values(questionData.reactivity),
                borderColor: "rgb(75, 192, 192)",
                backgroundColor: "rgba(75, 192, 192, 0.5)",
            },
            {
                label: "Reappraisal",
                data: Object.values(questionData.reappraisal),
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
        ],
    };

    return (
        <div className='dashboard-main'>
            <div className='dashboard-navigate'>
                <h1>Navigate to Daily Check-In</h1>
                <button onClick={() => navigate("/checkin")} disabled={checkedIn}>
                    Click Here
                </button>
            </div>
            <div>
                <Line options={moodStressOption} data={moodStressLineData} />
            </div>
            <div>
                <Line options={questionOption} data={questionLineData} />
            </div>
        </div>
    );
};

export default UserDashboard;
