import { Text } from "react-native";

interface Props {
  title: string;
}

export default function Titulo({ title }: Props) {
  return (
    <Text
      style={{
        fontWeight: "bold",
        fontSize: 44,
        textAlign: "center",
        marginBottom: 36,
        color: "#00402A",
      }}
    >
      {title}
    </Text>
  );
}
