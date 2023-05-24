import React from "react";
import { Line } from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/store";
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
import { useQuery } from "@tanstack/react-query"
import { getCheckInSurveyData, getCheckInStatus, getMoodStressZScores } from "../api/user";
import ClipLoader from "react-spinners/ClipLoader";
import "../styles/UserDashboard.css";

ChartJS.register(CategoryScale, LinearScale, PointElement,
    LineElement, Title, Tooltip, Legend, annotationPlugin);

const UserDashboard = () => {
    const uid = useAuthStore(store => store.user.uid);
    const navigate = useNavigate();

    const surveyQuery = useQuery({
        queryKey: ["checkInSurveys", uid],
        queryFn: () => getCheckInSurveyData(uid),
    })

    const checkInStatusQuery = useQuery({
        queryKey: ["checkInStatus", uid],
        queryFn: () => getCheckInStatus(uid),
    })

    const zScoresQuery = useQuery({
        queryKey: ["zScores", uid],
        queryFn: () => getMoodStressZScores(uid),
    })

    if (surveyQuery.isLoading || checkInStatusQuery.isLoading || zScoresQuery.isLoading) {
        return (
            <div className="loading">
                <ClipLoader loading={zScoresQuery.isLoading} size={100} aria-label="Loading Spinner" />
            </div>
        )
    }

    return (
        <div className='dashboard-main'>
            <div className='dashboard-navigate'>
                <h1>Navigate to Daily Check-In</h1>
                <button onClick={() => navigate("/checkin")} disabled={checkInStatusQuery.data}>
                    Click Here
                </button>
            </div>
            <div>
                <Line options={moodStressOption} data={getMoodStressLineData(surveyQuery.data?.moods, surveyQuery.data?.stress)} />
            </div>
            <div>
                <Line options={questionOption} data={getQuestionLineData(surveyQuery.data?.moods, { awareness: surveyQuery.data?.awareness, reactivity: surveyQuery.data?.reactivity, reappraisal: surveyQuery.data?.reappraisal, })} />
            </div>
            <div>
                <Line options={getMoodStressBarOption(zScoresQuery.data?.mood, 'Your Mood Z-Score Distribution')} data={standardNormalData} />
            </div>
            <div>
                <Line options={getMoodStressBarOption(zScoresQuery.data?.mood, 'Your Stress Z-Score Distribution')} data={standardNormalData} />
            </div>
        </div>
    );


};

export default UserDashboard;
