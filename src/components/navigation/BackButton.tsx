import { Pressable, Text, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import { ArrowLeft, ChevronLeft } from "lucide-react-native";
import { usePathname } from 'expo-router';
import { useGo } from '@/context/GoContext';

export default function BackButton() {

  const router = useRouter();
  const { go } = useGo();
  const pathname = usePathname();

  if(pathname !== '/' && !go) {
    return (
      <Pressable style={styles.button} onPress={() => router.back()}>
          <ChevronLeft color={"#00a443"} strokeWidth={3} size={36}/>
      </Pressable>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 40,
    left: 16,
    zIndex: 10,
  },
});
