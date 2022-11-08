const surveyJSON = {
	progressBarType: 'buttons',
	showProgressBar: 'top',
	pages: [
		{
			navigationTitle: 'Personal Information',
			name: 'PersonalDetails',
			elements: [
				{
					type: 'text',
					name: 'FirstName',
					title: 'Please enter your first name:',
					isRequired: true,
				},
				{
					type: 'text',
					name: 'LastName',
					title: 'Please enter your last name:',
					isRequired: true,
				},
			],
		},
		{
			navigationTitle: 'Daily Mood',
			elements: [
				{
					type: 'imagepicker',
					name: 'mood',
					title: 'How would you rate your mood today?',
					choices: [
						{
							value: 'very happy',
							imageLink: './images/very_happy.png',
						},
						{
							value: 'happy',
							imageLink: './images/happy.png',
						},
						{
							value: 'neutral',
							imageLink: './images/neutral.png',
						},
						{
							value: 'sad',
							imageLink: './images/sad.png',
						},
						{
							value: 'crying',
							imageLink: './images/crying.png',
						},
						{
							value: 'angry',
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
			navigationTitle: 'Wellbeing Ranking',
			elements: [
				{
					name: 'wellbeing-domain-ranking',
					title: 'Please rank the following domains that is most important to your personal wellbeing.',
					isRequired: true,
					type: 'ranking',
					choices: [
						{ value: 'Life Satisfaction' },
						{ value: 'Physical Health' },
						{ value: 'Close Social Relationship' },
						{ value: 'Financial and Material Stability' },
						{ value: 'Employment' },
						{ value: 'Family' },
						{ value: 'Self-Esteem' },
					],
				},
			],
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
