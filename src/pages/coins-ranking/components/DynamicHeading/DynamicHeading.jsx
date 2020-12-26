import { useEffect, useState } from 'react';
import { Skeleton, Typography } from 'antd';
import ReadMore from '../../../../components/readmore/ReadMore';
import './dynamic-heading.scss';
import { getCryptoGlobalData } from '../../../../utilities/api';

const { Title, Paragraph } = Typography;

const DynamicHeading = () => {
  const currency = 'usd';
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(undefined);
  const [cryptoGlobalData, setCryptoGlobalData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(undefined);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      getCryptoGlobalData(currency).then((data) => setCryptoGlobalData(data));
      console.log({ cryptoGlobalData });
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <Title level={2} className="title">
        Today&apos;s Cryptocurrency Prices by Market Cap
      </Title>
      {isLoading && <Skeleton active />}
      {!isLoading && (
        <div className="content">
          <Paragraph className="content--text">
            The global crypto market cap is $
            {cryptoGlobalData &&
              (cryptoGlobalData.totalMarketCap.usd / 1000000000).toFixed(2)}
            B $671.42B, a{' '}
            {cryptoGlobalData &&
              cryptoGlobalData.marketCapChangePercentage24hUsd.toFixed(2)}{' '}
            % 3.64% increase over the last day.{' '}
            <ReadMore
              isOpen={isReadMoreOpen}
              setIsOpen={setIsReadMoreOpen}
              className="read-more"
            />
          </Paragraph>
          {isReadMoreOpen && (
            <Paragraph className="content--text">
              The total crypto market volume over the last 24 hours is , which
              makes a 14.02% increase. The total volume in DeFi is currently
              $4.83B, 2.50% of the total crypto market 24-hour volume. The
              volume of all stable coins is now $75.16B, which is 38.90% of the
              total crypto market 24-hour volume. Bitcoin&apos;s price is
              currently $24,901.73. Bitcoin’s dominance is currently 68.90%, an
              increase of 0.90% over the day.
            </Paragraph>
          )}
        </div>
      )}
    </>
  );
};

export default DynamicHeading;