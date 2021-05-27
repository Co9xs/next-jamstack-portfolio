import { useState, useEffect } from 'react'

// UserAgent文字列からプラットフォームを推定する
export const usePlatformDetector = (): string => {
  const [platform, setPlatform] = useState<string>(null)
  useEffect(() => {
    const ua = window.navigator.userAgent.toLowerCase();
    if(ua.indexOf("windows nt") !== -1) {
      setPlatform("Windows")
    } else if(ua.indexOf("android") !== -1) {
      setPlatform("Android")
    } else if(ua.indexOf("iphone") !== -1 || ua.indexOf("ipad") !== -1) {
      setPlatform("iOS")
    } else if(ua.indexOf("mac os x") !== -1) {
      setPlatform("MacOS")
    } else {
      setPlatform(null)
    }
  }, []);

  return platform;
};