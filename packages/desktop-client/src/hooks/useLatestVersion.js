import { useState, useEffect } from 'react';

import { getIsOutdated, getLatestVersion } from '../util/versions';

function useIsOutdated() {
  let [isOutdated, setIsOutdated] = useState(false);
  const latestVersion = useLatestVersion();

  useEffect(() => {
    (async () => {
      setIsOutdated(await getIsOutdated(latestVersion));
    })();
  }, [latestVersion]);

  return isOutdated;
}

function useLatestVersion() {
  let [latestVersion, setLatestVersion] = useState('');
  useEffect(() => {
    (async () => {
      setLatestVersion(await getLatestVersion());
    })();
  }, []);

  return latestVersion;
}

export default useLatestVersion;
export { useIsOutdated };
