import CartButton from "@/components/CartButton";
import { images, offers } from "@/constants";
import cn from "clsx";
import React, { Fragment } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={offers}
        renderItem={({ item, index }) => {
          const isEven: boolean = index % 2 === 0;
          return (
            <View>
              <Pressable
                className={cn("offer-card",isEven ? "flex-row-reverse" : "flex-row")}
                style={{ backgroundColor: item.color }}
                android_ripple={{ color: "#fffff22" }}
              >
                <Fragment>
                  <View className="h-full w-1/2 ">
                    <Image
                      source={item.image}
                      className="size-full"
                      resizeMode="contain"
                    />
                  </View>
                  <View className={cn("offer-card__info",isEven ? "pl-10" : "pr-10")}>
                    <Text className=" h1-bold text-white leading-tight">
                      {item.title}
                    </Text>
                    <Image
                      source={images.arrowRight}
                      className="size-10"
                      tintColor="#ffffff"
                      resizeMode="contain"
                    />
                  </View>
                </Fragment>
              </Pressable>
            </View>
          );
        }}
        contentContainerStyle={{ paddingBottom: 28, paddingHorizontal: 5 }}
        ListHeaderComponent={()=> (
          <View className="flex flex-row justify-between items-center px-5 w-full my-5">
            <View>
              <Text className="text-primary small-bold text-xs">DELIVER TO</Text>
              <TouchableOpacity className="flex-row flex-center gap-1 mt-0.5">
                <Text className="paragraph-bold text-dark-100">Rijeka,Crotia</Text>
                <Image source={images.arrowDown} className="size-2" />
              </TouchableOpacity>
            </View>
            <CartButton/>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({});
