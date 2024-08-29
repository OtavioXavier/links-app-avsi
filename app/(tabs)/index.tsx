import Titulo from "@/components/Titulo";
import { Link, useNavigation } from "expo-router";
import { View, Image, StyleSheet, Button, Text } from "react-native";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("@/assets/images/folhagem.png")}
      />
      <Titulo title="Home" />

      <Link href="/bahia" style={styles.containerLink}>
        <Text style={styles.text}>BA</Text>
      </Link>
      <Link href="/brasilia" style={styles.containerLink}>
        <Text style={styles.text}>BRB</Text>
      </Link>
      <Link href="/pernambuco" style={styles.containerLink}>
        <Text style={styles.text}>PE</Text>
      </Link>
      <Link href="/rio-grande-do-norte" style={styles.containerLink}>
        <Text style={styles.text}>RN</Text>
      </Link>
      <Link href="/sao-paulo" style={styles.containerLink}>
        <Text style={styles.text}>SP</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  image: {
    position: "absolute",
    width: "100%",
    height: 150,
    top: 0,
  },
  containerLink: {
    backgroundColor: "#00a443",
    padding: 15,
    alignItems: "center",
    color: "#FFF5EC",
    fontWeight: "semibold",
    fontSize: 20,
    width: 250,
    paddingVertical: 16,
    borderRadius: 100,
    textAlign: "center",
    alignContent: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
