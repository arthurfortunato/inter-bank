import {
  Container,
  HeaderContainer,
  UserInfo
} from './styles';

import logoImg from '../../assets/logo.png';
import { UserCircle } from '../UserCircle';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const Header = () => {
  const navigate = useNavigate();
  const { user, Logout } = useAuth();

  const initial = user ? user.firstName.substring(0, 1) + user.lastName.substring(0, 1) : '';
  
  const handleLogout = () => {
    Logout()
    navigate('/')
  }

  return (
    <Container>
      <HeaderContainer>
        <img src={logoImg} alt="logo-banco-inter"/>
        <UserInfo>
          <UserCircle initials={initial} />
          <div>
            <p>Olá, <span className='orange-color font-bold'>{user?.firstName} {user?.lastName}</span></p>
            <strong>{user?.accountNumber}-{user?.accountDigit}</strong><br />
            <button onClick={handleLogout}>Sair</button>
          </div>
        </UserInfo>
      </HeaderContainer>
    </Container >
  );
}