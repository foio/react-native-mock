import { expect } from 'chai';


describe('AlertIOS', () => {
  const { AlertIOS } = require('react-native');

  it('should have alert', function () {
    const alert = AlertIOS.alert(
      'Update available',
      'Keep your app up to date to enjoy the latest features',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: 'Install',
          onPress: () => console.log('Install Pressed')
        },
      ]
    );
    expect(alert).to.be.undefined
  });

  it('should have prompt', function () {
    const prompt = AlertIOS.prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password)
        }
      ],
      'secure-text'
    );

    expect(prompt).to.be.undefined;
  });
});
