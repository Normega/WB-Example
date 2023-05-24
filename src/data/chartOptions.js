const moodStressOption = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'Your Happiness and Stress Level',
            font: {
                size: 15,
            },
        },
    },
};

const questionOption = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'Awareness, Reactivity, and Reappraisal',
            font: {
                size: 15,
            },
        },
    },
};

const getMoodStressBarOption = (zScore, title) => {
    const scaled = zScore + 3;

    return (
        {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                },
                title: {
                    display: true,
                    text: title,
                    font: {
                        size: 15,
                    },
                },
                annotation: {
                    annotations: [
                        {
                            id: 'a-line-1',
                            type: 'line',
                            mode: 'horizontal',
                            scaleID: 'x',
                            value: scaled,
                            backgroundColor: 'rgb(53, 162, 235)',
                            borderColor: 'rgb(53, 162, 235)',
                            borderWidth: 3,
                            label: {
                                display: true,
                                content: `You are here: z-score of ${zScore.toFixed(2)}`,
                                position: '40%',
                            },
                        },
                    ],
                },
            },
        }
    );
};

export { moodStressOption, questionOption, getMoodStressBarOption };
