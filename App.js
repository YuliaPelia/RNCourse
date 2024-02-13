import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalVisible] = useState(false)
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalVisible(true)
  }

  function endAddGoalHandler() {
    setModalVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoal) => [
      ...currentCourseGoal,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);

  }

  function deleteGoalHandler(id) {
    // console.log("DELETE");
    setCourseGoals((currentCourseGoal) => {
      return currentCourseGoal.filter((goal) => goal.id !== id);
    });
  }



  return (
    <>
    <StatusBar style="light" />
    <View style={styles.appContainer}>
    <Button title="Add New Goal" color="#C097F9" onPress={startAddGoalHandler} />

    {/* need to click a buttom that open oportunity add item */}
      {/* {modalIsVisible && <GoalInput clickBtn={addGoalHandler} />} */}

     <GoalInput clickBtn={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    // backgroundColor: '#',
  },
  goalsContainer: {
    flex: 5,
  },
});


//! Answers: 1) What the difference between button and Pressable components?

