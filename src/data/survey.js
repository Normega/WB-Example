export function getSurveyJSON(quarterlyCheckin) {
    return {
        title: new Date().toLocaleDateString() + " Daily Check-in",
        progressBarType: "buttons",
        showProgressBar: "top",
        pages: [
            quarterlyCheckin
                ? {}
                : {
                      navigationTitle: "Wellbeing Survey",
                      elements: [
                          {
                              name: "wellbeingDefinition",
                              title: 'What does the term "Wellbeing" mean to you? How would you define it?',
                              type: "comment",
                              isRequired: true,
                          },
                          {
                              name: "wellbeingDomainRanking",
                              title: "Please rank the following domains that is most important to your personal wellbeing.",
                              isRequired: true,
                              type: "ranking",
                              choices: [
                                  { value: "Happiness" },
                                  { value: "Physical Health" },
                                  { value: "Mental Health" },
                                  { value: "Close Social Relationship" },
                                  { value: "Financial and Material Stability" },
                                  { value: "Employment" },
                                  { value: "Family" },
                                  { value: "Meaning and Purpose of Life" },
                                  { value: "Self-Esteem" },
                              ],
                          },
                          {
                              name: "reminder",
                              title: "When would you like to get notified?",
                              type: "dropdown",
                              isRequired: true,
                              choices: [
                                  "6:00 AM",
                                  "7:00 AM",
                                  "8:00 AM",
                                  "9:00 AM",
                                  "10:00 AM",
                                  "11:00 AM",
                                  "12:00 PM",
                                  "1:00 PM",
                                  "2:00 PM",
                                  "3:00 PM",
                                  "4:00 PM",
                                  "5:00 PM",
                                  "6:00 PM",
                                  "7:00 PM",
                                  "8:00 PM",
                              ],
                          },
                      ],
                  },
            {
                navigationTitle: "Daily Mood",
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
                ],
            },
            {
                navigationTitle: "Thoughts and Experiences",
                elements: [
                    {
                        name: "thoughts",
                        type: "matrix",
                        title: "Below you will find a list of statements concerned with your thoughts and experiences. Please use the scale below to make your choice.",
                        columns: [
                            {
                                value: 5,
                                text: "Strongly agree",
                            },
                            {
                                value: 4,
                                text: "Agree",
                            },
                            {
                                value: 3,
                                text: "Neutral",
                            },
                            {
                                value: 2,
                                text: "Disagree",
                            },
                            {
                                value: 1,
                                text: "Strongly disagree",
                            },
                        ],
                        rows: [
                            {
                                value: "DC1",
                                text: "I am aware of my thoughts and emotions.",
                            },
                            {
                                value: "RP1",
                                text: "When I want to feel more positive emotion, I change the way I think about the situation.",
                            },
                            {
                                value: "RP2",
                                text: "I try to think of positive consequences from my experiences.",
                            },
                            {
                                value: "RP3",
                                text: "I wish to change how I currently feel.",
                            },
                        ],
                        alternateRows: true,
                        isAllRowRequired: true,
                    },
                ],
                showQuestionNumbers: "off",
            },
            {
                navigationTitle: "Daily Reflection",
                elements: [
                    {
                        name: "reflection",
                        title: "Please write your daily reflection for today.",
                        type: "comment",
                        isRequired: true,
                    },
                ],
            },
        ],
        showQuestionNumbers: "false",
    };
}
