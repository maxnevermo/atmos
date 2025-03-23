import { Text, View } from "react-native";

export default function TemperaturePredition({time, value} : {time: string, value: number}) {
    return <View style={{display: "flex", flexDirection: "column", gap: 5}}>
        <Text style={{color: "#9B9B9B", fontFamily: "Circe-Regular", fontSize: 20}}>{time}</Text>
        <Text style={{color: "#000000", fontFamily: "Circe-Regular", fontSize: 20, textAlign: "center"}}>{value}{"\u00B0"}</Text>
    </View>
}