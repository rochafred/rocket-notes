import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles'

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/rochafred.png" alt="User Image" />
        <div>
          <span>Bem vindo</span>
          <strong>Frederico Rocha</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
