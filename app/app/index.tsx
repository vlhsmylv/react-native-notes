import { useGetNotes } from "@/api/hook";
import Note from "@/components/note";
import React, { useMemo, useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function Index() {
  const { data: _data, isLoading } = useGetNotes();

  const [search, setSearch] = useState("");

  const data = useMemo(
    () =>
      _data?.filter((note: { id: string; title: string; content: string }) => {
        return (
          note.title.toLowerCase().includes(search.toLowerCase()) ||
          note.content.toLowerCase().includes(search.toLowerCase())
        );
      }),
    [search, _data]
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <Icon style={styles.searchIcon} name="search" size={20} color="#000" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <View
        style={{
          width: "100%",
          marginTop: 20,
        }}
      >
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <View style={styles.notesContainer}>
            {data.length > 0 ? (
              data.map((note: any) => <Note key={note.id} {...note} />)
            ) : (
              <Text
                style={{
                  fontSize: 20,
                  color: "gray",
                  textAlign: "center",
                }}
              >
                Nothing found
              </Text>
            )}
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 40,
  },
  notesContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 20,
    marginBottom: 20,
    width: "100%",
  },
  searchIcon: {
    padding: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingLeft: 0,
  },
  searchInputFocus: {},
});
