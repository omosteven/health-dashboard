import { Icon } from "components/ui";

interface IProfileInfoPros {
  icon: string;
  title: string;
  value?: string;
}

const ProfileInfo: React.FC<IProfileInfoPros> = ({ icon, title, value }) => {
  return (
    <div className="profile__info">
      <Icon src={icon} />
      <div>
        <h4>{title}</h4>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
