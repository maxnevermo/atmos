import ClearNight from "../assets/icons/clear-night.svg";
import Cloudy from "../assets/icons/cloudy.svg";
import Humidity from "../assets/icons/humidity.svg";
import Rain from "../assets/icons/rain.svg";
import ScatteredClouds from "../assets/icons/scattered-clouds.svg";
import Sunny from "../assets/icons/sunny.svg";
import Windy from "../assets/icons/windy.svg";

import Back from "../assets/icons/back.svg";

import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import WeatherMetric from "@/components/custom-components/WeatherMetric";
import TemperaturePredition from "@/components/custom-components/TemperaturePrediction";

const iconMap = {
  cloudy: Cloudy,
  sunny: Sunny,
  rain: Rain,
  "clear-night": ClearNight,
  "scattered-clouds": ScatteredClouds,
  humidity: Humidity,
  windy: Windy,
};

export default function DetailScreen() {
  const { city, temp, icon } = useLocalSearchParams();
  const router = useRouter();
  const [showGraph, setShowGraph] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState("temperature");

  const iconString = typeof icon === "string" ? icon.toLowerCase() : "";
  const Icon = iconMap[iconString as keyof typeof iconMap];

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <LinearGradient
        colors={["#E4932D", "#F7C171", "#FFFFFF"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        locations={[0, 0.5, 1]}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 320,
        }}
      />

      {Platform.OS == "ios" && (
        <BlurView
          intensity={100}
          tint="light"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 460,
          }}
        />
      )}

      {/* 3. Контент */}
      <ScrollView
        style={{ flex: 1, padding: 0, paddingTop: 60 }}
        scrollEventThrottle={16}
        onScroll={(e) => {
          if (e.nativeEvent.contentOffset.y > 50) {
            setShowGraph(true);
          }
        }}
      >
        <TouchableOpacity
          onPress={() => router.back()}
          style={{
            marginBottom: 20,
            borderBottomColor: "rgba(0,0,0,0.2)",
            borderBottomWidth: 0.5,
            paddingHorizontal: 20,
            paddingBottom: 10,
          }}
        >
          <Back
            width={60}
            height={60}
            stroke="#000000"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </TouchableOpacity>

        <View
          style={{
            paddingHorizontal: 30,
            paddingBottom: 10,
            borderBottomWidth: 0.5,
            borderBottomColor: "rgba(0,0,0,0.2)",
          }}
        >
          <Text style={{ fontSize: 28, fontFamily: "Circe-Regular" }}>
            {city}
          </Text>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                height: 130,
                alignItems: "flex-start",
              }}
            >
              <Text
                style={{
                  fontSize: 140,
                  lineHeight: 150,
                  fontFamily: "Codega-Demo",
                }}
              >
                {temp}
              </Text>

              {Icon && (
                <Icon
                  width={25}
                  height={25}
                  style={{ marginLeft: 15 }}
                  stroke={"#000000"}
                  strokeWidth={2}
                ></Icon>
              )}
            </View>

            <Text
              style={{
                color: "#9b9b9b",
                fontSize: 20,
                fontFamily: "Circe-Regular",
              }}
            >
              sunny
            </Text>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 80,
            padding: 40,
          }}
        >
          <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
            <Back
              width={30}
              height={30}
              stroke="#000000"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transform: [{ rotate: "90deg" }],
              }}
            />
            <Text style={{ fontSize: 20, fontFamily: "Codega-Demo" }}>23</Text>
          </View>

          <View style={{ display: "flex", flexDirection: "row", gap: 5 }}>
            <Back
              width={30}
              height={30}
              stroke="#000000"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                transform: [{ rotate: "-90deg" }],
              }}
            />
            <Text style={{ fontSize: 20, fontFamily: "Codega-Demo" }}>16</Text>
          </View>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 40,
            flexWrap: "wrap",
            paddingHorizontal: 40,
            paddingTop: 20,
            paddingBottom: 40,
            borderBottomColor: "rgba(0,0,0,0.2)",
            borderBottomWidth: 0.5,
          }}
        >
          <WeatherMetric metric="humidity" value={"15"}></WeatherMetric>
          <WeatherMetric metric="uv index" value={"3"}></WeatherMetric>
          <WeatherMetric metric="wind" value={"6 m/s"}></WeatherMetric>
          <WeatherMetric metric="feels like" value={"9 m/s"}></WeatherMetric>
        </View>

        <View style={{ paddingHorizontal: 40, display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View
              style={{
                paddingVertical: 40,
                flexDirection: "row",
                gap: 35,
              }}
            >
              <TemperaturePredition time="now" value={6} />
              <TemperaturePredition time="4 am" value={6} />
              <TemperaturePredition time="4 am" value={6} />
              <TemperaturePredition time="4 am" value={6} />
              <TemperaturePredition time="4 am" value={6} />
              <TemperaturePredition time="4 am" value={6} />
              <TemperaturePredition time="4 am" value={6} />
              <TemperaturePredition time="4 am" value={6} />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
