import './ConnectWallet.scss';

export default function ConnectWallet() {
  return (
    <section className="connect-wallet">
      <div className="connect-wallet__left-image">
        <img src="/icons/ConnectWallet.svg" alt="Connect-Wallet-Image" />
      </div>
      <div className="connect-wallet__content content-connect-wallet">
        <div className="content-connect-wallet__title">Connect wallet</div>
        <div className="content-connect-wallet__text">
          Choose a wallet you want to connect. There are several wallet
          providers.
        </div>
        <div className="content-connect-wallet__types types-wallet">
          <div className="types-wallet__metamask types-wallet__type">
            <img src="/icons/Metamask.svg" alt="metamask" />
            <span>Metamask</span>
          </div>
          <div className="types-wallet__walletconnect types-wallet__type">
            <img src="/icons/WalletConnect.svg" alt="walletconnect" />
            <span>Wallet Connect</span>
          </div>
          <div className="types-wallet__coinbase types-wallet__type">
            <img src="/icons/Coinbase.svg" alt="coinbase" />
            <span>Coinbase</span>
          </div>
        </div>
      </div>
    </section>
  );
}
