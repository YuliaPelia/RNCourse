import { StyleSheet, TextInput, Button, View } from "react-native";

function GoalInput(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course component!"
        onChangeText={props.changeText}
      />
      <Button title="Add Goal" onPress={props.clickBtn} />
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
