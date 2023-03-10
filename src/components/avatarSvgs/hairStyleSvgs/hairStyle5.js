export const HairStyle5 = ({hairColor }) => {

  return(
    <svg>
    <path
      d="M54.351 34.697c-20.305 7.563-33.798 19.286-39.169 34.16-1.834 5.42-4.06 17.898-4.06 23.696v5.042l5.37-.882c3.013-.504 8.908-1.89 13.1-3.277 4.192-1.387 9.04-2.521 10.873-2.521 1.834 0 3.537-.504 3.93-1.135.393-.504 3.013-1.386 5.764-1.89 2.751-.379 7.599-2.017 10.874-3.656 3.144-1.638 8.908-3.781 12.707-4.664 3.668-1.008 6.812-2.142 6.812-2.773 0-.504.655-1.008 1.31-1.008.786 0 4.454-2.017 8.253-4.412 3.668-2.395 7.205-4.411 7.598-4.411.524 0 1.31 2.142 1.834 4.663 2.358 12.857 15.851 30.126 24.497 31.386l4.716.757.917-8.067c.655-5.925.262-10.84-1.31-17.521-3.799-15.756-3.799-15.882-19.65-33.403-5.764-6.428-19.257-10.588-36.418-11.344-9.432-.378-14.672 0-17.948 1.26z"
      style={{
        fill: hairColor,
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 0.1285,
      }}
      transform="translate(18, -10) scale(0.67, 0.67)"
    />
  </svg>
  )
}