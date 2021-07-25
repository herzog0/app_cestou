import * as React from 'react';
import {Modal, Portal, Text, Button, Provider} from 'react-native-paper';

const MyComponent = (props: any) => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <Modal
      visible={visible}
      onDismiss={hideModal}
      contentContainerStyle={containerStyle}>
      <Text>Example Modal. Click outside this area to dismiss.</Text>
    </Modal>
  );
};

export default MyComponent;
