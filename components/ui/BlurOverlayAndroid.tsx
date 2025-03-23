import React from "react";
import { Dimensions } from "react-native";
import Svg, { Rect, Defs, LinearGradient, Stop } from "react-native-svg";

const { width } = Dimensions.get("window");

export default function BlurOverlayAndroid({ height = 320 }) {
  return (
    <Svg
      height={height}
      width={width}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
      }}
    >
      <Defs>
        <LinearGradient id="blurGradient" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#ffffff" stopOpacity="0.2" />
          <Stop offset="0.5" stopColor="#ffffff" stopOpacity="0.4" />
          <Stop offset="1" stopColor="#ffffff" stopOpacity="1" />
        </LinearGradient>
      </Defs>
      <Rect x="0" y="0" width="100%" height="100%" fill="url(#blurGradient)" />
    </Svg>
  );
}
