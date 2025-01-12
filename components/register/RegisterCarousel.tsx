import { View, FlatList } from 'react-native';
import registerDataJSON from './registerCarouselData.json';
import { iUserData } from '@/types/types';
import { Dispatch, useCallback, useRef, useState } from 'react';
import Slide from './slide/Slide';
import CircleSvg from '@/assets/svg/shapes/Circle';

export default function RegisterCarousel({
  userData,
  setUserData,
}: {
  userData: iUserData;
  setUserData: Dispatch<React.SetStateAction<iUserData>>;
}) {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;
  const onScroll = useCallback(
    (event: {
      nativeEvent: {
        layoutMeasurement: { width: any };
        contentOffset: { x: number };
      };
    }) => {
      const slideSize = event.nativeEvent.layoutMeasurement.width;
      const index = event.nativeEvent.contentOffset.x / slideSize;
      const roundIndex = Math.round(index);

      const distance = Math.abs(roundIndex - index);

      // Prevent one pixel triggering setIndex in the middle
      // of the transition. With this we have to scroll a bit
      // more to trigger the index change.
      const isNoMansLand = 0.4 < distance;

      if (roundIndex !== indexRef.current && !isNoMansLand) {
        setIndex(roundIndex);
      }
    },
    []
  );

  return (
    <View>
      <FlatList
        style={{ flex: 1 }}
        data={registerDataJSON}
        renderItem={({ item }) => {
          return <Slide data={item} />;
        }}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
      <View
        style={{
          flex: 1,
          position: 'absolute',
          bottom: 20,
          flexDirection: 'row',
          alignSelf: 'center',
          gap: 10,
        }}
      >
        <CircleSvg size={10} color={'grey'} />
        <CircleSvg size={10} color={'grey'} />
        <CircleSvg size={10} color={'grey'} />
        <CircleSvg size={10} color={'grey'} />
      </View>
    </View>
  );
}

// **Calorie Deficit = TDEE − Calories Consumed**

// Where:

// - TDEE: Total number of calories a body needs to maintain its current weight
// - Calories Consumed: Total number of calories you consume through any activity

// To calculate your total daily energy expenditure (TDEE), there is a following formula:

// **TDEE = BMR × Activity Factor**

// In the TDEE formula, BMR is the number of calories expended as your body performs the basic functions of life. For calculating BMR, try our [BMR calculator](https://calculator-online.net/bmr-calculator/) or just put values in the given Mifflin-St Jeor equations.

// **For Men:**

// - BMR = 88.362 + (13.397 × weight in kg) + (4.799 × height in cm) − (5.677 × age in years)

// **For Women:**

// - BMR = 447.593 + (9.247 × weight in kg) + (3.098 × height in cm) − (4.330 × age in years)

// Another term in the TDEE formula is the activity factor. This depends on your activity level:

// - Sedentary (little or no exercise): TDEE = BMR x 1.2
// - Lightly active (light exercise/sports 1-3 days/week): TDEE = BMR x 1.375
// - Moderately active (moderate exercise/sports 3-5 days/week): TDEE = BMR x 1.55
// - Very active (hard exercise/sports 6-7 days a week): TDEE = BMR x 1.725
// - Extra active (very hard exercise/sports & physical job or 2x training): TDEE = BMR x 1.9
