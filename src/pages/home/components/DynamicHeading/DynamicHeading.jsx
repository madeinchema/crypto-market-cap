import { useState } from 'react';
import { Typography } from 'antd';
import ReadMore from '../../../../components/readmore/ReadMore';
import './dynamic-heading.scss';

const { Title, Paragraph } = Typography;

const heading = `Today's Cryptocurrency Prices by Market Cap`;

const subheading = `The global crypto market cap is $671.42B, a 3.64% increase over the last day.`;

const article = `The total crypto market volume over the last 24 hours is $193.24B, which makes a 14.02% increase. The total volume in DeFi is currently $4.83B, 2.50% of the total crypto market 24-hour volume. The volume of all stable coins is now $75.16B, which is 38.90% of the total crypto market 24-hour volume. Bitcoin's price is currently $24,901.73. Bitcoin’s dominance is currently 68.90%, an increase of 0.90% over the day.`;

const DynamicHeading = () => {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(undefined);

  return (
    <>
      <Title level={2} className="dynamic-heading__title">
        {heading}
      </Title>
      <div className="dynamic-heading__content">
        <Paragraph>
          {subheading}{' '}
          <ReadMore
            isOpen={isReadMoreOpen}
            setIsOpen={setIsReadMoreOpen}
            className="dynamic-heading__read-more"
          />
        </Paragraph>
        {isReadMoreOpen && <Paragraph>{article}</Paragraph>}
      </div>
    </>
  );
};

export default DynamicHeading;
