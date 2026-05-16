import { Text, View } from "react-native";
import Swiper from "react-native-deck-swiper";
import { SafeAreaView } from "react-native-safe-area-context";

const users = [
  {
    name: "Anna",
    study: "Informatik",
    bio: "Sucht Buddy für Algorithmen",
  },
  {
    name: "Markus",
    study: "BWL",
    bio: "Lernt gerne in Gruppen",
  },
  {
    name: "Lea",
    study: "Psychologie",
    bio: "Prüfungsvorbereitung gemeinsam",
  },
];

export default function Match() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F6F7FB",
      }}
    >
      <View style={{ paddingHorizontal: 20 }}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: "700",
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          Discover
        </Text>
      </View>

      <Swiper
        cards={users}
        renderCard={(card) => {
          return (
            <View
              style={{
                flex: 0.75,
                borderRadius: 28,
                backgroundColor: "white",
                padding: 24,

                borderWidth: 1,
                borderColor: "#ECECEC",

                shadowColor: "#000",
                shadowOpacity: 0.08,
                shadowRadius: 10,
                elevation: 3,
              }}
            >
              <View
                style={{
                  height: 280,
                  borderRadius: 22,
                  backgroundColor: "#DDE3F0",
                  marginBottom: 20,
                }}
              />

              <Text
                style={{
                  fontSize: 28,
                  fontWeight: "700",
                }}
              >
                {card.name}
              </Text>

              <Text
                style={{
                  color: "gray",
                  marginTop: 6,
                  fontSize: 16,
                }}
              >
                {card.study}
              </Text>

              <Text
                style={{
                  marginTop: 14,
                  fontSize: 16,
                  lineHeight: 24,
                }}
              >
                {card.bio}
              </Text>
            </View>
          );
        }}
        stackSize={3}
        backgroundColor="#F6F7FB"
        cardVerticalMargin={20}
        animateCardOpacity
        swipeBackCard
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginBottom: 40,
        }}
      >
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            elevation: 2,
          }}
        >
          <Text style={{ fontSize: 28 }}>✖</Text>
        </View>

        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: "#111",
            justifyContent: "center",
            alignItems: "center",
            elevation: 2,
          }}
        >
          <Text style={{ fontSize: 28, color: "white" }}>♥</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}