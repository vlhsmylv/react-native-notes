import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface NoteProps {
  title: string;
  content: string;
}

const Note: React.FC<NoteProps> = ({ title, content }) => {
  return (
    <View style={styles.noteContainer}>
      <Text style={styles.noteTitle}>{title}</Text>
      <Text style={styles.noteContent}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noteContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 20,
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  noteContent: {
    fontSize: 14,
  },
});

export default Note;
