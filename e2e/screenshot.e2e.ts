/* eslint no-undef: 0  */
import {takeScreenshot} from '../app/utils/screenshot';
import {by, expect, element} from 'detox';
describe('screenshot', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  it('should take screenshots', async () => {
    takeScreenshot('HOME');
    await expect(element(by.id('PROFILE'))).toBeVisible();
    await element(by.id('PROFILE')).tap();
    takeScreenshot('PROFILE');
  });
});
