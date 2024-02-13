import { StyleSheet, TextInput, Button, View } from "react-native";

import { useState } from "react";

function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        // console.log(enteredText);
        setEnteredGoalText(enteredText);
      }

      function addGoalHandler() {
        props.clickBtn(enteredGoalText);
        setEnteredGoalText('');
      }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course component!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "green",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "purple",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
