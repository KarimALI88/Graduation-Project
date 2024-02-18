import {
  StyleSheet,
  Modal,
  Text,
  View,
  Button,
  FlatList,
  Pressable,
  Linking
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "react-native";
export default function RespHosp({ hospitals, visible }) {
  const hospImg = require("../assets/hospital-icon.png");

  const handleLocationPress = (link) => {
    Linking.openURL(link);
  };
  return (
    <View style={styles.container}>
      <Modal
        visible={visible}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={()=>visible=true}
      >
        <FlatList
          data={hospitals}
          renderItem={({ item }) => {
            return (
              <View key={item.id} style={styles.card}>
                <View style={styles.titleContainer}>
                  <Text style={styles.titleText}>{item.hospitalName}</Text>
                  <Image source={hospImg} style={{ width: 100, height: 100 }} />
                </View>
                <View style={styles.subTitle}>
                  <Text style={styles.cardText}>
                    المسافة:
                    {item.distance}
                  </Text>
                  <MaterialCommunityIcons
                    name="map-marker-distance"
                    size={30}
                    color="white"
                  />
                </View>
                <View style={styles.subTitle}>
                  <Text style={styles.cardText}>
                    الوقت:
                    {item.time}
                  </Text>
                  <Entypo name="back-in-time" size={30} color="white" />
                </View>
                <View style={styles.subTitle}>
                  <Pressable
                    onPress={(link) => handleLocationPress(item.location)}
                  >
                    <Text style={[styles.cardText, {color: "#0f81f0"}]}>
                      {item.location}
                    </Text>
                  </Pressable>
                  <Entypo name="location-pin" size={30} color="white" />
                </View>
              </View>
            );
          }}
          // horizontal
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={<View style={{ height: 16 }}></View>}
          ListEmptyComponent={<Text>No Items found</Text>}
          ListHeaderComponent={
            <Text style={styles.headerText}>
              المستشفيات المتاحة والقريبه من موقعك الان :{" "}
            </Text>
          }
          ListFooterComponent={
            <Text style={styles.footerText}>مع التمنيات بالسلامة والتوفيق</Text>
          }
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  titleContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subTitle: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginVertical: 5,
  },
  card: {
    backgroundColor: "#071355",
    color: "white",
    padding: 5,
    borderRadius: 8,
    borderWidth: 1,
    marginHorizontal: 16,
  },
  titleText: {
    textAlign: "right",
    marginHorizontal: 10,
    marginVertical: 10,
    fontSize: 30,
    fontWeight: "600",
    color: "white",
  },
  cardText: {
    color: "#B2BEB5",
    textAlign: "right",
    marginHorizontal: 10,
    marginVertical: 10,
    fontSize: 24,
    fontWeight: "600",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#071355",
    textAlign: "center",
    marginBottom: 18,
    marginTop: 18,
    paddingHorizontal: 18,
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginTop: 18,
    marginBottom: 18,
    paddingHorizontal: 18,
    fontWeight: "600",
    color: "#071355",
  },
});
