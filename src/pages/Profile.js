import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query"
import { getCheckInData, getAvatarMetaData } from "../api/user";
import { Avatar } from "../components/avatarPage/avatar/avatar";
import { useAuthStore } from "../store/store";
import InfoStats from "../components/profile/InfoStats";
import Date from "../components/profile/Date";
import ClipLoader from "react-spinners/ClipLoader";
import getDateAndMonth from "helpers/getDateAndMonth";
import "../styles/Profile.css";

export default function Profile() {
  const user = useAuthStore((store) => store.user);
  const [selectedDate, setSelectedDate] = useState("");

  const checkInQuery = useQuery({
    queryKey: ["checkIns", user.uid],
    queryFn: () => getCheckInData(user.uid),
  })

  const avatarQuery = useQuery({
    queryKey: ["avatar", user.uid],
    queryFn: () => getAvatarMetaData(user.uid),
  })

  useEffect(() => {
    if (checkInQuery.status === 'success') {
      setSelectedDate(checkInQuery.data.selectedDate)
    }
  }, [checkInQuery.status, checkInQuery.data]);

  if (checkInQuery.isLoading && avatarQuery.isLoading) {
    return (
      <div className="loading">
        <ClipLoader loading={checkInQuery.isLoading} size={100} aria-label="Loading Spinner" />
      </div>
    );
  }

  const dateElements = Object.keys(checkInQuery.data.checkIns).map((dateString, idx) => {
    const [formattedDate, dayOfWeek] = getDateAndMonth(dateString);

    return (
      <Date
        key={idx}
        date={formattedDate}
        day={dayOfWeek}
        dateString={dateString}
        selectedDate={selectedDate}
        handleClick={() => setSelectedDate(dateString)}
      />
    );
  });

  return (
    <section className="profile-main-container">
      <div className="avatar-container">
        <Avatar
          {...avatarQuery.data.avatarColors}
          {...avatarQuery.data.avatarStyles}
          size="calc(25vh - 4px)"
        />
        <h1 className="username-header">{user.fullName ?? user.displayName}</h1>
      </div>
      <div className="profile-info-container">
        <div className="daily-info-container">
          <h1 className="daily-header">Daily Information</h1>
          <div className="info-stats-container">
            <InfoStats
              imgUrl={"/images/profile-mood.png"}
              stat={checkInQuery.data.checkIns[selectedDate]?.mood}
              category={"Mood"}
            />
            <InfoStats
              imgUrl={"/images/profile-awareness.png"}
              stat={checkInQuery.data.checkIns[selectedDate]?.thoughts.AW1}
              category={"Awareness"}
            />
            <InfoStats
              imgUrl={"/images/profile-stress.png"}
              stat={checkInQuery.data.checkIns[selectedDate]?.stress}
              category={"Stress"}
            />
            <InfoStats
              imgUrl={"/images/profile-reappraisal.png"}
              stat={checkInQuery.data.checkIns[selectedDate]?.thoughts.RA1}
              category={"Reappraisal"}
            />
          </div>
        </div>
        <div className="daily-reflection-container">
          <div className="top"></div>
          <div className="reflection">
            <h1>DAILY REFLECTION</h1>
            <p>{checkInQuery.data.checkIns[selectedDate]?.reflection}</p>
          </div>
        </div>
      </div>
      <div className="date-container">{dateElements}</div>
    </section>
  );
}
