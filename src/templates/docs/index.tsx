import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Markdown, SideMenu } from 'components';

import * as S from './styles';

type DocsTemplateProps = {
  source: MDXRemoteSerializeResult;
};

export const DocsTemplate = (props: DocsTemplateProps) => {
  return (
    <S.Container>
      <SideMenu />

      <S.Content>
        <Markdown {...props} />
      </S.Content>
    </S.Container>
  );
};
