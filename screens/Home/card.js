import { View, Text, StyleSheet, Image, Pressable } from "react-native";

const styles = StyleSheet.create({
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    backgroundColor: "#eeeeee",
    borderRadius: 8,
    shadowRadius: 4,
    shadowColor: "#000000",
    shadowOpacity: 0.375,
  },
  cardImage: {
    height: 160,
    borderRadius: 8,
    width: "100%",
    alignSelf: "center",
    overflow: "hidden",
    resizeMode: "cover",
  },
  cardInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  name: {
    color: "#222222",
    fontSize: 20,
  },
  tagline: {
    color: "#222222",
  },
  timeContainer: {
    position: "relative",
    bottom: 32,
    display: "flex",
    backgroundColor: "#ffffff",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowRadius: 4,
    shadowColor: "#000000",
    shadowOpacity: 0.375,
  },
  time: {
    fontWeight: "bold",
  },
});

export default function RestaurantCard({ navigation, ...props }) {
  const { name, tagline, time, image } = props;
  return (
    <Pressable
      style={styles.card}
      onPress={() => navigation.navigate("Order", props)}
    >
      <Image style={styles.cardImage} source={image} />
      <View style={styles.cardInfo}>
        <View style={styles.cardTitle}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.tagline}>{tagline}</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{time} mins</Text>
        </View>
      </View>
    </Pressable>
  );
}
