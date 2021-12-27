import {
  Container,
  CardContainer,
  ButtonContainer,
  InputContainer,
  BackgroundImage,
} from './styles';

import backgroundImg from '../../assets/banner.jpg';
import logoSvg from '../../assets/logo.png';
import { Card } from '../../components/Card';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

import toast, { Toaster } from 'react-hot-toast';

export const SignUp = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { UserSignUp } = useAuth();
  const navigate = useNavigate();

  const handleToSignUp = async () => {
    try {
      const data = {
        firstName,
        lastName,
        email,
        password
      }

      const response = await UserSignUp(data);

      if (response.id) {
        navigate('/dashboard');
        return
      }

    } catch (error) {
      toast.error('E-mail já cadastrado!')
    }
  }

  return (
    <Container>
      <BackgroundImage image={backgroundImg} />
      <CardContainer>
        <Card width='100%' >
          <img src={logoSvg} alt="Logo-Banco-Inter" width={172} height={61} />
          <InputContainer>
            <Input placeholder='NOME' value={firstName} onChange={(event) => setFirstName(event.target.value)} />
            <Input placeholder='SOBRENOME' value={lastName} onChange={(event) => setLastName(event.target.value)} />
            <Input placeholder='EMAIL' value={email} onChange={(event) => setEmail(event.target.value)} />
            <Input placeholder='SENHA' type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </InputContainer>

          <ButtonContainer>
            <Button type='button' onClick={handleToSignUp} >Entrar</Button>
            <p>Já tem uma conta?? <Link to="/">Entre já</Link></p>
          </ButtonContainer>
        </Card >
      </CardContainer>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </Container>
  );
}