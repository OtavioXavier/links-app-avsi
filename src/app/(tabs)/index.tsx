import Titulo from "@/src/components/Titulo";
import { Link, useRouter } from "expo-router";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("@/assets/images/folhagem.png")}
      />
      <Titulo title="Home" />

      {/* <TouchableOpacity
        onPress={() => router.navigate("/bahia")}
        style={styles.containerLink}
      >
        <Text style={styles.text}>BA</Text>
      </TouchableOpacity> */}
      <Link push href={"/bahia/index"}>
      
      </Link>
      <TouchableOpacity
        onPress={() => router.navigate("/brasilia")}
        style={styles.containerLink}
      >
        <Text style={styles.text}>BRB</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.navigate("/pernambuco")}
        style={styles.containerLink}
      >
        <Text style={styles.text}>PE</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.navigate("/rio-grande-do-norte")}
        style={styles.containerLink}
      >
        <Text style={styles.text}>RN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.navigate("/sao-paulo")}
        style={styles.containerLink}
      >
        <Text style={styles.text}>SP</Text>
      </TouchableOpacity>
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
