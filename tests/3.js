import { Selector } from 'testcafe';
import { serverUrl } from './shared/const';

fixture('SkyWay P2P:Data')
  .page(`${serverUrl}/3`);

const localPre = Selector('#local-pre');
const remotePre = Selector('#remote-pre');
const connectBtn = Selector('#connect-btn');

test('should connect P2P w/ DataConnection', async t => {
  // click to start call
  await t.click(connectBtn);

  await t.expect(remotePre.textContent).eql('ping');

  await t.expect(localPre.textContent).eql('pong');
});
