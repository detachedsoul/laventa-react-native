import IndexNewArrivals from "@components/IndexNewArrivals";
import { ArrowDown, MenuIcon, SearchIcon, ShoppingCart, Sun } from "lucide-react-native";
import React from "react";
import {
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";

const App = () => {
    return (
        <>
            <View className="flex-row items-center justify-between p-6 bg-slate-900 text-slate-300">
                <MenuIcon className="text-slate-200" size={30} />

                <View className="flex-row" style={{columnGap: 20}}>
                    <Sun className="text-slate-200" size={30} />

                    <SearchIcon className="text-slate-200" size={30} />

                    <ShoppingCart className="text-slate-200" size={30} />
                </View>
            </View>

            <ScrollView className="bg-[#181818] text-slate-200">
                <View className="bg-slate-800 px-4 pt-4 pb-20" style={{rowGap: 40}}>
                    <View  style={{rowGap: 15}}>
                        <Text className="text-2xl text-white tracking-widest leading-10">
                            Every <Text className="font-bold">Purchase</Text> Will Be Made With <Text className="font-bold">Pleasure</Text>
                        </Text>

                        <Text className="text-lg text-white leading-8">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </Text>

                        <TouchableOpacity className="bg-rose-700 text-white py-3.5 px-6 rounded-full mr-auto flex-row items-center" style={{columnGap: 10}}>
                            <Text className="text-white">
                                Start Shopping
                            </Text>

                            <ArrowDown className="text-slate-200" size={20} />
                        </TouchableOpacity>
                    </View>

                    <Image className={`w-full aspect-auto h-[415]`} source={require("./assets/img/hero-image.png")} alt="Laventa - Ecommerce marketplace" resizeMethod="resize" resizeMode="cover" />
                </View>

                <IndexNewArrivals />

                <View className="px-6 pb-10">
                    <Text className="text-slate-200 bg-purple-900 p-4">
                        This would serve as a text component!!!!!
                    </Text>
                </View>
            </ScrollView>
        </>
    );
};

export default App;
