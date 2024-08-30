import AuthButton from "@/src/components/AuthButton";
import Titulo from "@/src/components/Titulo";
import { StyleSheet, Text, View } from "react-native";

export default function BrasiliaScreen() {
  return (
    <View style={styles.container}>
      <Titulo title="Brasília" />
      <AuthButton title={"UME"} rota={"/brasilia/ume"} senha="Ume@brb" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  }
});
