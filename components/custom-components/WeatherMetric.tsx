import { Text, View } from "react-native";

export default function WeatherMetric({ metric, value }: { metric: string; value: string }) {
    return <View style={{width: 130, display: "flex", flexDirection: "row", gap: 10}}>
        <Text style={{fontFamily: "Circe-Regular", fontSize: 20, color: "#6B6B6B"}}>{metric}</Text>
        <Text style={{fontFamily: "Circe-Regular", fontSize: 20, color: "#000000"}}>{value}</Text>
    </View>
}