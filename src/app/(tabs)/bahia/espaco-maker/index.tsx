import CustomButton from "@/components/CustomButton";
import CustomWebView from "@/components/navigation/WebView";
import Titulo from "@/components/Titulo";
import { useGo } from "@/context/GoContext";
import { links } from "@/links";
import { Link } from "expo-router";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import WebView from "react-native-webview";

export default function EspacoMakerScreen() {
  const [url, setUrl] = useState<string>("");
  const { go, setGo } = useGo();

  const onPressButton = (url: string) => {
    setUrl(url);
    setGo(true);
  };

  if (!go) {
    return (
      <View style={styles.largestContainer}>
        <View style={styles.container}>
          <Titulo title="Oficinas" />
          <Link
            href={"/bahia/espaco-maker/arduino"}
            style={styles.containerLink}
          >
            <Text style={styles.text}>Arduino</Text>
          </Link>
          <Link
            href={"/bahia/espaco-maker/eolica"}
            style={styles.containerLink}
          >
            <Text style={styles.text}>Eólica</Text>
          </Link>
        </View>
        <View style={styles.container}>
          <Titulo title="Satisfação" />
          <CustomButton
            title="Ficha de avaliação"
            onPress={() => onPressButton(links.BA.EspacoMaker.Satisfação)}
          />
        </View>
      </View>
    );
  } else {
    return <CustomWebView url={url} />;
  }
}

const styles = StyleSheet.create({
  largestContainer: {
    flex: 1,
    marginVertical: 100,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
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
