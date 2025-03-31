import {Text, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Button = ({bgColor, iconName, color, text}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgColor,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        width: "48%",
        paddingVertical: 8,
        borderRadius: 4,
      }}>
      <Icon name={iconName} size={32} color={color} />
      <Text style={{color: color, fontSize: 18, fontWeight: "700"}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
