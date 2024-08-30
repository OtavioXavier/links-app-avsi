import CustomButton from "@/components/CustomButton";
import CustomWebView from "@/components/navigation/WebView";
import Titulo from "@/components/Titulo";
import { useGo } from "@/context/GoContext";
import { links } from "@/links";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function UMEScreen() {
  const [url, setUrl] = useState<string>("");
  const { go, setGo } = useGo();

  const onPressButton = (url: string) => {
    setUrl(url);
    setGo(true);
  };


  if (!go) {
    return (
      <View style={styles.container}>
        <Titulo title="UME PE" />
        <CustomButton
          title="Pré-Teste"
          onPress={() => onPressButton(links.PE.UME.Pré)}
        />
        <CustomButton
          title="Pós-Teste"
          onPress={() => onPressButton(links.PE.UME.Pós)}
        />
        <CustomButton
          title="Ficha de Avaliação"
          onPress={() => onPressButton(links.PE.UME.Satisfação)}
        />
      </View>
    );
  } else {
    return <CustomWebView url={url} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
});
