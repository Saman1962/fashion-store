import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles.jsx";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...props }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...props} />
    );
  };
  return Spinner;
};

export default WithSpinner;

/*firestore
      .collection("collections")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const { title, ...props } = doc.data();

          data.push({
            title: {
              routeParam: title.toLowerCase(),
              id: doc.id,
              title: title,
              ...props,
            },
          });
        });
        console.log(data);

        updateCollections(data);
      });*/
