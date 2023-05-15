import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";
import { useNavigate } from "react-router-dom";
import { doc, collection, getDoc, getDocs } from "firebase/firestore";
import { useStore } from "react-redux";
import db from "../db/index";
import formatDateString from "../helpers/formatDateString";
import { getMoodStressLineData, getQuestionLineData, standardNormalData } from "data/chartData";
import { moodStressOption, questionOption, getMoodStressBarOption } from "data/chartOptions";
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
import { calculateMean, calculateSD } from "../helpers/calculateDistribution";
import "../styles/UserDashboard.css";

ChartJS.register(CategoryScale, LinearScale, PointElement,
    LineElement, Title, Tooltip, Legend, annotationPlugin);

const UserDashboard = () => {
    const uid = useStore().getState().auth.user?.uid;
    const [moodData, setMoodData] = useState({});
    const [stressData, setStressData] = useState({});
    const [questionData, setQuestionData] = useState({
        awareness: {},
        reactivity: {},
        reappraisal: {},
    });
    const [zScores, setZScores] = useState({});
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

        const fetchZScores = async () => {
            // retrieve all mood and stress data across all users
            const allMoodData = [];
            const allStressData = [];
            const profiles = await getDocs(collection(db, "profiles"));

            for (const profile of profiles.docs) {
                const checkIns = await getDocs(collection(db, "profiles", profile.id, "checkIns"));
                checkIns.forEach(doc => {
                    allMoodData.push(doc.data().mood);
                    allStressData.push(doc.data().stress);
                })
            }

            // calculate mean and standard deviation
            const moodMean = calculateMean(allMoodData);
            const moodSD = calculateSD(allMoodData, moodMean);
            const stressMean = calculateMean(allStressData);
            const stressSD = calculateSD(allStressData, stressMean);

            // calculate z-score for each user's mood and stress data
            const zScores = {};

            const userCheckIns = await getDocs(collection(db, "profiles", uid, "checkIns"));
            const latestMood = userCheckIns.docs[userCheckIns.docs.length - 1].data().mood;
            const latestStress = userCheckIns.docs[userCheckIns.docs.length - 1].data().stress;

            zScores.mood = (latestMood - moodMean) / moodSD;
            zScores.stress = (latestStress - stressMean) / stressSD;

            setZScores(zScores);
        }

        const fetchCheckedIn = async () => {
            const docSnap = await getDoc(doc(db, "profiles", uid));
            setCheckedIn(docSnap.data().checkin);
        };

        fetchData();
        fetchZScores();
        fetchCheckedIn();
    }, [uid]);

    return (
        <div className='dashboard-main'>
            <div className='dashboard-navigate'>
                <h1>Navigate to Daily Check-In</h1>
                <button onClick={() => navigate("/checkin")} disabled={checkedIn}>
                    Click Here
                </button>
            </div>
            <div>
                <Line options={moodStressOption} data={getMoodStressLineData(moodData, stressData)} />
            </div>
            <div>
                <Line options={questionOption} data={getQuestionLineData(moodData, questionData)} />
            </div>
            <div>
                {zScores.mood != null && <Line options={getMoodStressBarOption(zScores.mood, 'Your Mood Z-Score Distribution')} data={standardNormalData} />}
            </div>
            <div>
                {zScores.stress != null && <Line options={getMoodStressBarOption(zScores.stress, 'Your Stress Z-Score Distribution')} data={standardNormalData} />}
            </div>
        </div>
    );
};

export default UserDashboard;
