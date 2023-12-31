import { Icon } from './Icon';
import { Menu } from './Menu';
import { Wrapper } from './Wrapper';
import useSign from '../../hooks/useSign';
import { Link, NavLink, Outlet } from 'react-router-dom';

export default function PageLayout() {
  const { handleSignOut } = useSign();

  return (
    <Wrapper className='navbar'>
      <Menu className='column'>
        <Menu.Item className='navbar'>
          <Link to='/home'>
            <Icon src='/z.svg' width={30} height={30} />
          </Link>
        </Menu.Item>
        <Menu.Item className='navbar'>
          <NavLink to='/home'>
            {({ isActive }) =>
              isActive ? <Icon.Home type='fill' /> : <Icon.Home type='stroke' />
            }
          </NavLink>
        </Menu.Item>
        <Menu.Item className='navbar'>
          <NavLink to='/profile'>
            {({ isActive }) =>
              isActive ? (
                <Icon.Profile type='fill' />
              ) : (
                <Icon.Profile type='stroke' />
              )
            }
          </NavLink>
        </Menu.Item>
        <Menu.Item className='navbar' onClick={handleSignOut}>
          <Icon.SignOut type='stroke' />
        </Menu.Item>
      </Menu>
      <Outlet />
    </Wrapper>
  );
}
