import Balance from 'components/Balance/Balance';
import ReportsLink from 'components/ReportsLink/ReportsLink';
import { NavLink } from 'react-router-dom';
import { WrapperStyled } from './HomeBar.styled';

const HomeBar = () => {
  return (
    <WrapperStyled>
      <Balance />
      <NavLink to="/reports">
        <ReportsLink />
      </NavLink>
    </WrapperStyled>
  );
};

export default HomeBar;
