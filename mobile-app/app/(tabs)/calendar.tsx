import { useState, useMemo } from "react";
import { FlatList, Pressable, Text, View, StyleSheet } from "react-native";

import Screen from "@/components/ui/Screen";
import { COLORS } from "@/constants/theme";
import { StudyEvent } from "@/types/study";
import { StudyEvents as initialData } from "@/data/studyEvents";


import StudyEventCard from "@/components/studyplan/StudyEventCard";
import AddEventModal from "@/components/studyplan/AddEventModal";
import FilterBar from "@/components/studyplan/FilterBar";
import AddSubjectModal from "@/components/studyplan/AddSubjectModal";
import InfoModal from "@/components/ui/InfoModal";
import { Ionicons } from "@expo/vector-icons";

export default function Calendar() {

  const [events, setEvents] = useState<StudyEvent[]>(initialData);
  const [modalVisible, setModalVisible] = useState(false);
  const [filter, setFilter] = useState("ALL");
  const [subjects, setSubjects] = useState(["ALL", "CS", "DB"]);
  const [subjectModalVisible, setSubjectModalVisible] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [editEvent, setEditEvent] = useState<StudyEvent | null>(null);
 

  const addSubject = (newSubject: string) => {
    const subjectForm = newSubject.toUpperCase();

    if (!subjects.includes(subjectForm))
      {
      setSubjects((prev) => [
        ...prev,
        subjectForm,
      ]);
    }
  
  };


  const filteredEvents = useMemo(() => {
    if (filter === "ALL") return events;
    return events.filter((e) => e.subject === filter);
  }, [events, filter]);


  const addEvent = (event: StudyEvent) => {
    setEvents((prev) => [event, ...prev]);
  };

  const updateEvent = (updatedEvent: StudyEvent) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event));
  };

  return (
    <Screen>
      <View style={styles.header}>
        <View style ={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>Study Plan</Text>
          <Pressable onPress={() => setShowInfo(true)}>
            <Ionicons name="information-circle-outline" size={26} color={COLORS.subtext}></Ionicons>
          </Pressable>
        </View>
        <Text style={styles.subtitle}> Create and manage your study sessions</Text>
      </View>

      <FilterBar active={filter} setActive={setFilter} subjects={subjects} onAddSubject={() => setSubjectModalVisible(true)} />
      
        <Pressable onPress={() => setModalVisible(true)} style={styles.addSeshButton}>
          <Ionicons name="add-circle-outline" size={20} color="#fff" />
          <Text style={styles.buttonText}>Create Study Session</Text>
        </Pressable>

      <FlatList data={filteredEvents} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => <StudyEventCard event={item} onEdit={(event) => { setEditEvent(event); setModalVisible(true); }} />}
        ListEmptyComponent={
          <View style={styles.emptyview}>
            <Text style={styles.emptytext1}> No Study Sessions Yet.</Text>
            <Text style={styles.emptytext2}> Tap `&quot;`Create Study Session`&quot;` to get started</Text>
        </View>
      }/>
      
      <AddEventModal visible={modalVisible} onClose={() => { setModalVisible(false); setEditEvent(null); }} onAdd={addEvent} onUpdate={updateEvent} editEvent={editEvent} />
      
      <AddSubjectModal visible={subjectModalVisible} onClose={() => setSubjectModalVisible(false)} onAdd={addSubject} />
      
      <InfoModal 
      visible={showInfo} 
      title="Study Plan" 
      content="Create study sessions, organize upcoming meetings and filter sessions by subject." 
      onClose= {() => setShowInfo(false)} /> 


    </Screen>
  );
}


const styles= StyleSheet.create({
  header: {

    marginBottom: 24,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title:{
    color: COLORS.text,
    fontSize: 28,
    fontWeight: "800",
    flex: 1,
  },
  subtitle: {
    color: COLORS.subtext,
    fontSize: 14,
    marginTop: 6,
  },

  info:{
    fontWeight: "600",
    color: COLORS.subtext,
    fontSize: 24,
  },
  addSeshButton: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
  emptyview: {
    padding: 20,
    alignItems: "center",
  },
  emptytext1: {
    color: COLORS.subtext,
    fontSize: 14,
    marginBottom: 4,
  },
  emptytext2: {
    color: COLORS.subtext,
    fontSize: 12,
  },
});