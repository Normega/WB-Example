const surveyJSON = {
  title: new Date().toLocaleDateString() + " Daily Check-in",
  showProgressBar: "top",
  pages: [
    // {
    // 	navigationTitle: 'Wellbeing Survey',
    // 	elements: [
    // 		{
    // 			name: 'wellbeing-definition',
    // 			title: 'What does the term "Wellbeing" mean to you? How would you define it?',
    // 			type: 'comment',
    // 		},
    // 		{
    // 			name: 'wellbeing-domain-ranking',
    // 			title: 'Please rank the following domains that is most important to your personal wellbeing.',
    // 			isRequired: true,
    // 			type: 'ranking',
    // 			choices: [
    // 				{ value: 'Happiness' },
    // 				{ value: 'Physical Health' },
    // 				{ value: 'Mental Health' },
    // 				{ value: 'Close Social Relationship' },
    // 				{ value: 'Financial and Material Stability' },
    // 				{ value: 'Employment' },
    // 				{ value: 'Family' },
    // 				{ value: 'Meaning and Purpose of Life' },
    // 				{ value: 'Self-Esteem' },
    // 			],
    // 		},
    // 	],
    // },
    {
      elements: [
        {
          type: "imagepicker",
          name: "mood",
          title: "How would you rate your mood today?",
          choices: [
            {
              value: "0",
              imageLink: "./images/8.svg",
            },
            {
              value: "1",
              imageLink: "./images/7.svg",
            },
            {
              value: "2",
              imageLink: "./images/6.svg",
            },
            {
              value: "3",
              imageLink: "./images/5.svg",
            },
            {
              value: "4",
              imageLink: "./images/4.svg",
            },
            {
              value: "5",
              imageLink: "./images/3.svg",
            },
            {
              value: "6",
              imageLink: "./images/2.svg",
            },
            {
              value: "7",
              imageLink: "./images/1.svg",
            },
          ],
          imageHeight: "100",
          imageWidth: "100",
          isRequired: true,
        },
        {
          name: "stress",
          type: "rating",
          title: "How would you rate your stress level today?",
          minRateDescription: "Not Stressed",
          maxRateDescription: "Extremely Stressed",
          rateMax: 10,
          isRequired: true,
        },
        {
          name: "awareness",
          type: "rating",
          title: "To what extent are you aware of your thoughts and emotions?",
          minRateDescription: "Not Aware At All",
          maxRateDescription: "Extremely Aware",
          rateMax: 7,
          isRequired: true,
        },
        {
          name: "reactivity",
          type: "rating",
          title: "To what extent do you wish you could change how you feel?",
          minRateDescription: "Not Wish At All",
          maxRateDescription: "Extremely Wish",
          rateMax: 7,
          isRequired: true,
        },
        {
          name: "reflection",
          title: "Please write your daily reflection for today.",
          type: "comment",
          isRequired: true,
        },
      ],
    },
    // {
    //   navigationTitle: "Thoughts and Experiences",
    //   elements: [
    //     {
    //       name: "thoughts",
    //       type: "matrix",
    //       title:
    //         "Below you will find a list of statements concerned with your thoughts and experiences. Please use the scale below to make your choice.",
    //       columns: [
    //         {
    //           value: 5,
    //           text: "Strongly agree",
    //         },
    //         {
    //           value: 4,
    //           text: "Agree",
    //         },
    //         {
    //           value: 3,
    //           text: "Neutral",
    //         },
    //         {
    //           value: 2,
    //           text: "Disagree",
    //         },
    //         {
    //           value: 1,
    //           text: "Strongly disagree",
    //         },
    //       ],
    //       rows: [
    //         {
    //           value: "DC1",
    //           text: "I am able to watch myself thinking.",
    //         },
    //         {
    //           value: "DC2",
    //           text: "I can watch my thoughts and emotions drift by like leaves on a stream.",
    //         },
    //         {
    //           value: "DC3",
    //           text: "I can watch my thoughts and emotions come and go like clouds.",
    //         },
    //         {
    //           value: "RP1",
    //           text: "When I wanted to feel more positive emotion, I changed the way I was thinking about the situation.",
    //         },
    //         {
    //           value: "RP2",
    //           text: "I try to think of positive consequences from my experiences.",
    //         },
    //       ],
    //       alternateRows: true,
    //       isAllRowRequired: true,
    //     },
    //   ],
    //   showQuestionNumbers: "off",
    // },
  ],
  showQuestionNumbers: "false",
};

export default surveyJSON;
