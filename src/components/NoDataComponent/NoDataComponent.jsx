import React from 'react'
import Lottie from 'react-lottie';
import NotFound from '../../lotties/notFound.json'


const NoDataComponent = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NotFound,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    }
  };
 
  return (
    <div className="containerLottieNoData">
        <Lottie
          options={defaultOptions}
          isClickToPauseDisabled={true}
        />
        <div className="container-nodata-DataTable">
        <span >User Not Found</span>
        </div>
    </div>
  );
}

export default NoDataComponent;
