import * as React from 'react';
import { Link } from 'react-router-dom';
import { Text, Card, Heading } from 'theme-ui';
import DashboardBadge from './dashboard.badge';

type PropTypes = {
  active?: boolean;
  title: string;
  value: number;
  badgeValue: number;
  status: string;
  to: string;
};

/**
 * Dashboard Tab
 */
const DashboardCard: React.FC<PropTypes> = (props) => {
  return (
    <Link to={props.active ? props.to : '/'}>
      <Card variant={props.active ? 'dashboardTab' : 'dashboardTabActive'}>
        <DashboardBadge value={props.badgeValue} />
        <Heading as="h4">{props.title}</Heading>
        <Text as="p" sx={{ fontSize: 7, fontFamily: 'light' }}>
          {props.value}
        </Text>
        <Text color="textLight">{props.status}</Text>
      </Card>
    </Link>
  );
};

DashboardCard.defaultProps = {
  active: false,
  to: '/',
};

export default DashboardCard;
