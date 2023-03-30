import React, { useEffect, useState } from "react";

const Alert = ({ data, message, type }) => {
  const [isDataEmpty, setIsDataEmpty] = useState(false);
  useEffect(() => {
    if (data && data.length === 0) {
      setIsDataEmpty(true);
    }
  }, [data]);

  useEffect(() => {
    setTimeout(() => {
      setIsDataEmpty(false);
    }, 5000);
  }, [isDataEmpty]);

  return (
    <React.Fragment>
      {isDataEmpty ? (
        <div className={"z-index-master top-0 w-50 position-fixed border border-" +(type)}>
          <h6 className={"text-"+(type)}>{message}</h6>
        </div>
      ) : (
        <></>
      )}
    </React.Fragment>
  );
};

export default Alert;
