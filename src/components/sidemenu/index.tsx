import Link from 'next/link';
import { navs } from './navs';

import * as S from './styles';

export const SideMenu = () => {
  return (
    <S.Container>
      <nav>
        <S.Wrapper>
          {navs.map(({ label, link }) => (
            <li key={link}>
              <S.Box>
                <Link href={link}>{label}</Link>
              </S.Box>
            </li>
          ))}
        </S.Wrapper>
      </nav>
    </S.Container>
  );
};
