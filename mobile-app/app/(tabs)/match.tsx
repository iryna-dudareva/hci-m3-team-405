import { useRouter } from "expo-router";
import { useState } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-deck-swiper";

import MatchCard from "@/components/MatchCard";
import Screen from "@/components/ui/Screen";

import { users } from "@/data/users";

type MatchUser = {
  id: number;
  name: string;
  subject: string;
  bio: string;
  image: string;
  age: number;
  location: string;
  studyStyle: string;
  availability: string;
  languages: string;
};

const { width, height } = Dimensions.get("window");

export default function MatchScreen() {
  const router = useRouter();
  const [matchedUsers, setMatchedUsers] = useState<MatchUser[]>([]);
  const [showMatches, setShowMatches] = useState(true);
  const [swiped, setSwiped] = useState(0);

  const storeMatch = (cardIndex: number) => {
    const newMatch = users[cardIndex];
    if (!newMatch) return;
    setSwiped((prev) => prev + 1);
    setMatchedUsers((current) =>
      current.some((user) => user.id === newMatch.id)
        ? current
        : [...current, newMatch],
    );
    setShowMatches(true);
  };

  const startChat = (user: MatchUser) => {
    router.push(
      `/chat?name=${encodeURIComponent(user.name)}&id=${user.id}`,
    );
  };

  return (
    <Screen>
      <>
        <Text style={styles.title}>Find your Study Buddy</Text>
        {!(matchedUsers.length > 0 && showMatches) ? (
          <View style={styles.headerSection}>
            <Text style={styles.subtitle}>
              Your matches appear here and you can start a chat directly.
            </Text>
            {matchedUsers.length > 0 && !showMatches ? (
              <Pressable
                style={styles.viewMatchesButton}
                onPress={() => setShowMatches(true)}
              >
                <Text style={styles.viewMatchesButtonText}>
                  View Matches ({matchedUsers.length})
                </Text>
              </Pressable>
            ) : null}
          </View>
        ) : null}

        {matchedUsers.length > 0 && showMatches ? (
          <View style={styles.matchOverlay}>
            <View style={styles.matchOverlayTop}>
              <Text style={styles.matchHeadline}>
                Your Matches ({matchedUsers.length})
              </Text>
              <Pressable
                style={styles.closeButton}
                onPress={() => setShowMatches(false)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </Pressable>
            </View>
            <View style={styles.matchChips}>
              {matchedUsers.map((user) => (
                <Pressable
                  key={user.id}
                  style={styles.matchChip}
                  onPress={() => startChat(user)}
                >
                  <Text style={styles.matchChipText}>{user.name}</Text>
                  <Text style={styles.matchChipSubtext}>Start chat</Text>
                </Pressable>
              ))}
            </View>
          </View>
        ) : null}

        {matchedUsers.length === 0 ? (
          <Text style={styles.emptyHint}>
            Swipe right to match new study buddies.
          </Text>
        ) : null}

        {swiped >= users.length ? (
          <View style={styles.endContainer}>
            <Text style={styles.endTitle}>All profiles reviewed!</Text>
            <Text style={styles.endSubtitle}>
              You`&apos;`ve gone through all available study buddies. Check back later
              for new profiles or reach out to your matches.
            </Text>
            {matchedUsers.length > 0 ? (
              <Pressable
                style={styles.viewMatchesButtonLarge}
                onPress={() => setShowMatches(true)}
              >
                <Text style={styles.viewMatchesButtonLargeText}>
                  View All Matches
                </Text>
              </Pressable>
            ) : null}
          </View>
        ) : null}

        {swiped < users.length ? (
          <View style={styles.container}>
            <Swiper
              cards={users}
              renderCard={(card) => (card ? <MatchCard user={card} /> : <View />)}
              onSwipedRight={storeMatch}
              stackSize={1}
              backgroundColor="transparent"
              animateCardOpacity
              animateOverlayLabelsOpacity
              disableBottomSwipe
              disableTopSwipe
              verticalSwipe={false}
              cardVerticalMargin={0}
              cardHorizontalMargin={0}
              outputRotationRange={["-8deg", "0deg", "8deg"]}

              overlayLabels={{
                left: {
                  title: "PASS",
                  style: {
                    label: {
                      backgroundColor: "#FF4D67",
                      color: "white",
                      fontSize: 30,
                      fontWeight: "700",
                      paddingHorizontal: 22,
                      paddingVertical: 12,
                      borderRadius: 18,
                      overflow: "hidden",
                    },
                    wrapper: {
                      flexDirection: "column",
                      alignItems: "flex-end",
                      justifyContent: "flex-start",
                      marginTop: 60,
                      marginLeft: -35,
                    },
                  },
                },

                right: {
                  title: "MATCH",
                  style: {
                    label: {
                      backgroundColor: "#4CD964",
                      color: "white",
                      fontSize: 30,
                      fontWeight: "700",
                      paddingHorizontal: 22,
                      paddingVertical: 12,
                      borderRadius: 18,
                      overflow: "hidden",
                    },
                    wrapper: {
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      marginTop: 60,
                      marginLeft: 35,
                    },
                  },
                },
              }}

              containerStyle={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}

              cardStyle={{
                width: width * 0.92,
                height: height * 0.72,

                borderRadius: 32,
              }}
            />
          </View>
        ) : null}
      </>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
  },

  matchOverlay: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.98)",
    borderRadius: 22,
    padding: 16,
    marginBottom: 18,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 8,
  },

  matchOverlayTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },

  matchChips: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  matchChip: {
    backgroundColor: "#F3F8FF",
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 10,
    marginRight: 10,
  },

  matchChipText: {
    color: "#1F2937",
    fontWeight: "700",
  },

  matchChipSubtext: {
    color: "#2563EB",
    fontSize: 12,
    marginTop: 2,
  },

  closeButton: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 14,
    backgroundColor: "#E5E7EB",
  },

  closeButtonText: {
    color: "#374151",
    fontSize: 13,
    fontWeight: "700",
  },

  title: {
    fontSize: 34,
    fontWeight: "800",
    color: "#111",
    marginTop: 10,
    marginBottom: 8,
    letterSpacing: -1,
  },

  subtitle: {
    fontSize: 15,
    color: "#4B4F60",
    marginBottom: 16,
    lineHeight: 22,
  },

  matchSummary: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "rgba(68, 141, 255, 0.08)",
    borderRadius: 18,
  },

  matchHeadline: {
    color: "#1A2232",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 12,
  },

  matchRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  matchInfo: {
    flex: 1,
    marginRight: 12,
  },

  matchName: {
    color: "#111",
    fontSize: 15,
    fontWeight: "700",
  },

  matchSubject: {
    color: "#55606A",
    fontSize: 13,
    marginTop: 2,
  },

  chatButtonSmall: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 16,
    backgroundColor: "#3B82F6",
  },

  chatButtonTextSmall: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 13,
  },

  emptyHint: {
    color: "#6B7280",
    marginBottom: 14,
    fontSize: 14,
  },

  headerSection: {
    width: "100%",
    marginBottom: 16,
  },

  viewMatchesButton: {
    marginTop: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: "#3B82F6",
    alignSelf: "flex-start",
  },

  viewMatchesButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },

  endContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingBottom: 40,
  },

  endTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111",
    marginBottom: 12,
    textAlign: "center",
  },

  endSubtitle: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 28,
  },

  viewMatchesButtonLarge: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 18,
    backgroundColor: "#3B82F6",
  },

  viewMatchesButtonLargeText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});