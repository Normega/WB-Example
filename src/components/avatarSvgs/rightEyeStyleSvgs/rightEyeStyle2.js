export const RightEyeStyle2 = ({ eyeColor }) => {
    return(
        <svg
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            style={{
                fill: eyeColor,
                strokeWidth: 0.2,
            }}
            d="m330.595 397.804-11.622-.877-9.648 6.539-2.758-11.324-9.2-7.156 9.918-6.122 3.962-10.96 8.887 7.54 11.649.381-4.425 10.782z"
            transform="matrix(.40627 .1-.09637 .39483 -83.707 -176.126) translate(210, 98)"
            />
        </svg>
    )
}