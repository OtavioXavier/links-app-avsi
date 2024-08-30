import CustomButton from "@/src/components/CustomButton";
import CustomWebView from '@/src/components/navigation/WebView';
import Titulo from '@/src/components/Titulo';
import { useGo } from "@/src/context/GoContext";
import { links } from "@/links";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function EcopostoScreen() {
  const [url, setUrl] = useState<string>("");
  const { go, setGo } = useGo();

  const onPressButton = (url: string) => {
    setUrl(url);
    setGo(true);
  };

  const onCloseWebView = () => {
    setGo(false);
  };

  if (!go) {
    return (
      <View style={styles.container}>
        <Titulo title='EcoPosto'/>
        <CustomButton
          title="Pré-Teste"
          onPress={() => onPressButton(links.RN.EcoPosto.Pré)}
        />
        <CustomButton
          title="Pós-Teste"
          onPress={() => onPressButton(links.RN.EcoPosto.Pós)}
        />
        <CustomButton
          title="Ficha de Avaliação"
          onPress={() => onPressButton(links.RN.EcoPosto.Satisfação)}
        />
      </View>
    );
  } else {
    return (
      <CustomWebView url={url} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  }
});
