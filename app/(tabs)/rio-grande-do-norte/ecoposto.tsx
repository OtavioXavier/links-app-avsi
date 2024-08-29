import CustomButton from "@/components/CustomButton";
import CustomWebView from '@/components/navigation/WebView';
import Titulo from '@/components/Titulo';
import { useGo } from "@/context/GoContext";
import { links } from "@/links";
import { Link } from "expo-router";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import WebView from "react-native-webview";

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
