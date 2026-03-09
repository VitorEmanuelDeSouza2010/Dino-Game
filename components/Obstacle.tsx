import dinoJBitmap from "@/assets/bitmaps/dino.json";
import dinoMBitmap from "@/assets/bitmaps/dinoM.json";
import RockBitmap from "@/assets/bitmaps/Rock.json";
import { useGame } from "@/hooks/gameHook";
import { router } from "expo-router";
import { useEffect } from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import Animated, { Easing, useAnimatedReaction, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

export default function Obstacle({onEnd}: any) {
    const { width } = Dimensions.get("window");
    const offset = useSharedValue(0);
    const { dinoHeight } = useGame();

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: -offset.value }],
    }));

    useEffect(() => {
        offset.value = withTiming(width, {duration: 3000, easing: Easing.linear}, onEnd);
    }, []);

    useAnimatedReaction(() => { return offset.value},
        (currentValue) => {
            const rockPosition = width - Math.round(currentValue);
            const left = Math.max(50, rockPosition);
            const right = Math.min(124, rockPosition + 225);
            const bottom = Math.max(0, dinoHeight.value);
            const top = 225

            if(left > right || bottom > top) {
                return;
            }

            for (let x = left; x < right; x++) {
                for (let y = bottom; y < top; y++) {
                    const xDino = x - 50;
                    const xRock = x - rockPosition;
                    const yDino = 170 - (y - dinoHeight.value);
                    const yRock = 225 - y;

                    const dinoBitmap = dinoHeight.value > 0 ? dinoJBitmap : dinoMBitmap;

                    if(
                        xDino < 355 &&
                        xDino > -1 &&
                        yDino < 225 &&
                        yDino > -1 &&
                        xRock < 225 &&
                        xRock > -1 &&
                        yRock < 225 &&
                        yRock > -1 &&
                        dinoBitmap[xDino][yDino] &&
                        RockBitmap[xRock][yRock]
                    ) {
                        router.replace("/end");
                    }
                }
            }
        },
    );

    return (
        <Animated.View style={[styles.obstacle, animatedStyle]}>
                <Image source={require("@/assets/images/Rock.webp")} resizeMode="contain" style={styles.image}/>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: "100%",
    },

    obstacle: {
        width: 225,
        height: 225,
        position: "absolute",
        bottom: "7%",
        right: 0,
    },
})