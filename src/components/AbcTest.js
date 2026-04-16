import { Text } from "react-native";

const AbcTest = ({ name, getData }) => {
  const test = "World";
  getData(test);
  return <Text>Welcome {name} !</Text>;
};
export default AbcTest;
