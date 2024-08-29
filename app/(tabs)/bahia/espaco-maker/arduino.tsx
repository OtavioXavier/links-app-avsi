import CustomButton from "@/components/CustomButton";
import CustomWebView from '@/components/navigation/WebView';
import Titulo from '@/components/Titulo';
import { useGo } from "@/context/GoContext";
import { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const links = {
  preTeste:
    "https://forms.office.com/Pages/ResponsePage.aspx?id=3LdXMkel6USZYsUDx5X2CEs5uG60xS5Mm8XP6V18ksxUQURRWEFaR0FPR0IzWDFMSk00TDhLWkk5Vi4u&rd2dc9c58a12c4be2b2dd151301e6d5e8=%22Pr%C3%A9-teste%22&re0802dcffa2a47a2a119899631e35544=%22Arduino%22",
  posTeste:
    "https://forms.office.com/Pages/ResponsePage.aspx?id=3LdXMkel6USZYsUDx5X2CEs5uG60xS5Mm8XP6V18ksxUQURRWEFaR0FPR0IzWDFMSk00TDhLWkk5Vi4u&rd2dc9c58a12c4be2b2dd151301e6d5e8=%22P%C3%B3s-teste%22&re0802dcffa2a47a2a119899631e35544=%22Arduino%22",
} as const;

export default function ArduinoScreen() {
  const [url, setUrl] = useState<string>("");
  const { go, setGo } = useGo();

  const onPressButton = (url: string) => {
    setUrl(url);
    setGo(true);
  };

  if (!go) {
    return (
      <View style={styles.container}>
        <Titulo title='Arduino'/>
        <CustomButton
          title="Pré-Teste"
          onPress={() => onPressButton(links.preTeste)}
        />
        <CustomButton
          title="Pós-Teste"
          onPress={() => onPressButton(links.posTeste)}
        />
      </View>
    );
  } else {
    return (
      <CustomWebView url={url}/>
    );
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
