const getMoodStressLineData = (moodData, stressData) => {
    return {
        labels: Object.keys(moodData),
        datasets: [
            {
                label: 'Daily Mood',
                data: Object.values(moodData),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'Daily Stress',
                data: Object.values(stressData),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };
};

const getQuestionLineData = (moodData, questionData) => {
    return {
        labels: Object.keys(moodData),
        datasets: [
            {
                label: 'Awareness',
                data: Object.values(questionData.awareness),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Reactivity',
                data: Object.values(questionData.reactivity),
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
            },
            {
                label: 'Reappraisal',
                data: Object.values(questionData.reappraisal),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
};

const standardNormalData = {
    labels: ['-3', '-2', '-1', '0', '1', '2', '3'],
    datasets: [
        {
            data: [0.0013, 0.0228, 0.1587, 0.3413, 0.1587, 0.0228, 0.0013],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            lineTension: 0.3,
        },
    ],
};

export { getMoodStressLineData, getQuestionLineData, standardNormalData };
