import ClearNight from "../assets/icons/clear-night.svg";
import Cloudy from "../assets/icons/cloudy.svg";
import Humidity from "../assets/icons/humidity.svg";
import Rain from "../assets/icons/rain.svg";
import ScatteredClouds from "../assets/icons/scattered-clouds.svg";
import Sunny from "../assets/icons/sunny.svg";
import Windy from "../assets/icons/windy.svg";

import CityListItem from "../components/custom-components/CityListItem";


import { useState } from "react";
import { FlatList, Text, View, TouchableOpacity } from "react-native";

const initialCities = [
  { id: "1", country: "ukraine", time: "11:42pm", name: "morshyn", temp: 13, icon: "cloudy" },
  { id: "2", country: "ukraine", time: "11:42pm", name: "solonka", temp: 16, icon: "cloudy" },
  {
    id: "3",
    country: "ukraine",
    time: "11:42pm",
    name: "zaporizhzhia",
    temp: 13,
    icon: "sunny"
  },
  { id: "4", country: "ukraine", time: "11:42pm", name: "dnipro", temp: 13, icon: "cloudy" },
  { id: "5", country: "ukraine", time: "11:42pm", name: "vynnyky", temp: 13, icon: "cloudy" },
  { id: "6", country: "ukraine", time: "11:42pm", name: "turka", temp: 13, icon: "cloudy" },
];

export default function HomeScreen() {
  const [cities, setCities] = useState(initialCities);

  const handleRemoveCity = (cityId: string) => {
    setCities((prevCities) => prevCities.filter((city) => city.id !== cityId));
  };

  const handleAddCity = () => {
    // Тут можна реалізувати модальне вікно для додавання міста
    setCities([
      ...cities,
      {
        id: Date.now().toString(),
        country: "ukraine",
        time: "11:42pm",
        name: "new city",
        temp: 15,
        icon: "cloudy"
      },
    ]);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          paddingHorizontal: 30,
          paddingTop: 60,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end"
        }}
      >
        <Text
          style={{ fontSize: 80, fontFamily: "Circe-Bold" }}
        >
          atmos
        </Text>
        <TouchableOpacity onPress={handleAddCity}>
          <Text style={{ fontSize: 70, fontFamily: "Circe-Regular" }}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={cities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CityListItem item={item} onRemove={handleRemoveCity} />
        )}
      />
    </View>
  );
}
