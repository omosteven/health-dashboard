import assets from "assets";

import Icon from "components/ui/Icon";

const { settingsIcon, menuIcon } = assets.icons;
const { profileIcon1 } = assets.images;

const LayoutHeaderBox = () => {
  return (
    <section className="layout-header__box">
      <div className="profile-icon">
        <img src={profileIcon1} alt="Senior Woman" />
      </div>
      <div>
        <h3>Dr.Jose Simmons</h3>
        <p>General Practitioner</p>
      </div>
      <div className="layout-header__box__icons">
        <Icon src={settingsIcon} />
        <Icon src={menuIcon} />
      </div>
    </section>
  );
};

export default LayoutHeaderBox;
