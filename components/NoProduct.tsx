import { Text, View } from "react-native";

const NoProduct = () => {
    return (
        <View>
            <Text className="text-lg text-rose-600 font-bold">
                No product was found at this time. Please check back later.
            </Text>
        </View>
    );
 };

export default NoProduct;
