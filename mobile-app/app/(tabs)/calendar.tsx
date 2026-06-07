import { useState, useMemo } from "react";
import { FlatList, Pressable, Text } from "react-native";

import Screen from "@/components/ui/Screen";
import { COLORS } from "@/constants/theme";
import { StudyEvent } from "@/types/study";
import { StudyEvents as initialData } from "@/data/studyEvents";


import StudyEventCard from "@/components/studyplan/StudyEventCard";
import AddEventModal from "@/components/studyplan/AddEventModal";
import FilterBar from "@/components/studyplan/FilterBar";
import AddSubjectModal from "@/components/studyplan/AddSubjectModal";

export default function Calendar() {

  const [events, setEvents] = useState<StudyEvent[]>(initialData);
  const [modalVisible, setModalVisible] = useState(false);
  const [filter, setFilter] = useState("ALL");
  const [subjects, setSubjects] = useState(["ALL", "CS", "DB"]);
  const [subjectModalVisible, setSubjectModalVisible] = useState(false);
 

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


  return (
    <Screen>
      <Text
        style={{
          color: COLORS.text,
          fontSize: 28,
          fontWeight: "800",
          marginBottom: 30,
        }}
      >
        Study Plan
      </Text>

      <FilterBar active={filter} setActive={setFilter} subjects={subjects} onAddSubject={() => setSubjectModalVisible(true)} />
      
        <Pressable onPress={() => setModalVisible(true)} style={{ backgroundColor: COLORS.primary, padding: 14, borderRadius: 14, marginBottom: 12, }}>
          <Text  style={{ color: "#fff", fontWeight: "700" }}> + Add Study Session</Text>
        </Pressable>

      <FlatList data={filteredEvents} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => <StudyEventCard event={item} />} />
      
      <AddEventModal visible={modalVisible} onClose={() => setModalVisible(false)} onAdd={addEvent} />
      
      <AddSubjectModal visible={subjectModalVisible} onClose={() => setSubjectModalVisible(false)} onAdd={addSubject} />


    </Screen>
  );
}