import { useState } from "react";
import styles from "./MemoModalDetail.module.css";
// import MemoModalWhen from "./MemoModalWhen";
// import MemoModalLocation from "./MemoModalLocation";
// import MemoModalDeadline from "./MemoModalDeadline";
// import MemoModalRepeat from "./MemoModalRepeat";

interface MemoModalDeatilProps {
  selectedType: "Event" | "Todo";
}

function MemoModalDetail({ selectedType }: MemoModalDeatilProps) {
  const [selectedDetail, setSelectedDetail] = useState("");

  const handleRowClick = (
    e: React.MouseEvent<HTMLLabelElement>,
    id: string
  ) => {
    const radio = e.currentTarget.querySelector(
      'input[type="radio"]'
    ) as HTMLInputElement;
    const row = e.currentTarget;

    if (radio) {
      radio.checked = true;
      document.querySelectorAll(`.${styles.row}`).forEach((element) => {
        (element as HTMLElement).style.backgroundColor = "";
      });
      row.style.backgroundColor = "#ebebeb";
    }

    setSelectedDetail(id);
  };

  const detailOptions: { [key: string]: string[] } = {
    Event: ["When", "Location", "Repeat"],
    Todo: ["When", "Deadline", "Repeat"],
  };

  const renderDetails = () => {
    switch (selectedDetail) {
      case "When":
        // return <MemoModalWhen />;
        return <div>When</div>;
      case "Location":
        // return <MemoModalLocation />;
        return <div>Location</div>;
      case "Deadline":
        // return <MemoModalDeadline />;
        return <div>Deadline</div>;
      case "Repeat":
        // return <MemoModalRepeat />;
        return <div>Repeat</div>;
      default:
        return <div>Details</div>;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.basic}>
        {detailOptions[selectedType].map((option) => (
          <label
            key={option}
            className={styles.row}
            onClick={(e) => handleRowClick(e, option)}
            htmlFor={option}
          >
            <input
              className={styles["row-selection"]}
              type="radio"
              name="basic"
              id={option}
            />
            <div className={styles.title}>{option}: </div>
            <div className={styles.input}>
              <input type="text" placeholder="None" />
            </div>
            <div className={styles["show-details"]}>
              <i className="material-icons">chevron_right</i>
            </div>
          </label>
        ))}
      </div>
      <div className={styles.detail}>{renderDetails()}</div>
    </div>
  );
}

export default MemoModalDetail;
