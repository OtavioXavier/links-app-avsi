import { View, StyleSheet } from "react-native";
import { links } from "@/links";
import { useState } from "react";
import { useGo } from '@/context/GoContext';
import CustomButton from '@/components/CustomButton';
import Titulo from '@/components/Titulo';
import CustomWebView from '@/components/navigation/WebView';

export default function UMEScreen() {
  const [url, setUrl] = useState<string>("");
  const {go, setGo} = useGo();

  const onPressButton = (url: string) => {
    setUrl(url);
    setGo(true);
  };

  if (!go) {
    return (
      <View style={styles.container}>
        <Titulo title='UME SP'/>
        <CustomButton title='Pré-Teste'  onPress={() => onPressButton(links.SP.UME.Pré)}/>
        <CustomButton title='Pós-Teste' onPress={() => onPressButton(links.SP.UME.Pós)}/>
        <CustomButton title='Ficha de Avaliação'  onPress={() => onPressButton(links.SP.UME.Satisfação)}/>
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
  }
});
