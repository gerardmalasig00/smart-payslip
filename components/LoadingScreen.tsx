import { View, StyleSheet } from "react-native";
import React, {
  LegacyRef,
  MutableRefObject,
  RefAttributes,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { images } from "@/constants";
import { ResizeMode, Video } from "expo-av";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";

const LoadingScreen = () => {
  const videoPlayer = useRef<Video | null>(null);
  const [status, setStatus] = useState<any>();
  const [paused, setPaused] = useState(false);

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Video
          ref={videoPlayer!}
          style={styles.video}
          source={images.logoVideo}
          useNativeControls={false} // This prop hides the video controls
          shouldPlay
          resizeMode={ResizeMode.CONTAIN}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
        <StatusBar backgroundColor="#161622" style="light" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: 232,
  },
});

export default LoadingScreen;
