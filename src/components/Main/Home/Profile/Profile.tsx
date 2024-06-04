import { Button, SkeletonLoader } from "components/ui";
import assets from "assets";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import "./Profile.scss";
import { IPatientInfo } from "types";
import { getFormattedDate } from "utils/helpers";

const { calenderIcon, femaleIcon, callIcon, insuranceIcon } = assets.icons;

interface IViewProfile {
  isLoading: boolean;
  profile?: IPatientInfo;
}

const Profile: React.FC<IViewProfile> = ({ isLoading, profile }) => {
  const {
    date_of_birth,
    gender,
    phone_number,
    emergency_contact,
    insurance_type,
    name,
    profile_picture,
  } = profile || {};

  const profileInfos = [
    {
      icon: calenderIcon,
      title: "Date Of Birth",
      value: getFormattedDate(date_of_birth),
    },
    {
      icon: femaleIcon,
      title: "Gender",
      value: gender,
    },
    {
      icon: callIcon,
      title: "Contact Info.",
      value: phone_number,
    },
    {
      icon: callIcon,
      title: "Emergency Contacts",
      value: emergency_contact,
    },
    {
      icon: insuranceIcon,
      title: "Insurance Provider",
      value: insurance_type,
    },
  ];

  const renderSkeletons = () => (
    <>
      {Array.from({ length: 3 }, (_, i) => (
        <SkeletonLoader key={i} counter={2} useLargeFrames />
      ))}
    </>
  );

  const renderPatineInfos = () => (
    <>
      <div className="profile__header">
        <img src={profile_picture} alt="Profile" />
        <h3>{name}</h3>
      </div>
      <div className="profile__info-list">
        {profileInfos?.map((data, key) => (
          <ProfileInfo key={key} {...data} />
        ))}
      </div>
      <div className="profile__button">
        <Button text="Show All Information" />
      </div>
    </>
  );

  return (
    <div className="profile">
      {isLoading ? renderSkeletons() : renderPatineInfos()}
    </div>
  );
};

export default Profile;
