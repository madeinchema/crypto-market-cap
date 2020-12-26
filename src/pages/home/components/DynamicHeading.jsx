import { useState } from 'react';
import PropTypes from 'prop-types';
import { Space, Typography } from 'antd';
import ReadMore from '../../../components/readmore/ReadMore';

const { Title, Paragraph } = Typography;

const heading = `Today's Cryptocurrency Prices by Market Cap`;

const subheading = `The global crypto market cap is $671.42B, a 3.64% increase over the last day.`;

const article = `The total crypto market volume over the last 24 hours is $193.24B, which makes a 14.02% increase. The total volume in DeFi is currently $4.83B, 2.50% of the total crypto market 24-hour volume. The volume of all stable coins is now $75.16B, which is 38.90% of the total crypto market 24-hour volume. Bitcoin's price is currently $24,901.73. Bitcoin’s dominance is currently 68.90%, an increase of 0.90% over the day.`;

const DynamicHeading = (props) => {
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(undefined);

  return (
    <>
      <Title level={2}>{heading}</Title>
      <div style={{ maxWidth: 900 }}>
        <Space>
          <Paragraph>
            {subheading}{' '}
            <ReadMore isOpen={isReadMoreOpen} setIsOpen={setIsReadMoreOpen} />
          </Paragraph>
        </Space>
        {isReadMoreOpen && <Paragraph>{article}</Paragraph>}
      </div>
    </>
  );
};

DynamicHeading.propTypes = {};

export default DynamicHeading;
