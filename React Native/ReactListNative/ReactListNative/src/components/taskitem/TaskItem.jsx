import { Text, View, Image } from "react-native";
import { TaskItemStyle } from "./TaskItemStyle";

import PenIcon from "../../../assets/Vector.svg";
import TrashIcon from "../../../assets/mynaui_trash copy.svg";

export const TaskItem = () => {
  return (
    <View style={TaskItemStyle.cardBox}>

      <Text style={TaskItemStyle.text}>
        Task Item
      </Text>

      <View style={TaskItemStyle.iconBox}>
        <Image
          source={PenIcon}
          style={TaskItemStyle.iconPenBox}
        />

        <Image
          source={TrashIcon}
          style={TaskItemStyle.iconTrashBox}
        />
      </View>

    </View>
  );
};