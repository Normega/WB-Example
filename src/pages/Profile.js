import React, { useState, useEffect } from "react";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { Avatar } from "../components/avatarPage/avatar/avatar";
import { useStore } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import getDateAndMonth from "helpers/getDateAndMonth";
import db from "../db/index";
import "../styles/Profile.css";

const InfoStats = ({ imgUrl, stat, category }) => {
  return (
    <div className="info-stats">
      <img src={imgUrl} alt="" />
      <div className="stats">
        <h1>{stat}</h1>
        <p>{category}</p>
      </div>
    </div>
  );
};

const Date = ({ date, day, dateString, selectedDate, handleClick }) => {
  return (
    <div
      className={`date ${dateString === selectedDate ? "highlight" : ""}`}
      onClick={handleClick}
    >
      <h1>{date}</h1>
      <h1>{day}</h1>
    </div>
  );
};

export default function Profile() {
  const user = useStore().getState().auth.user;
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState("");
  const [userData, setUserData] = useState({});
  const [avatarColorProps, setAvatarColorProps] = useState(null);
  const [avatarStyleProps, setAvatarStyleProps] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const surveys = {};

      const querySnapshot = await getDocs(
        collection(db, "profiles", user.uid, "checkIns")
      );
      querySnapshot.docs
        .reverse() // order the documents by date in descending order
        .slice(0, 7) // get the 7 most recent survey
        .forEach((doc) => {
          surveys[doc.id] = doc.data();
        });

      setUserData(surveys);
      setSelectedDate(querySnapshot.docs[querySnapshot.docs.length - 1].id);
      setLoading(false);
    };

    const fetchAvatar = async () => {
      const userDoc = await getDoc(doc(db, "profiles", user.uid));
      const avatar = userDoc.data().avatar;

      setAvatarColorProps(avatar.colors);
      setAvatarStyleProps(avatar.styles);
    }

    fetchData();
    fetchAvatar();
  }, [user.uid]);

  const dateElements = Object.keys(userData).map((dateString) => {
    const [formattedDate, dayOfWeek] = getDateAndMonth(dateString);

    return (
      <Date
        date={formattedDate}
        day={dayOfWeek}
        dateString={dateString}
        selectedDate={selectedDate}
        handleClick={() => setSelectedDate(dateString)}
      />
    );
  });

  if (loading) {
    return (
      <div className="loading">
        <ClipLoader loading={loading} size={100} aria-label="Loading Spinner" />
      </div>
    );
  }

  if (avatarColorProps && avatarStyleProps) {
    console.log(avatarColorProps, avatarStyleProps);
  }

  return (
    <section className="profile-main-container">
      <div className="avatar-container">
        {/* <img src="images/avatar_placeholder.png" alt="avatar" /> */}
        <Avatar
          {...avatarColorProps}
          {...avatarStyleProps}
          size="calc(25vh - 4px)"
        />
        <h1 className="username-header">{user.fullName}</h1>
      </div>
      <div className="profile-info-container">
        <div className="daily-info-container">
          <h1 className="daily-header">Daily Information</h1>
          <div className="info-stats-container">
            <InfoStats
              imgUrl={"/images/profile-mood.png"}
              stat={userData[selectedDate].mood}
              category={"Mood"}
            />
            <InfoStats
              imgUrl={"/images/profile-awareness.png"}
              stat={userData[selectedDate].thoughts.AW1}
              category={"Awareness"}
            />
            <InfoStats
              imgUrl={"/images/profile-stress.png"}
              stat={userData[selectedDate].stress}
              category={"Stress"}
            />
            <InfoStats
              imgUrl={"/images/profile-reappraisal.png"}
              stat={userData[selectedDate].thoughts.RA1}
              category={"Reappraisal"}
            />
          </div>
        </div>
        <div className="daily-reflection-container">
          <div className="top"></div>
          <div className="reflection">
            <h1>DAILY REFLECTION</h1>
            <p>{userData[selectedDate].reflection}</p>
          </div>
        </div>
      </div>
      <div className="date-container">{dateElements}</div>
    </section>
  );
}
