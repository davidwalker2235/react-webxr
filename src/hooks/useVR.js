import { useEffect, useState } from "react";

const useVR = () => {
  const [supported, setSupported] = useState(false);
  // useEffect is used for start the VR check when the components is mounted
  useEffect(() => {
    const checkAndSetVrSupport = async () => {
      // navigator.xr is a property available only in supported browsers. If the property exists we can access to the
      // VR funcionalities
      const support = await navigator?.xr?.isSessionSupported("immersive-vr");
      setSupported(!!support);
    };
    checkAndSetVrSupport();
  }, []);

  return {
    supported,
  };
};

export default useVR;
