import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

import { BarChart } from "react-native-chart-kit";
import SquliteFunation from '../../comanFunction/SquliteFunation';

const DashBoardScreen = () => {
  const { useList } = SquliteFunation()

  let userData = useList === null ? 0 : Math.floor(useList?.length)
  console.log("useList --------------------------------------------", typeof useList?.length)
  const screenWidth = Dimensions.get("window").width;
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [userData]
      }
    ]
  };
  const chartConfig = {
    backgroundGradientFrom: "#FFFFFF",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(252, 3, 3, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  return (
    <View style={{ marginTop: 50 }}>
      <BarChart
        style={{}}
        data={data}
        width={screenWidth}
        height={400}
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
      <Text style={{ alignItems: 'center', alignSelf: 'center', color: 'green', fontWeight: '600', fontSize: 24 }}> Moth Wish Data</Text>
    </View>
  )
}

export default DashBoardScreen

const styles = StyleSheet.create({})