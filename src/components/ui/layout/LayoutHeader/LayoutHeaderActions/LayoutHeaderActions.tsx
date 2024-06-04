import assets from "assets";
import Icon from "components/ui/Icon";

const { homeIcon, patientIcon, scheduleIcon, chatIcon, cardIcon } =
  assets.icons;

const LayoutHeaderActions = () => {
  return (
    <section className="layout-header__actions">
      <span>
        <Icon src={homeIcon} />
        Overview
      </span>

      <span className="action">
        <Icon src={patientIcon} />
        Patients
      </span>

      <span>
        <Icon src={scheduleIcon} />
        Schedule
      </span>

      <span>
        <Icon src={chatIcon} />
        Message
      </span>

      <span>
        <Icon src={cardIcon} />
        Transactions
      </span>
    </section>
  );
};

export default LayoutHeaderActions;
