import { StyleSheet, Text, View } from "react-native";
import data from "../../data";
import RestaurantCard from "./card";

export default function Home({ navigation })
{
  return <View style={styles.container}>
    { data.map(props => <RestaurantCard navigation={navigation} {...props} />) }
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 8,
    gap: 8,
  },
});
