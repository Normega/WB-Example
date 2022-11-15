const surveyJSON = {
	progressBarType: 'buttons',
	showProgressBar: 'top',
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
			navigationTitle: 'Daily Mood',
			elements: [
				{
					type: 'imagepicker',
					name: 'mood',
					title: 'How would you rate your mood today?',
					choices: [
						{
							value: '6',
							imageLink: './images/very_happy.png',
						},
						{
							value: '5',
							imageLink: './images/happy.png',
						},
						{
							value: '4',
							imageLink: './images/neutral.png',
						},
						{
							value: '3',
							imageLink: './images/sad.png',
						},
						{
							value: '2',
							imageLink: './images/crying.png',
						},
						{
							value: '1',
							imageLink: './images/angry.png',
						},
					],
					imageHeight: '150',
					imageWidth: '150',
					isRequired: true,
				},
			],
		},
		{
			navigationTitle: 'Thoughts and Experiences',
			elements: [
				{
					name: 'thoughts',
					type: 'matrix',
					title: 'Below you will find a list of statements concerned with your thoughts and experiences. Please use the scale below to make your choice.',
					isRequired: true,
					columns: [
						{
							value: 5,
							text: 'Strongly agree',
						},
						{
							value: 4,
							text: 'Agree',
						},
						{
							value: 3,
							text: 'Neutral',
						},
						{
							value: 2,
							text: 'Disagree',
						},
						{
							value: 1,
							text: 'Strongly disagree',
						},
					],
					rows: [
						{
							value: 'DC1',
							text: 'I am able to watch myself thinking.',
						},
						{
							value: 'DC2',
							text: 'I can watch my thoughts and emotions drift by like leaves on a stream.',
						},
						{
							value: 'DC3',
							text: 'I can watch my thoughts and emotions come and go like clouds.',
						},
						{
							value: 'RP1',
							text: 'When I wanted to feel more positive emotion, I changed the way I was thinking about the situation.',
						},
						{
							value: 'RP2',
							text: 'I try to think of positive consequences from my experiences.',
						},
					],
					alternateRows: true,
				},
			],
			showQuestionNumbers: 'off',
		},
		{
			navigationTitle: 'Daily Reflection',
			elements: [
				{
					name: 'reflection',
					title: 'Please write your daily reflection for today.',
					type: 'comment',
					isRequired: true,
				},
			],
		},
	],
	showQuestionNumbers: 'false',
};

export default surveyJSON;
