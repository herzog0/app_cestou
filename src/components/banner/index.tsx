import * as React from 'react';
import {Image, View} from 'react-native';
import {Banner as PaperBanner} from 'react-native-paper';

const Banner = ({text, imageUri}) => {
  const [visible, setVisible] = React.useState(true);

  return (
    <View style={{flex: 1}}>
      <PaperBanner
        visible={visible}
        actions={[
          {
            label: 'Entendi!',
            onPress: () => setVisible(false),
          },
        ]}
        icon={'food-apple-outline'}>
        {text}
      </PaperBanner>
    </View>
  );
};

export default Banner;
